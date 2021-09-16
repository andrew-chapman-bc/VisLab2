// TODO: load the dataset 
let attractions; 
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
    attractions = data;
	filterData("all");
	});

function filterData(category) {

	var useThis = attractions
	if(category != "all")
	{
		useThis = attractions.filter(function(item){
			return item.Category == category;         
		});
	}
	

	useThis.sort(function (a, b) {
		return a.value - b.value;
	  });

	data = useThis.slice(0,5)
	console.log("top 5 global attractions based on annual visitors:",
		data);

	
	renderBarChart(data); 
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}


let elementSelection = document.querySelector('#attraction-category');
elementSelection.addEventListener('change', function(event) {
	console.log("hello", event.target.value);
	let catChoice = event.target.value;
	filterData(catChoice);
})
// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category