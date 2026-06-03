const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
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

hamButton.addEventListener("click", () => {
	hamButton.classList.toggle("open");
	navigation.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
	  age: 2005,
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
	  age: 1888,
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
	  age: 2015,
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
	  age: 2020,
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
	  age: 1974,
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
	  age: 1986,
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
	  age: 1983,
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
	  age: 2000,
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
	  age: 2019,
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Friedrichsdorf, Germany",
    dedicated: "1987, August, 28",
	  age: 1987,
    area: 32895,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
  }
];

setTempleCard(temples);

const Home = document.querySelector("#home")
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

Home.addEventListener("click", () => {
	setTempleCard(temples)
})

oldTemples.addEventListener("click", () =>{
	setTempleCard(temples.filter((temples) => temples.age < 1900));
});

newTemples.addEventListener("click", () =>{
	setTempleCard(temples.filter((temples) => temples.age > 2000));
});

largeTemples.addEventListener("click", () =>{
	setTempleCard(temples.filter((temples) => temples.area > 90000));
});

smallTemples.addEventListener("click", () =>{
	setTempleCard(temples.filter((temples) => temples.area < 10000));
});

function setTempleCard(temples){
	const temple_container = document.querySelector("#temples-container");
	temple_container.innerHTML = ""
	let card = "";
	for (const temple of temples){
		card += `<section>
			<h2>${temple.templeName}</h2>
			<p>Location: ${temple.location}</p>
			<p>Dedication: ${temple.dedicated}</p>
			<p>Size: ${temple.area} sq ft</p>
			<img src="${temple.imageUrl}" alt="${temple.templeName}" width="200px" height="150px" loading="lazy">
		</section>`;
	}

	temple_container.innerHTML = card;
}