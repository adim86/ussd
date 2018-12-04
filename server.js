var express = require('express'),
    ussd_codes = require( './ussd.json' ),
    networks = require( './network.json' ),
    port = process.env.PORT || 5000,
    app = express(),
    http_server;

app.set( 'view engine', 'ejs' );
app.enable( 'view cache' );

app.use( express.static( 'public' ) );

app.get( '/', function( req, res ){
  res.render( 'home', { ussd_codes: ussd_codes, networks: networks });
});

http_server = app.listen( port, function(){
  console.log( 'action=port-listen port=' + port );
});