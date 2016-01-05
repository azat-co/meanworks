PROBLEM

As with any adventure, you need to pick the best tools to be successful! ;)

Install these:

1. Bower v1.5.3
2. Yeoman (yo) v1.5.1
3. Grunt v0.1.13
4. generator-angular-fullstack v3.1.1
5. Webdriver Manager v8.0.0

---

HINTS

Use `bower --version` to check the version.

To install bower v1.4.1 execute this command in your Terminal/Command prompt:

$ npm install -g bower@1.4.1

If you're working under proxy, configur bower appropriately.

Bower is like an npm only for front-end modules. It has a flat-structure in its dependency folder bower_components.

Please install bower like any other npm module. Do it globally, because bower is a command-line tool and not a project dependency. (Command-line tools installed globally while project dependencies installed locally.)

Please use Bower v1.4.1.

As for grunt, if you see encounter issues then run `$ grunt --version`.
If you see two grunt (grunt-cli and grunt) run `$ npm uninstall grunt` and re-verify.

Use `$ yo --version` to check the version.

To install Yeoman v1.4.7 execute:

$ npm install -g yo@1.4.7

Yo docs: https://github.com/yeoman/yo
Yo website: http://yeoman.io

One of the best way to test AngularJS app is to use Selenium WebDriver Manager and WebDriverIO. We'll need it for UI testing. Your WebDriverIO is already installed (via npm install from package.json)! Let's install webdriver-manager:

1. Install webdriver-manager (npm install webdriver-manager -g)
2. Update it with `$ webdriver-manager update`
3. Start it with `$ webdriver-manager start` (have it running in a separate window)

WebDriver is a command-line tool so install it with npm accordingly.

The npm name is webdriver-manager. We need version 8.0.0.

We use -g flag (or --global) when installing command-line tools:

$ npm install -g webdriver-manager
$ webdriver-manager update --standalone
$ webdriver-manager start
