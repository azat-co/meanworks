PROBLEM

For the M.E.A.N. stack app development, we need to have MongoDB installed.
MongoDB is a scalable document-store NoSQL database with JavaScript interface.

And we're going to check for MongoDB on your computer, and to make sure that your MongoDB version is compatible with this workshop.

We are using v3.0.6.

Run `$ $ADVENTURE_COMMAND verify` when you are ready to check the installation and version of MongoDB.

---

HINTS

Use `$ mongod --version` to check the version.

To use installers or source code:

http://docs.mongodb.org/master/installation/

Or at

* Mac OS X: http://downloads.mongodb.org/osx/mongodb-osx-x86_64-3.0.6.tgz
* Win: http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.0.6-signed.msi
* Linux: http://downloads.mongodb.org/linux/mongodb-linux-x86_64-amazon-3.0.6.tgz


For Mac OS X:

$ brew install mongodb@3.0.6

Don't forget to set your db path or create `/db/data` folder in root with the right permissions.
