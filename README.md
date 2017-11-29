# Logger helper (with papertrail)

## Warning

To run `npm install` or `yarn install` in your project with this module in it you need to store your key in a ssh-agent or in your MacOs Keychain : https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/logger-helper#v1.X.X
```

## Requirements

if you want to import this npm module in your project, you have to define the following environnement variables :

```
PAPERTRAIL_PORT
PAPERTRAIL_URL
PAPERTRAIL_LEVEL
PAPERTRAIL_HOSTNAME
```

## usage

This logger is used to display messages. It display console message in local developpement, and use Papertrail logs in production environnement.
This module exposes 4 methods :

```javascript
imports {debug, log, warn, error} from 'logger-helper';

debug('this is a debug message');
log('this is a log message');
warn('this is a warn message');
error('this is a error message');
```

## Contribute

### Quickstart

```
yarn install
yarn build
```

### Tests

```
yarn test
```