/*********
 * DATA *
*********/
var data = function () {
			
	console.log('success');

	var truc = $.ajax({

  		//HERE I DON T KNOW HOW I CAN PUT V_URL
  		url : v_url,
  		
		type: "GET",
       	dataType: "json",

        success: function(dataFromServer) {
        	var v_mydata = "";
        	var v_mydataTime = "";

				/**************************
				* AFFICHE LES ACTIVITEES *
				*************************/
			
				for (var j = 0; j < dataFromServer['timleine'].length; j++) {

					if ( (dataFromServer['timleine'][j]['name']) != undefined ) {
						
						v_mydata += "Nom : "
						v_mydata += dataFromServer['timleine'][j]['name']+ "<br />";
						
						v_mydata += "Durée max : "
						v_mydata += dataFromServer['timleine'][j]['duration_max']+ "<br />";

						v_mydata += "Durée mini : "
						v_mydata += dataFromServer['timleine'][j]['duration_min']+ "<br />";
						
						v_mydata += "Place : "
						v_mydata += dataFromServer['timleine'][j]['where'][0]['place']+ "<br />";
						v_mydata += "Adresse : "
						v_mydata += dataFromServer['timleine'][j]['where'][0]['address']+ "<br />";
						v_mydata += "Code Postale : "
						v_mydata += dataFromServer['timleine'][j]['where'][0]['zipcode']+ " ";
						v_mydata += dataFromServer['timleine'][j]['where'][0]['city']+ "<br />";
						
						v_mydata += "Latitude : "
						v_mydata += dataFromServer['timleine'][j]['where'][0]['latitude']+ "<br />";
						v_mydata += "Longitude : "
						v_mydata += dataFromServer['timleine'][j]['where'][0]['longitude']+ "<br />";
						
						v_mydata += "<br/>------------------------------------------------------<br/><br/>";
						
					}

				}
				
			$("#col_left").html(v_mydataTime);
			
			// Affiche toutes les données
			$("#col_right").html(v_mydata);
			
        }
    });
    
};

/*************
 * CALENDAR *
*************/

$(function() {
	var from_selected = false;
	var to_selected = false;
	
	function run_when_ready() {
		if (from_selected && to_selected) {

			var v_url = "";
				v_url += "http://activity-rec.herokuapp.com/api/marty/v0/get_timeline?start_date=";
				v_url += from_selected;
				v_url += "&end_date=";
				v_url += to_selected;
		}
		console.log(v_url);
	}
	
	function select_date(type,dateValue) {
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
