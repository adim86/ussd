var ussd_codes_dom = document.querySelectorAll( '#codes > .code' ),
    filter_subcategories_dom = document.querySelector( '#filter-subcategories' ),
    active_filter_category = 'network',
    filters = {
      networks: [],
      types: []
    };

filter_subcategories_dom.addEventListener( 'click', function( e ){
  var target_tag_name = e.target.tagName.toLowerCase();
  if( target_tag_name !== 'input' ) return;

  switch( active_filter_category ){

    case 'network':
      var checked_filters = filter_subcategories_dom.querySelectorAll( 'input:checked' );

      filters.networks = [];

      checked_filters.forEach( function( checkbox ){
        filters.networks.push( checkbox.value + '-code' );
      });

    break;
  }

  update_filters();
});

function update_filters(){
  var classes_to_filter_for = [].concat( filters.networks, filters.types );

  if( classes_to_filter_for.length > 0 ){
    ussd_codes_dom.forEach( function( code_dom ){
      var code_dom_classes = code_dom.classList,
          added_class = false;

      for( var i in classes_to_filter_for ){
        var class_to_filter_for = classes_to_filter_for[ i ];

        if( ! code_dom_classes.contains( class_to_filter_for ) ) continue;

        code_dom_classes.add( 'active' );
        added_class = true;
        break;
      }

      if( ! added_class ) code_dom_classes.remove( 'active' );
    });

    document.querySelector( '#codes' ).classList.add( 'filtered' );
  }

  else {
    ussd_codes_dom.forEach( function( code_dom ){
      code_dom_classes.remove( 'active' );
    });

    document.querySelector( '#codes' ).classList.remove( 'filtered' );
  }
}