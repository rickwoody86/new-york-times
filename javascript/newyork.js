var searchTerm;
var numRequest;
var startDate;
var endDate;

$(document).ready(function() {





	$("#form-submit").on("click", function(event) {
		event.preventDefault();
		searchTerm =  $("#search-input").val().trim();
		numRequest =  $("#records-input").val().trim();
		startDate =  $("#startYear-input").val().trim();
		endDate =  $("#endYear-input").val().trim();
		

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		

		url += '?' + $.param({
			'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
			'q': searchTerm
		});
		console.log(url);
		$.ajax({
			url: url,
			method: 'GET',
		}).done(function(result) {



			console.log(result);
		}).fail(function(err) {
			throw err;
		});




	});
});
