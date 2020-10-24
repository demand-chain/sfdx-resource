import { SfdxCommand, flags } from '@salesforce/command';
import { Messages, SfdxProject } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { join } from 'path';
import zipdir = require('zip-dir');
import xmlbuilder = require('xmlbuilder');
import fs = require('fs');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('sfdx-resource', 'bundle');

export default class Bundle extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [`$ sfdx resource:bundle bundle resource`];

  public static args = [{name: 'resource', required: true, description: messages.getMessage('arg0')}];

  protected static flagsConfig = {
    help: flags.help({ char: 'h' }),
    private: flags.boolean({
        char: 'p',
        description: messages.getMessage('privateFlagDescription')
    }),
    name: flags.string({
        char: 'n',
        description: messages.getMessage('nameFlagDescription')
    }),
    description : flags.string({
        char: 'd',
        description: messages.getMessage('descriptionFlagDescription')
    })
  }

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = true;

  public async run(): Promise<AnyJson> {
    const resource = this.args.resource;
    const project = await SfdxProject.resolve();
    const basePath = project.getPath();

    //Give the user the option of specifying the name of the static resource.
    //If not specified, defaults to the same name as the unbundled directory.
    var staticResourceName = resource;
    if(this.flags.name){
        staticResourceName = this.flags.name;
    }

    const bundlePath = join(basePath,'force-app','main','default','staticresources',staticResourceName+'.resource');
    const unbundlePath = join(basePath,'bundles',resource);
    zipdir(unbundlePath,{saveTo: bundlePath},(err,buffer) => {});

    var cacheControl = 'Public';
    if(this.flags.privateCacheControl){
        cacheControl = 'Private';
    }

    var staticResourceDescription = resource;
    if(this.flags.description){
        staticResourceDescription = this.flags.description;
    }

    var staticResourceContent = xmlbuilder.create('StaticResource')
        .att('xmlns','http://soap.sforce.com/2006/04/metadata')
        .ele('contentType')
            .txt('application/zip')
        .up()
        .ele('description')
            .txt(staticResourceDescription)
        .up()
        .ele('cacheControl')
            .txt(cacheControl)
        .end({ pretty: true })
        .toString();

    fs.writeFile(bundlePath + '-meta.xml', staticResourceContent, {flag: "wx"}, function (err) {});

    let outputString = `success`;
    // Return an object to be displayed with --json
    return { file: bundlePath, outputString };
  }
}
