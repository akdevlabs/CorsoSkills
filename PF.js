// Array of dropdown elements and corresponding content ids
const dropdowns = [
  { btnId: "1-btn", contentId: "Dd-1", containerId: "one" },
  { btnId: "2-btn", contentId: "Dd-2", containerId: "two" },
  { btnId: "3-btn", contentId: "Dd-3", containerId: "three" },
  { btnId: "4-btn", contentId: "Dd-4", containerId: "four" },
  { btnId: "5-btn", contentId: "Dd-5", containerId: "five" },
  { btnId: "6-btn", contentId: "Dd-6", containerId: "six" },
  { btnId: "7-btn", contentId: "Dd-7", containerId: "seven" },
  { btnId: "8-btn", contentId: "Dd-8", containerId: "eight" },
  { btnId: "9-btn", contentId: "Dd-9", containerId: "nine" },
  { btnId: "10-btn", contentId: "Dd-10", containerId: "ten" },
  { btnId: "11-btn", contentId: "Dd-11", containerId: "eleven" },
  { btnId: "12-btn", contentId: "Dd-12", containerId: "twelve" },
  { btnId: "13-btn", contentId: "Dd-13", containerId: "thirteen" },
  { btnId: "14-btn", contentId: "Dd-14", containerId: "fourteen" },
  { btnId: "15-btn", contentId: "Dd-15", containerId: "fifteen" },
  { btnId: "16-btn", contentId: "Dd-16", containerId: "sixteen" },
  { btnId: "17-btn", contentId: "Dd-17", containerId: "seventeen" },
  { btnId: "18-btn", contentId: "Dd-18", containerId: "eighttenn" },
  { btnId: "19-btn", contentId: "Dd-19", containerId: "nineteen" },
  { btnId: "20-btn", contentId: "Dd-20", containerId: "twentey" }
];

// Function to add event listeners to each dropdown button
dropdowns.forEach(dropdown => {
  const button = document.getElementById(dropdown.btnId);
  const content = document.getElementById(dropdown.contentId);
  const container = document.getElementById(dropdown.containerId);
  
  // Set initial content display to none
  content.style.display = "none";

  button.addEventListener("click", () => {
    // Toggle content visibility
    if (content.style.display === "none") {
      content.style.display = "flex";
      container.style.background = "#2A2C45"; // Dark background for open state
      button.style.color = "#ffffff"; // White text color for open state
    } else {
      content.style.display = "none";
      container.style.background = ""; // Reset background color
      button.style.color = ""; // Reset text color
    }
  });
});

//------- Mobile-Popup-Block ------//
function ShowProduct() {
  var x = document.getElementById("Mobile-Product-Hiden-Content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const Product = document.getElementById('Mobile-Product-Btn');
Product.addEventListener("click", () => {
  console.log("it works")
  ShowProduct()
});
function ShowLearn() {
  var x = document.getElementById("Learn-Hiden-Content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
   }
}
const Learn = document.getElementById('mobile-Learn-Btn');
  Learn.addEventListener("click", () => {
    ShowLearn()
});
function ShowResources() {
    var x = document.getElementById("Resources-Hiden-Content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
const Resources = document.getElementById('mobile-Resources-Btn');
  Resources.addEventListener("click", () => {
    ShowResources()
});





const mag = document.getElementById('mag');
mag.addEventListener("click", () => {
  searchKeywords()
});






function searchKeywords() {
  // Get the keyword input
  var keyword = document.getElementById("search").value;
 console.log(keyword)
  // Get the section content
  var sectionContent = document.getElementById("searchSection").textContent;


   // Check if keyword exists in section content
   if (sectionContent.indexOf(comboostible) !== -1) {
    console.log("Keyword found!")

  } else {
    console.log("Keyword not found.")
  }

}





 // Get the section content






 var sectionContent = document.getElementById("searchSection").textContent;
const searchTerm = 'Que es Comboostible';
const indexOfFirst = sectionContent.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${sectionContent.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Exp

