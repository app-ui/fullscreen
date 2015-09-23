(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		// gather attributes
		var targetEl = this.getAttribute("option-targetEl");
		var style = this.getAttribute("option-style");
		// gather options
		var options = { };
		// set options from attributes
		if( targetEl ) options.targetEl = targetEl;
		if( style ) options.style = style;
		// ...
		options.el = this;
		// instantiate view
		this.view = new APP.UI.Fullscreen( options );

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		if( this.view ) this.view.remove();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {
		// prerequisite(s)
		if(!this.view) return;
		if( attr == "class") return;

		// filter options?
		this.view.options[attr] = newVal;
		this.view.update();
	};

	document.registerElement('ui-fullscreen', {
		prototype: el,
		extends: 'a'
	});
}());
