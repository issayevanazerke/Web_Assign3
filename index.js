$(document).ready(function(){
	var cost = 100;
	$('#calculate').on('click', function(){
		let education = $('#education').find(":selected").val();
		let education_split = education.split("coefficient ");
		cost = cost * parseFloat(education_split[1]);


		let networth = $('#net_worth').find(":selected").val();
		let networth_split = networth.split("coefficient ");
		cost = cost * parseFloat(networth_split[1]);

		let caste = $('#caste').find(":selected").val();
		if(caste.includes("+") == true){
			let caste_split = caste.split("+");
			cost = cost + parseInt(caste_split[1]);
		} else {
			let caste_split = caste.split("-");
			cost = cost - parseInt(caste_split[1]);
		}

		let skills_array = [];
		let count = 0;

		for(let i = 0; i < 4; i++){
			if($('#skills'+(i+1)).is(":checked") == true){
				skills_array[count] = parseInt($('#skills'+(i+1)).val().split("+")[1]);
				count++;
			}
		}

		for(let i = 0; i < skills_array.length; i++){
			cost = cost + skills_array[i];
		}

		if($("input[name='age']:checked").val() != undefined){
			let age = $("input[name='age']:checked").val();
			let age_split = age.split("coefficient ");
			cost = cost * parseFloat(age_split[1]);
		}

		for(let i = 0; i < 3; i++){
			if($('#reputation'+(i+1)).is(":checked") == true){
				if($('#reputation'+(i+1)).val().includes("coefficient ") == true){
					cost = cost * parseFloat($('#reputation'+(i+1)).val().split("coefficient ")[1]);
				} else {
					cost = cost - parseInt($('#reputation'+(i+1)).val().split("+")[1]);
				}
			}
		}

		$('.result').html('Result: ' + cost + "$");

		cost = 100;
	});
});