

App = new Marionette.Application();

App.module('Example.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.Controller = {
		show : function() {
			var modal = new Show.View();

			// modals don't belong to any region
			// modal renders in document.body
			modal.render();
		},
	}

	// Because we do a mixin we can use Marionette's CompositeView, 
	// CollectionView or ItemView inside of our modal.
	Show.View = Marionette.ItemView.extend({
		template: '#app_example_show',
		events: {
			'click .js-save'		: 'onSave',
		},
      initialize : function() {
         App.Common.Mixin.ModalView.apply(this);
      },
      onSave : function() {
      	console.log('process the model save and then close the modal');
      	this.hideModal();
      }
   });

});

App.start();

// When we click on this button we show the modal
$(document).ready(function() {
	$('.js-show').on('click', function() {
		App.Example.Show.Controller.show();
	});
});
