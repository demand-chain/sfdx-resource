sfdx-resource
===========

An SFDX plugin for working with static resources and resource bundles

[![Version](https://img.shields.io/npm/v/sfdx-respource.svg)](https://npmjs.org/package/sfdx-resource)
[![Codecov](https://codecov.io/gh/dancinllama/sfdx-resource/branch/master/graph/badge.svg)](https://codecov.io/gh/dancinllama/sfdx-bundle)
[![Greenkeeper](https://badges.greenkeeper.io/dancinllama/sfdx-resource.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dancinllama/sfdx-resource/badge.svg)](https://snyk.io/test/github/dancinllama/sfdx-resource)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-resource.svg)](https://npmjs.org/package/sfdx-resource)
[![License](https://img.shields.io/npm/l/sfdx-resource.svg)](https://github.com/dancinllama/sfdx-resource/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session

For installing the plugin  (make sure you have sfdx installed and updated first):

$ sfdx plugins:install sfdx-resource


For taking a directory in the root/bundles (in this example called resource name) and converting it to a static resource, use the bundle command:

$ sfdx resource:bundle <resourcename>

$ sfdx resource:bundle <resourcename> -n MyStaticResource -d A description of my static resource

$ sfdx resource:bundle --help

For extracting a static resource in a SFDX project, so that you can modify the contents, use the unbundle command:

$ sfdx resource:unbundle <resourcename>

$ sfdx resource:unbundle --help
...
```
<!-- usagestop -->
<!-- commands -->

<!-- commandsstop -->
<!-- debugging-your-plugin -->
