# Ui Stater ![bower](https://img.shields.io/bower/v/ui-stater.svg?style=flat-square) [![npm downloads](https://img.shields.io/npm/dt/ng-stater.svg?style=flat-square)](https://www.npmjs.com/package/ng-stater)

**ui-router helper directive to generate class, attribute or id field based on state name a ui-view directive posseses...**

### In a nutshell
`ui-stater` helps you add class or attribute or id field on `ui-view` directive, based on **name of the state** that element represents.
#### Just add `ui-stater` attribute on `ui-view` directive element.

For example, if below element is a template for ui-router state 'photos'
```
<ui-view ui-stater class="myclass"></ui-view> 
```
then, above element will mutate (because it has `ui-stater` attribute) into...

```
<ui-view ui-stater stater="photo" class="myclass stater-photo" id="stater-photo"></ui-view>
```

This is **incredibly helpful** for **dom manipulation** and **css styling**.


***

## Install
### → Bower
```
bower install --save ui-stater
```
### → Manual
Download angularJS, ui-router and ui-stater and include `angular.js`, `angular-ui-router.js` and `ui-stater.js` files in your application.

***

## Setup application
### Include dependencies
```
var myApp = angular.module('myApp', ['ui.router', 'thatisuday.ui-stater']);
```

### Set options
You can configure options of **ui-stater** using `uiStaterOpsProvider` to produce only few or all fields to provide ease.

```
var myApp.config(['uiStaterOpsProvider', function(uiStaterOpsProvider){
	uiStaterOpsProvider.setOptions({
		class : true,
		attr : true, 
		id : true,
		classPrepend : 'custom-stater-',
		attrName : 'custom-stater',
		idPrepend : 'custom-stater-',
		replaceDot : true
	});
}]);
```
> These options will help you set custom value of `class`, `attribute` or `id` field (almost).

#### All options are mentioned below
| option | values | default | role |
| ------ | ------ | ------- | ---- |
| class | true/false | true | Adds a class on directive. |
| attr | true/false | false | Adds attribute on directive. |
| id | true/false | false | Adds id attribute on directive. |
| classPrepend | String | 'stater-' | Name of the class to start with. `class name` will be `classPrepend` + `state name`. e.g. **'stater-photos-cats'** for `photos.cats` state name. |
| attrName | String | 'stater' | Name of the attribute. `attribute`'s value will be `state name`. e.g. **stater='photos-cats'** for `photos.cats` state name. |
| idPrepend | String | 'stater-' | Value of the id attribute to start with. `id`'s value will be `idPrepend` + `state name`. e.g. **id='starter-photos-cats'** for `photos.cats` state name. |
| replaceDot | true/false | true | Replaces dot(.) with hyphen (-) in output value class, attribute or id |


> Note that if the state name have dot (**.**) in it, then output will replace all (**.**) with hyphen (**-**). This is needed to be done so that output value will be a **css selector**. To turn this off, set `replaceDot` option to `false`.

***

## Examples
So far, we have set our application, installed all dependencies and configured `ui-stater`.

| state-name | output |
| ---------- | ------ |
| dashboard | <ui-view ui-stater class="custom-stater-dashboard" custom-stater="dashboard" id="custom-stater-dashboard" |
| dashboard.photos | <ui-view ui-stater class="custom-stater-dashboard" custom-stater="dashboard-photos" id="custom-stater-dashboard-photos" |
| dashboard.photos.cat | <ui-view ui-stater class="custom-stater-dashboard-cats" custom-stater="dashboard-photos-cats" id="custom-stater-dashboard-photos-cats" |

***

## Now I think, you probably got the hang of it.




