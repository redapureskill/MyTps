odoo.define('pos_sale_inherit.models', function (require) {
    "use strict";

var models = require('point_of_sale.models');
console.log("rani hna");
var super_order_line_model = models.Orderline.prototype;
var SuperSaleOrderFetcher = require('pos_sale.SaleOrderFetcher')

models.Orderline = models.Orderline.extend({

  export_for_printing: function() {
    var json = super_order_line_model.export_for_printing.apply(this,arguments);

    if (this.get_product()){
      json.product = this.get_product();
    }
    return json;
  }
});
console.log(SuperSaleOrderFetcher);
Object.assign(SuperSaleOrderFetcher.constructor, {
constructor() {
            _super.apply(this, arguments);
            this.searchDomain = ['&',['state', '<>', 'draft'],['state', '<>', 'cancel']];
        }
  });

SuperSaleOrderFetcher = (function(_super) {
    return function() {

        let SaleOrderFetcher = _super.apply(this, arguments);
        // adding a field to the model.attachement_card
        Object.assign(AttachmentCard.fields, {
            hasEditConfirmDialog: attr({
                default: false,
            })
        });
        return AttachmentCard;
    };


});
