async function getData() {
	try {
		const res = await fetch(
			"http://api.weatherapi.com/v1/current.json?key=e292cc3dc0f44faba84182406240809&q=94539"
		);
		const data = await res.json();
        
        const body = document.querySelector("body");
        const h1 = document.createElement("h1")
        const tag = document.createElement("h1");

        h1.textContent = "UV: " + data.current.uv;
        tag.textContent = "Temperature: " + data.current.heatindex_f;

        body.appendChild(h1);
        body.appendChild(tag);

	} catch (msg) {
		console.log(msg);
	}

}

console.log("Hello");
getData();