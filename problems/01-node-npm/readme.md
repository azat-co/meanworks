PROBLEM

Howdy and welcome to the MEANWorks adventure workshop!

You'll get a set of problems. Experiment solving them without looking at HINTS below.
If you're stuck even with HINTS, raise your hand and a mentor will help you.
If you're working by yourself, then you can get the inspiration from the official solution by typing meanworks solution (not recommended!).

1. This workshop requires Node.js (duh!). First of all, we need to have Node installed.
And we're going to do is make sure that your Node.js version is 5.1.0 or later.
2. Now, we need to check the npm installation. We recommended using npm v2.14.15, not v3.x (slooooooow). To downgrade from v3, use `$ npm install -g npm@2.14.15`.

Once you have it, run `$ meanworks verify`.

---

HINTS

Use `$ node -v` to check the version.

To use Node installer (a N00b approach):

http://nodejs.org/

Make sure to select 5.1.0.

To switch versions, use n. To install n:

```
$ npm install -g n
```

For power users (for advanced hackers):

https://gist.github.com/isaacs/579814

Other version managers (for power users):

* n https://github.com/tj/n
* nvm https://github.com/creationix/nvm
* nave https://github.com/isaacs/nave


npm comes with Node, so no extra steps for installation-just configuration. Check your version with `$ npm -v`.

If you need to configure npm proxy, run `$ npm config list`, `$ npm config set proxy http://localhost:8099/` and `$ npm config set https-proxy http://localhost:8099/` or whatever URL of proxy is.

All npm commands are listed with the `$ npm help` command.

You can use npm to upgrade/downgrade npm with `$ npm install -g npm@2.14.15`.
For example, if you need npm v2.x  but have v3.x, you can run `$ npm install -g npm@2.14.15`.
