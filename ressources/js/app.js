/*************
 * CALENDAR *
***************/

$(function() {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
      	console.log(BEGIN);
      	console.log(selectedDate);
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
      	console.log(END);
      	console.log(selectedDate);
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
});

/**********************
 * READ CALENDAR DATE *
**********************/

$(document).ready(function() {
	/*
		$(".zone_critere").click(function(e) {
	  		
			//console.log(id_final[1]);
				$("#bloc_critere_1").css('height','262');

		}
	*/
		console.log ('ready');
		var url = "";
			url += "http://activity-rec.herokuapp.com/api/marty/v0/get_timeline?start_date=";
			url += $("#from");
			url += "&end_date=";
			url += $("#to");
			console.log (url);

			$("#url").html(url);
});
	
	$("#link_1").click(function() {
		var v_url = "";
		v_url += "http://activity-rec.herokuapp.com/api/marty/v0/get_timeline?start_date=";
		v_url += $("#from");
		v_url += "&end_date=";
		v_url += $("#to");
		console.log (v_url);
		
		$("#ajax_url").html(url);
	});