const last_modified = document.querySelector("#lastModified")
const yearSpan = document.querySelector("#currentyear");

const today = new Date()
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

last_modified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
