PROBLEM

Howdy and welcome to the MEANWorks adventure workshop!

You'll get a set of problems. Experiment solving them without looking at HINTS below.
If you're stuck even with HINTS, raise your hand and a mentor will help you.
If you're working by yourself, then you can get the inspiration from the official solution by typing meanworks solution (not recommended!).

1) First of all, we need to have npm installed.
And we're going to do is make sure that your Node.js version is up to date.

This workshop requires Node.js (duh!). Please have v4.1.1+ installed. Once you have it, run `$ meanworks verify`.

2) Now, we need to check the npm installation.
And we're going to do is make sure that your npm version is up to date.

This adventure requires the Internet connection.


---

HINTS

Use `$ node -v` to check the version.

To use Node installer (N00b approach):

http://nodejs.org/

For Mac OS X:

$ brew install nodejs@5.1.0

For power users (advanced hackers):

https://gist.github.com/isaacs/579814

For multi-version setup (power users):

* n https://github.com/tj/n
* nvm https://github.com/creationix/nvm
* nave https://github.com/isaacs/nave

To use nvm: nvm use 4.2.2, nvm install 5.1.0

npm comes with Node, so no extra steps for installation-just configuration. Check your version with `$ npm -v`.

If you need to configure npm proxy, run `$ npm config list`, `$ npm config set proxy http://localhost:8099/` and `$ npm config set https-proxy http://localhost:8099/` or whatever URL of proxy is.

All npm commands are listed with the `$ npm help` command.

You can use npm to upgrade npm with `$ npm install -g npm`.

For example, if you need npm v3.x  but have v2.x, you can run `$ npm install -g npm@3.3.12`.
