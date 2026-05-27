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

const temperature = 40;
const windSpeed = 10;

// Write the calculation function
function calculateWindChill(t, v) {
  // Returns the calculated wind chill rounded to 2 decimal places in one line
  return (35.74 + (0.6215 * t) - (35.75 * Math.pow(v, 0.16)) + (0.4275 * t * Math.pow(v, 0.16))).toFixed(2);
}

const windChillElement = document.getElementById('windchill');

// Check conditions and output the result
// Condition for Imperial: Temp <= 50 °F AND Wind speed > 3 mph
if (temperature <= 50 && windSpeed > 3) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed) + " °F";
} else {
  windChillElement.textContent = "N/A";
}