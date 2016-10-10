# material2-app
Simple app that consumes Angular Material 2 components. Built with the `angular-cli`.

See it live: https://material2-app.firebaseapp.com/

### Pre-requisite
# globally install angular-cli
$ npm install -g angular-cli

### Installation

```bash
# clone our repo
$ git clone https://github.com/jelbourn/material2-app.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

$ npm install typescript @angular/compiler-cli @angular/platform-server --save

# run ngc compiler. if you get 'ngc command not found' error then try adding /path/to/my-app/node_modules/.bin to your $PATH
$ ./node_modules/.bin/ngc -p src/tsconfig.json

# start the server
$ npm start
```
go to [http://localhost:4200](http://localhost:4200) in your browser.
