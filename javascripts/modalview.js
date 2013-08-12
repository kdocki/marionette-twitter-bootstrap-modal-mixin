/**
 * @author  Kelt <kelt@dockins.org>
 *
 * This mixin can be applyed to your views to handle opening and closing
 * of a modal in Marionette. Usage can be seen here: 
 * 
 *    https://github.com/kdocki/marionette-twitter-bootstrap-modal-mixin
 *    
 */
App.module('Common.Mixin', function(Mixin, App, Backbone, Marionette, $, _) {
   Mixin.ModalView = function() {
      
      var _this = this;
      var onRender = (this.onRender) ? this.onRender : function() {};

      this.onRender = function() {
         _this.showModal();
         onRender.apply(this);
      };

      this.showModal = function() {
         var view = this;
         this.$el.addClass('modal');
         this.$el.on('hidden', function() {
            view.close();
         });
         this.$el.modal('show');
      };

      this.hideModal = function() {
         this.$el.modal('hide');
      };
   }
});
