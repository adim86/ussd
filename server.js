var express = require('express'),
    ussd_codes = require( './ussd.json' ),
    port = process.env.PORT || 5000,
    app = express(),
    http_server;

app.get( '/', function( req, res ){
  res.json( ussd_codes );
});

http_server = app.listen( port, function(){
  console.log( 'action=port-listen port=' + port );
});