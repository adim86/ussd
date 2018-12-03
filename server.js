var express = require('express'),
    ussd_codes = require( './ussd.json' ),
    port = process.env.PORT || 5000,
    http_server;

express.get( '/', function( req, res ){
  res.send( 'hello world' );
});

http_server = express.listen( port, function(){
  console.log( 'action=port-listen port=' + port );
});