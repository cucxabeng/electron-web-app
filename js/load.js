

$( function () {
	var jqxhr = $.getJSON( "config.json",
		function ( data ) {

			var page_title 	= data.page_title;
			var web_url = data.web_url;

			console.log( "DEBUG - web_url: "+web_url );

			// replace content of body
			$("body").html( '<webview id="gpm-player" src="'+web_url+'" style="height:98%;width:98%;position:absolute;"></webview> ' );

			$("title").html( page_title );

		}
	)
		.fail( function ( jqxhr, textStatus, error ) {
		var error_message = textStatus + ", " + error;
		$( "body" ).append( "<b>Failed to load config.json: "+error_message+"</b>" );
	} );

} );


/*

vim: ts=2

*/
