# -*- coding: utf-8 -*-


{
    'name': 'pos sale inherit',
    'category': 'Sales/Sales',
    "author": "Alkhuzam & Co., Yahla Rida",
    "website": "https://morisonkw.com/",
    'summary': 'inherit pos sale module',
    'version': '1.0',
    'description': "This module allows is for adding custom features for pos sale",
    'depends': ['pos_sale'],
    "data": ["views/pos_config_view.xml"],
    'assets': {
        'point_of_sale.assets': [
            'pos_sale_inherit/static/src/js/models.js',
        ],
        'web.assets_qweb': [
            'pos_sale_inherit/static/src/xml/**/*',
        ],
    },  

    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
