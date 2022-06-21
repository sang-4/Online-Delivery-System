const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ea578d54bmshb7546e52320d64ep1a3043jsn717ee90870fe',
		'X-RapidAPI-Host': 'walmart.p.rapidapi.com'
	}
};

fetch('https://walmart.p.rapidapi.com/products/v2/list?cat_id=15&sort=best_seller&page=1&min_price=1.5&query=diamond%20rings&max_price=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));