import { SfdxCommand, flags } from '@salesforce/command';
import { SfdxProject, Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { join } from 'path';
import unzipper = require('unzipper');
import fs = require('fs');

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('sfdx-bundle','unbundle');

export default class Unbundle extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [`$ sfdx resource:unbundle <resource>`];

  public static args = [{name: 'resource', required: true, description: messages.getMessage('arg0')}];

  protected static flagsConfig = {
    help: flags.help({ char: 'h' })
  }
  //protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    //resource: flags.string({char: 'r', description: messages.getMessage('nameFlagDescription')}),
  //};

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = true;

  public async run(): Promise<AnyJson> {
    const resource = this.args.resource;

    const project = await SfdxProject.resolve();
    const basePath = project.getPath();
    const bundlePath = join(basePath,'force-app','main','default','staticresources',resource+'.resource');
    const unbundlePath = join(basePath,'bundles',resource);

    fs.createReadStream(bundlePath)
        .pipe(unzipper.Extract({ path: unbundlePath }))
        .on('entry', entry => entry.autodrain())
        .promise()
        .then( () => console.log('done'), e => console.log('error',e));

    let outputString = `success`;
    // Return an object to be displayed with --json
    return { dir: unbundlePath, outputString };
  }
}
