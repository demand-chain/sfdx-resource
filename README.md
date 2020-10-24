sfdx-resource
===========

An SFDX plugin for working with static resources and resource bundles

[![Version](https://img.shields.io/npm/v/sfdx-respource.svg)](https://npmjs.org/package/sfdx-resource)
[![Codecov](https://codecov.io/gh/dancinllama/sfdx-resource/branch/master/graph/badge.svg)](https://codecov.io/gh/dancinllama/sfdx-resource)
[![Greenkeeper](https://badges.greenkeeper.io/dancinllama/sfdx-resource.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/dancinllama/sfdx-resource/badge.svg)](https://snyk.io/test/github/dancinllama/sfdx-resource)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-resource.svg)](https://npmjs.org/package/sfdx-resource)
[![License](https://img.shields.io/npm/l/sfdx-resource.svg)](https://github.com/dancinllama/sfdx-resource/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-resource
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-resource/0.0.1 win32-x64 node-v10.15.1
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx resource:bundle [-h <help>] [-p] [-n <string>] [-d <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-resourcebundle--h-help--p--n-string--d-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx resource:unbundle [-h <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-resourceunbundle--h-help---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx resource:bundle [-h <help>] [-p] [-n <string>] [-d <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Bundles / zips the resource directory in the bundles directory at the root of an SFDX project and creates / updates the static resource.

```
USAGE
  $ sfdx resource:bundle [-h <help>] [-p] [-n <string>] [-d <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

ARGUMENTS
  RESOURCE  The name of the directory to bundle.  This directory must exist in ./bundles

OPTIONS
  -d, --description=description                                                     (Optional). If specified, determines
                                                                                    the description of the static
                                                                                    resource.  If not specified,
                                                                                    defaults to the name of the
                                                                                    unbundled directory.

  -h, --help                                                                        show CLI help

  -n, --name=name                                                                   (Optional). If specified, determines
                                                                                    the name of the static resource.  If
                                                                                    not specified, name is defaulted to
                                                                                    the name of the unbundled directory.

  -p, --private                                                                     If set to true, then the static
                                                                                    resource is set to Private Cache
                                                                                    Control.  Public, otherwise.

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx resource:bundle bundle resource
```

_See code: [lib\commands\resource\bundle.js](https://github.com/demand-chain/sfdx-resource/blob/v0.0.1/lib\commands\resource\bundle.js)_

## `sfdx resource:unbundle [-h <help>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Unzips / unbundles a static resource into a bundles directory at the root of an SFDX project.

```
USAGE
  $ sfdx resource:unbundle [-h <help>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

ARGUMENTS
  RESOURCE  The name of the static resource to unzip / unbundle.  Omit .resource from the name.  For a static resource
            named Example.resource, use 'Example'

OPTIONS
  -h, --help                                                                        show CLI help
  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx resource:unbundle <resource>
```

_See code: [lib\commands\resource\unbundle.js](https://github.com/demand-chain/sfdx-resource/blob/v0.0.1/lib\commands\resource\unbundle.js)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
