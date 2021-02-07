let generalUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&&format=json&search=";
let uniqueUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1000&explaintext&format=json&titles=";

function setup() {
	noCanvas();
	button = document.getElementById('submit');
	button.addEventListener('click', async event =>{
		const input = document.getElementById('medicalcondition').value;
		let url = generalUrl + input;

		loadJSON(url, function(data){
			const list = document.getElementById('list');
			list.innerHTML = '';
			var entry = document.createElement('li');
			var search = data[Object.keys(data)[0]];
			onClick(search);
			}, 'jsonp');
	});

	function onClick(data){
		var newUrl = uniqueUrl + data;
		loadJSON(newUrl, function(newData){
			var pages = newData.query.pages;
			var info = pages[Object.keys(pages)];
			var title = info.title;
			var desc = info.extract;
			const list = document.getElementById('list');
			list.innerHTML = '';
			var li = document.createElement('li');
			var h2 = document.createElement('h2');
			h2.innerHTML = title;
			var p = document.createElement('p');
			p.innerHTML = desc;
			li.appendChild(h2);
			li.appendChild(p);
			list.appendChild(li);
			
		}, 'jsonp');
	}
}