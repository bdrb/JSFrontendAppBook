function assignDate() {
	var dateEl = document.getElementById("today");
	var today = new Date();
	dateEl.textContent = today.toLocaleDateString();
	dateEl.setAttribute("datetime", today.toISOString());
}