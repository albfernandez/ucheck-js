module( "test.qunit.nif" );
test( 'Testing NIF functions ', function() {
  ok( _validateNif( '12345678Z'));
  ok( !_validateNif( '12345678A'));
} );

