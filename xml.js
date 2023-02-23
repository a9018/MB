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
				.childNodes[0].nodeValue + "</td><td>";
/*			+
			x[i].getElementsByTagName("building")[0]
				.childNodes[0].nodeValue + "</td><td>" +
			x[i].getElementsByTagName("room")[0]
				.childNodes[0].nodeValue + "</td></tr>";*/
	}

	// Print the xml data in table form
	document.getElementById("id").innerHTML = table;

	var myTable = document.getElementById('id');
	for (i = 0; i < x.length; i++) {
		var link = document.createElement("a");
		var linkText = document.createTextNode(myTable.rows[1 + i].cells[1].innerText);
		link.appendChild(linkText);
		link.className = "LinkCSSclass";
		link.setAttribute("href", x[i].getElementsByTagName("room")[0].childNodes[0].nodeValue);
		myTable.rows[1+i].cells[1].innerHTML = ""
		myTable.rows[1+i].cells[1].appendChild(link);
	}
	


}
