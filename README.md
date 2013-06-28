Marionette Twitter Bootstrap Modal mixin
========================================

This is a mixin for using twitter bootstrap modals in Backbone Marionette

See a [demo here](http://kdocki.github.io/marionette-twitter-bootstrap-modal-mixin/).

You can use this inside of your views to handle modals in twitter bootstrap

See index.html and index.js to get started. Basically you just include modalview.js 

And then do this in your Marionette views. 

```javascript
  initialize : function() {
    App.Common.Mixin.ModalView.apply(this);
  }
```
