/*************
 * CALENDAR *
***************/


$(function() {
	var from_selected = false;
	var to_selected = false;
	
	function run_when_ready(){
		if (from_selected && to_selected)
			alert("Running WhenReady from "+ from_selected +" to " + to_selected);
	}
	
	function select_date(type,dateValue){
		if (dateValue == "")
			return false;
		
		switch(type){
			case "to":
				$( "#from" ).datepicker( "option", "maxDate", dateValue );
			break;
			case "from":
				$( "#to" ).datepicker( "option", "minDate", dateValue );
			break;
		}
		
		return dateValue;
	}
	
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
      	from_selected = select_date("from",selectedDate)
		run_when_ready()
       
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
      	to_selected = select_date("to",selectedDate)
		run_when_ready()

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