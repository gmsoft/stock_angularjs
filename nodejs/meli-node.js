var meli = require('mercadolibre');

//var meliObject = new meli.Meli(client_id, client_secret, [access_token], [refresh_token]);

var client_id = '5214857140046304';
var client_secret = 'EZsN5KbLIM2VFXznavxafy2YlTlCDuw5';

var meliObject = new meli.Meli(client_id, client_secret);

var url = meliObject.getAuthURL('http://localhost');
console.log(url);

//Get categories from mercado libre argentina
meliObject.get('sites/MLA/categories', function (err, res) {
    //console.log(err, res);
    /** returns:
        err = null
        res = [ 
                { id: 'MLA5725', name: 'Accesorios para Vehículos' },
                { id: 'MLA1071', name: 'Animales y Mascotas' },
                { id: 'MLA1367', name: 'Antigüedades' },
                { id: 'MLA1368', name: 'Arte y Artesanías' },
                { id: 'MLA1743', name: 'Autos, Motos y Otros' },
                { id: 'MLA1384', name: 'Bebés' },
                ...
            ]
    */
});

//Get users with ids 145925943 and 145925951
meliObject.get('users', {
    ids: [58452393]
}, function (err, res) {
    //console.log(err, res);
   /** returns:
        err = null
        res = [ 
                { 
                    id: 145925943,
                    nickname: 'TETE2780570',
                    registration_date: '2013-09-17T14:20:30.000-04:00',
                    country_id: 'AR',
                    address: { state: 'AR-C', city: 'Palermo' },
                    user_type: 'normal',
                    tags: [ 'normal', 'test_user', 'user_info_verified' ],
                    logo: null,
                    points: 100,
                    site_id: 'MLA',
                    permalink: 'http://perfil.mercadolibre.com.ar/TETE2780570',
                    seller_reputation:
                     { level_id: null,
                       power_seller_status: null,
                       transactions: [Object] },
                    buyer_reputation: { tags: [] },
                    status: { site_status: 'deactive' } 
                },
                {
                    id: 145925951,
                    nickname: 'TETE1341752',
                    registration_date: '2013-09-17T14:20:43.000-04:00',
                    country_id: 'AR',
                    address: { state: 'AR-C', city: 'Palermo' },
                    user_type: 'normal',
                    tags: [ 'normal', 'test_user', 'user_info_verified' ],
                    logo: null,
                    points: 100,
                    site_id: 'MLA',
                    permalink: 'http://perfil.mercadolibre.com.ar/TETE1341752',
                    seller_reputation:
                     { level_id: null,
                       power_seller_status: null,
                       transactions: [Object] },
                    buyer_reputation: { tags: [] },
                    status: { site_status: 'deactive' } 
                }
            ]
    */
});


