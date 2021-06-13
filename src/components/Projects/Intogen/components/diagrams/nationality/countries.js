var publicPort = 'https://intogen-backend.herokuapp.com/';
var data = '.data/out.csv';

function getUniqueNationalities() {
		var countryBox = document.getElementById('countryBox');

		for(var i=0; i<data.length; i++)
		{
			var option = document.createElement("option");
  			option.text = data[i];
  			countryBox.add(option);
		}
}