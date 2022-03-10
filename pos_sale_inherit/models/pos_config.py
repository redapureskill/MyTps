from odoo import models, fields


class PosConfig(models.Model):
    _inherit = 'pos.config'

    display_quot = fields.Boolean("Display Quotations",help="Check to display all sale orders including quotations.",default=True)
    

 
