function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {

		// Request finished and response
		// is ready and Status is "OK"
		if (this.readyState == 4 && this.status == 200) {
			MBDetails(this);
		}
	};

	// employee.xml is the external xml file
	xmlhttp.open("GET", "MB.xml", true);
	xmlhttp.send();
}

function MBDetails(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table =
		`<tr><th>عـنوان</th><th>نـام</th>
					<th>پخـش</th><th>رتـبه</th>
					<th>Building</th><th>Room</th>
				</tr>`;
	var x = xmlDoc.getElementsByTagName("movie");
	
	// Start to fetch the data by using TagName
	for (i = 0; i < x.length; i++) {
		table += "<tr><td>" +
			x[i].getElementsByTagName("firstname")[0]
				.childNodes[0].nodeValue + "</td><td>" + 
			x[i].getElementsByTagName("lastname")[0]
				.childNodes[0].nodeValue + "</td><td>" +
			x[i].getElementsByTagName("title")[0]
				.childNodes[0].nodeValue + "</td><td>" +
			x[i].getElementsByTagName("division")[0]
				.childNodes[0].nodeValue + "</td><td>" +
			x[i].getElementsByTagName("building")[0]
				.childNodes[0].nodeValue + "</td><td>" +
			x[i].getElementsByTagName("room")[0]
				.childNodes[0].nodeValue + "</td></tr>";
	}

	// Print the xml data in table form
	document.getElementById("id").innerHTML = table;

	var myLink = x[0].getElementsByTagName("room")[0].childNodes[0].nodeValue;
	var link = document.createElement("a");
	link.setAttribute("href", myLink);

	link.className = "someCSSclass";
	// For IE only, you can simply set the innerText of the node.
	// The below code, however, should work on all browsers.
	var linkText = document.createTextNode("تلفن تماس");
	link.appendChild(linkText);
	var myTable = document.getElementById('id');
	myTable.rows[1].cells[1].innerHTML = ""
	myTable.rows[1].cells[1].appendChild(link);
	myTable.rows[1].cells[0].innerHTML = myLink;
}
