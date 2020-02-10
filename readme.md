# APP UI: Fullscreen

A custom element to allow a webpage to switch to fullscreen mode


## Examples

* [Click to view](./examples/index.html)


## Dependencies

This component relies on the following third-party libraries:

* [APP](http://makesites.org/projects/app)
* [jQuery](http://jquery.com)
* [Underscore](http://underscorejs.org)


## Install

Download the component and extract in 'components/app-ui-fullscreen'
```
cd [project folder]
wget https://github.com/app-ui/fullscreen/archive/master.zip
unzip master.zip -d ./components/
```

Using bower: (Old method)
```
bower install app.ui.fullscreen
```


## Usage

The component is built on top of [APP](http://makesites.org/projects/app) which should be loaded before the component in the <head> section of your website. This library uses the non-standard method of "html imports" for loading custom elements. 


1. Include APP library

```html
<script src="components/app/build/app.min.js"></script>
```

2. Import the custom element

```html
<link rel="import" href="component/app-ui-fullscreen">
```

3. Start using the element applying it to an appropriate tag

```html
<a is="app-ui-fullscreen"></a>
```
Currently the component extends the ```<a>``` tag.


## Options

This is a direct extension of the [Backbone UI component](http://github.com/backbone-ui/fullscreen) with the same name. Its options are defined as ```option-``` parameters in the tag, for example:
```
<a is="ui-fullscreen" option-targetEl=".myclass" option-style="mycustomstyle"></a>
```

These are the set of options you can use as attributes in your custom element:

...


## Credits

Originally based on [Backbone.UI.Fullscreen](https://github.com/backbone-ui/fullscreen)

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)


### License

Released under the [MIT License](http://makesites.org/licenses/MIT)


