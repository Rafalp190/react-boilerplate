# react-boilerplate

React Boilerplate for EZ web development

## Description

**react-boilerplate** is a premade react project that contains a set of basic utilties to jumpstart a **NodeJS + React** project.  
This boilerplate is the result of an introduction to Web Development course at Universidad del Valle de Guatemala.  

## Pre-requisites  

To be able to run this project boilerplate you will require an instalation of:

- [Git](https://git-scm.com/) 
- [NodeJS](https://nodejs.org/en/)

## Installation  

Clone the github repository in a directory of your choosing

```
git clone https://github.com/Rafalp190/react-boilerplate.git
```

Open a terminal/shell window inside the react-boilerplate directory and run:

```
npm install
```

This will download all of the dependencies required to run the example project and to jumpstart any project of your own. 

### Verifying installation

To verify that everything installed correctly you can do:

```
npm start
```
This will launch the webpack-dev-server at [localhost:8080](http://localhost:8080/) where you will be shown the example react-boilerplate app.

## Project Structure

- React boilerplate  
  - dist  
    - main.js  
    - index.html (entry point)  
  - node_modules (node package module install location)  
  - src (source code directory for your apps)  
    - index.js (App entry point)  
    - example (directory with example app code)  
  - .babelrc (babel configuration file)  
  - .eslintrc.json (eslint configuration file)  
  - package.json (npm package list)  
  - webpack.config.js (webpack configuration file)  
  - README.md (this readme)  
  - .gitignore (basic .gitignore for node projects)  

## Packages included

The packages included for this project were chosen from popular web development tools as of november 2018.  
The packages chosen are the following:

### Main dependencies
Dependencies to run and compile a webpack based node+react+redux application

| Package| Brief Description | Version|
|:-------------:|:-------------|:-----:|
|[webpack][1]| static module bundler for modern JavaScript applications. | 4.17.1 |
| [webpack-cli][2]|command line interface for configuring webpack|3.1.0|
| [webpack-dev-server][3] | Development server for easier workflow of webpack bundled apps|3.1.5|
| [babel-core][4]| Core packages for the babel transpiler for javascript |6.26.3|
| [babel-loader][5]| webpack loader for babel | 7.1.5|
| [babel-preset-es2017][6] | babel rules for [es2017 styled code][7] | 6.24.1 |
| [babel-preset-react][8] | babel rules for [react styled code][9]| 6.24.1|
| [react][9] | Facebook's react library for building user interfaces | 16.4.2 |
| [react-dom][10] | Interface for modifying the web dom using react components | 16.4.2
| [react-router][11] | Declarative routing for react based applications | 4.3.1 |
| [redux][12] | Predictable state container for javascript apps | 4.0.1 |
| [react-redux][13] | Interface for react components to utilize redux stores | 5.1.1 |
| [html-webpack-plugin][14] | Simplifies creation of HTML files to serve your webpack bundles | 3.2.0 |
| [file-loader][15] | Loader for image files | 2.0.0 |
| [url-loader][16] | Loader for URLs and static links | 1.1.1 |
| [style-loader][17] | Loader for style files | 0.23.0 |
| [css-loader][18] | Loader for .css style files | 1.0.0 |
| [sass][19] | Base Sass Syntactically Aswesome Style Sheets | 1.15.1 |
| [sass-loader][20] | Loader for .scss style files | 7.1.0 |
| [node-sass][21] | NodeJS Libsass wrapper| 4.10.0 |
| [prop-types][22] | Runtime type checker for React Props | 15.6.2 |

### Developer dependencies

| Package| Brief Description | Version|
|:-------------:|:-------------|:-----:|
|[chai][23]|BDD/TDD assertion library for node.js and the browser. Test framework agnostic  | 4.2.0 |
|[chai-enzyme][24]| Chai.js assertions for enzyme| 1.0.0-beta.1 |
|[enzyme][25] | JavaScript Testing utilities for React | 3.7.0 |
|[eslint][26] | An AST-based pattern checker for JavaScript. | 5.5.0 |
|[eslint-config-airbnb][26] | Airbnb configuration defaults for eslint |16.1.0 |
|[eslint-plugin-import][26] | Import with sanity  | 2.14.0 |
|[eslint-plugin-jsx-ally][26] |Static AST checker for accessibility rules on JSX elements. |8.1.1 |
|[eslint-plugin-react][26] | React rules for eslint | 7.11.1 |
|[redux-devtools][27] | Redux developer tools for hot reloading and time travel | 3.4.2 |

## Aditional Information

To be able to add your project instead of the example make sure to check the **src/index.js** file. This is where you declare your entrypoint component. In the case of the example application we declare an App.jsx component as the base file for execution. Simply changing the path on this line `import App from './example/components/App.jsx'` will be enough to reroute your application towards your desired component. 

[1]:https://webpack.js.org/
[2]:https://webpack.js.org/api/cli/
[3]:https://github.com/webpack/webpack-dev-server
[4]:https://www.npmjs.com/package/@babel/core
[5]:https://github.com/babel/babel-loader
[6]:https://babeljs.io/docs/en/babel-preset-es2017
[7]:https://en.wikipedia.org/wiki/ECMAScript
[8]:https://babeljs.io/docs/en/babel-preset-react
[9]:https://reactjs.org/
[10]:https://reactjs.org/docs/react-dom.html
[11]:https://github.com/ReactTraining/react-router
[12]:https://redux.js.org/
[13]:https://github.com/reduxjs/react-redux
[14]:https://github.com/jantimon/html-webpack-plugin
[15]:https://github.com/webpack-contrib/file-loader
[16]:https://github.com/webpack-contrib/url-loader
[17]:https://github.com/webpack-contrib/style-loader
[18]:https://github.com/webpack-contrib/css-loader
[19]:https://sass-lang.com/
[20]:https://github.com/webpack-contrib/sass-loader
[21]:https://github.com/sass/node-sass
[22]:https://reactjs.org/docs/typechecking-with-proptypes.html
[23]:https://www.chaijs.com/
[24]:https://github.com/producthunt/chai-enzyme
[25]:https://github.com/airbnb/enzyme
[26]:https://eslint.org/
[27]:https://github.com/reduxjs/redux-devtools


