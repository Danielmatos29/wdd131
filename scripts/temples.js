const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const last_modified = document.querySelector("#lastModified")

const today = new Date()

last_modified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

hamButton.addEventListener("click", () => {
	hamButton.classList.toggle("open");
	navigation.classList.toggle("open");
});
