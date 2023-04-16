const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fec255abbcmshdf788a430ed342bp1321d7jsnecfafcdc4b60',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));