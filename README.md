# EmberStockFrotEnd

A front end to search and display Stock Graphs in Ember Js.

## Features

* Search for stocks 
* View Graphs 

## Installation
Download  [Node js and NPM](https://nodejs.org/en/)

Dependencies
Node JS
NPM
Ember JS
Bower PackageManager
[Ember-inflector](https://github.com/stefanpenner/ember-inflector)<br>
[Ember Data](https://github.com/emberjs/data)<br>
[Ember Chart JS](https://github.com/aomran/ember-cli-chart)<br>
[Ember Foundation JS](https://www.npmjs.com/package/ember-cli-foundation-6-sass)<br>


Run the following commands to install dependencies in (parentPath)\ember-quickstart\

	npm install -g ember-cli
	npm install -g bower
	bower install 
	bower install ember --save
    npm install --save ember-inflector
    ember install ember-data
	ember install ember-cli-chart
	npm install --save-dev ember-cli-sass
	ember install ember-cli-foundation-6-sass 
	(If asked to overwrite app\styles\app\scss enter Y)
	
If the last step hangs on "Installing packages for tooling via npm" you can cancel the operation and use the following steps:

	npm install ember-cli --save
	npm install
	bower install



Back end<br>
The back end project is located [here](https://github.com/metalprogrammer/CPPStockBackend)<br>



## Quick Start Guide

After finishing installation of this and the front end you can launch the application.
First start the frontend (see the apporiate readme).

	cd (parentPath)\ember-quickstart\app
	ember serve
	
In your favorite browser go to [http://localhost:4200/stocks](http://localhost:4200/stocks). 
	
