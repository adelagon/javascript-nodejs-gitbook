# Setting up your Environment

The following guide documents some of the steps needed in order for this Notebook and node.js to run in your own environment.

Do take note that, this guide assumes that you are using **Mac OSX Sierra upwards**

## Brew

Documented in: https://docs.brew.sh/Installation

Or just run:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Git

Once Brew is installed, you may now install Git

```bash
brew install git
```



## NVM

Since it is not recommended to use any system-wide node.js installation. Node Version Manager (NVM) will be used in order to install isolated environments of node.js in your machine. This is documented in: https://github.com/creationix/nvm

Or just run:

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

If your machine doesn't have wget installed:

```bash
curl -O https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```



## NPM

Now with NVM installed, you may now install node.js its Node Package Manager. NPM is needed in order to pull third-party libraries.

As of this writing, the latest stable version of node.js is **v8.11.4**

```bash
nvm install v8.11.4
nvm use v8.11.4
```

The commands above will install node.js and the corresponding NPM version for that distribution. This can be verified by:

```bash
nvm ls
```



## Editor

Since we are trying to learn the basics, it is recommended to use the simplest editor there is. We recommend that you install **[SublimeText](https://www.sublimetext.com/)**

### Notebook

The documentation for this training is written using gitbook (https://www.gitbook.com). Here's the steps required in order to run this on your local computer:

```bash
cd ~/
git clone git@github.com:adelagon/javascript-nodejs-gitbook.git
cd nodejs-qe-gitbook
npm install
npm start
```

The notebook will then be accessible on your browser on: http://localhost:4000

