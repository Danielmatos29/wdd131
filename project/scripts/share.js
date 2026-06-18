const userId = {
	name : null,
	identity : false,
	image : "images/anonymous_profile.jpg",
	message : null,
	date : null,
}

const userComment = document.querySelector(".userComment")
const publishBtn = document.querySelector("#publish")
const comments = document.querySelector(".comments")
const userName = document.querySelector(".user")

// Load existing comments from localStorage, or start with an empty array
let allComments = JSON.parse(localStorage.getItem("pirateComments")) || [];

userComment.addEventListener("input", e => {
	if (!userComment.value) {
		publishBtn.setAttribute("disabled", "disabled")
		publishBtn.classList.remove("abled")
	}
	else{
		publishBtn.removeAttribute("disabled")
		publishBtn.classList.add("abled")
	}
})

function renderComment(comment) {
	let published =
	`<div class="parents">
		<img src="${comment.image}">
		<div>
			<h3>${comment.name}</h3>
			<p class="my_clean_element">${comment.message}</p><br><br>
			<span class="date">${comment.date}</span>
		</div>
	</div>`;
	comments.innerHTML += published;
}

function renderAllComments() {
	comments.innerHTML = "";
	allComments.forEach(renderComment);
	document.getElementById("comment").textContent = allComments.length;
}

function addPost() {
	console.log("The publish button works!");
	if (!userComment.value) return;
	userId.name = userName.value;
	userId.identity = userId.name !== "Anonymous";
	userId.message = userComment.value;
	userId.date = new Date().toLocaleDateString();

	// Save a snapshot of this comment (spread copies the object, not a reference)
	allComments.push({ ...userId });
	localStorage.setItem("pirateComments", JSON.stringify(allComments));

	renderComment(userId);
	userComment.value = ""
	publishBtn.setAttribute("disabled", "disabled")
	publishBtn.classList.remove("abled")

	document.getElementById("comment").textContent = allComments.length;
};

publishBtn.addEventListener("click", addPost)

// On page load, render whatever was saved before
renderAllComments();