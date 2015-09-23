# APP UI: Fullscreen

A custom element to allow a webpage to switch to fullscreen mode


## Install

Using bower:
```
bower install app.ui.fullscreen
```


## Usage

1. Import Web Components' polyfill:

```html
<script src="components/webcomponentsjs/webcomponents.min.js"></script>
```

2. Import Custom Element:

```html
<link rel="import" href="component/app.ui.fullscreen">
```

3. Start using it!

```html
<a is="ui-fullscreen"></a>
```

Currently only the ```<a>``` tag is supported.

[View the example](http://rawgit.com/app-ui/fullscreen/master/examples/index.html).


## Options

This is a direct extension of the [Backbone UI component](http://github.com/backbone-ui/fullscreen) with the same name. Its options are defined as ```option-``` parameters in the tag, for example:
```
<a is="ui-fullscreen" option-targetEl=".myclass" option-style="mycustomstyle"></a>
```


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)

### License

Released under the [MIT License](http://makesites.org/licenses/MIT)
