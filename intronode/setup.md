# Setting up your node.js Project

The following guides are typical ways of starting a new node.js project from scratch. We will also be tackling a little bit about the other helper components in your project.

## Set your node.js version

For this training we will be using the latest LTS (long-term-support) version of node v8.11.4.

```bash
nvm use v8.11.4
nvm ls
```



## Create a new project directory

```bash
cd ~/
mkdir nodejs-training
cd nodejs-training
```

## Initialize

node.js uses the **Node Package Manager** for managing your project metadata and codebase. In order to initialize your project run:

```bash
npm init
```

This will create a new file called **package.json** which contains some important details about your project.

```bash
{
  "name": "nodejs-training",
  "version": "0.0.1",
  "description": "Practicing node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alvin Delagon",
  "license": "ISC"
}
```

One interesting **package.json** file can be found in nodejs-qe-gitbook repository:

```json
{
  "name": "nodejs-qe-gitbook",
  "version": "0.0.1",
  "dependencies": {
    "gitbook-cli": "^2.3.2",
    "gitbook-plugin-exercises": "^3.0.0",
    "gitbook-plugin-runkit": "0.0.1"
  },
  "description": "A gitbook for QE Programming Foundation Training (nodejs)",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "postinstall": "node_modules/gitbook-cli/bin/gitbook.js install",
    "start": "node_modules/gitbook-cli/bin/gitbook.js serve"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:adelagon/javascript-nodejs-gitbook.git"
  },
  "keywords": [
    "training",
    "node.js",
    "qe"
  ],
  "author": "Alvin Delagon",
  "license": "ISC"
}
```

More details about the package.json file can be found here: https://docs.npmjs.com/files/package.json

Once you have initialized your directory, we may now proceed with the next steps.

## Installing libraries

node.js has a huge collection of third party libraries in hosted in https://www.npmjs.com. Before you implement anything, make sure that you search the repository first if there's anything you can reuse.

For now, we'll be installing the **request** library (https://www.npmjs.com/package/request), we will be using this on the next sections. You can install packages this way:

```bash
npm install --save request
```

This pull the request library from npmjs, installs it on **node_modules** directory and adds it as a dependency your package.json file.

