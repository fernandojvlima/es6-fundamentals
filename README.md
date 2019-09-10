# es6-fundamentals
Repository dedicated to features of ES6 and ES7 and ES8, material used in the Rocket Seat Course.

-> Install node from nodes.org (its version is indicated)
To check the version : node  - - version

-> Install Yarn 

After these… in the root of the project:

Using terminal:

Yarn init -y
Obs: this process will create the package.json with information of dependencies of your application.

Add dependence CLI:
Yarn add @babel/cli
Obs: it will enable the command line to us with Babel.

Add dependence Preset Env
Yarn add @babel/preset-env

After these processes , note that has added in your file yarn.lock and node_modules ( use .gitignore on it).

Setting up Babel in your project:
-> Create a new file named (.babelrc)
In the file:
{
	“presets” : [“@babel/preset-env”]
}
Obs: Babel will check the environment you are using and make the bridge to the browse (ES6,ES7, ES8 in pure JS).

In the package.json open the “scripts”: 
{
	“dev”: “babel ./main.js -o ./bundle.js -w”
}

Add dependence Core
Yarn add @babel/core

In your index.html , in the script tag, add your src=“bundle.js”

Add dependence Rest, Spread
Yarn add @babel/plugin-proposal-object-rest-spread

-> In babelrc , insert “plugins” in the object:
“plugins” : [“@babel/plugin-proposal-object-rest-spread”]

*********
Configuring WEBPACK
It is a service that makes possible to work with many different sources of JS files (not only main.js for example), all the files will be sent to bundle normally.

To avoid uploading all the code, now go to package.json, and change the “dependencies” to “devDependencies”.
From this point, when you add a dependence, use -D at the final of the command line.

Add dependence Webpack
yarn add webpack webpack-cli -D

Now your package.json should be like this:
{
  "name": "es6-fundamentals",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/fernandojvlima/es6-fundamentals.git",
  "author": "Fernando Lima <fernandojvlima@gmail.com>",
  "license": "MIT",

  "devDependencies": {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.5.5",
    "@babel/preset-env": "^7.6.0",
    "webpack-cli": "^3.3.8"
  },
  "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
}


-> After this you added them, create a file with web pack configs, named as : webpack.config.js

module.exports = {
    entry: ‘./main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,  
              use: {
                  loader: 'babel-loader',
              }
            }
        ],
    },
};

-> Go to the terminal to install Babel Loader
Yarn add babel-loader -D

At this point, you can go to package.json  and change the “dev”: “webpack —mode=development -w“

