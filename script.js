//your JS code here. If required.
let p = document.getElementById('timer');

setInterval(()=>{
	const now = new Date();
	
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	let hours = now.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours%12 || 12;
	hours = String(hours).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	p.textContent = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`
},1000);