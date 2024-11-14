 // Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection,  doc, getDoc, setDoc  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPkrxjVxWEcR1yULFnKy4I53qOf1m3QM0",
  authDomain: "corsoskill-2024-9cafd.firebaseapp.com",
  databaseURL: "https://corsoskill-2024-9cafd-default-rtdb.firebaseio.com",
  projectId: "corsoskill-2024-9cafd",
  storageBucket: "corsoskill-2024-9cafd.appspot.com",
  messagingSenderId: "591879342217",
  appId: "1:591879342217:web:c543d7dfde8eb371679e58",
  measurementId: "G-SYY3CC6Q40"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Now you can use `db` to interact with Firestore




async function getDataDev() {
  // Reference a document with ID "Desarrollo" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Desarrollo');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}

const desarrolloData = await getDataDev(); // Fetch and store the data in a constant


async function getDataLan() {
  // Reference a document with ID "Idiomas" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Idiomas');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data for external use
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}

const IdiomasData = await getDataLan();


async function getDataMar() {
  // Reference a document with ID "Marketing" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Marketing');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
};

const marketingData = await getDataMar(); // Fetch and store the data in a constant

async function getDataNeg() {
  // Reference a document with ID "Negocios" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Negocios');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}

const NegociosData = await getDataNeg(); // Fetch and store the data in a constant


async function getDataDes() {
  // Reference a document with ID "Negocios" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Diseño');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}
const DiseñoData = await getDataDes(); // Fetch and store the data in a constant


async function getDataLead() {
  // Reference a document with ID "Ventas" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Liderazgo');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}
const leaderData = await getDataLead(); // Fetch and store the data in a constant

async function getDataVent() {
  // Reference a document with ID "Ventas" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Ventas');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
   
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}

const SalesData = await getDataVent(); // Fetch and store the data in a constant

async function getDataSci() {
  // Reference a document with ID "Ventas" in the "courseList" collection
  const docRef = doc(db, 'courseList', 'Ciencias');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data(); // Store document data in a constant
    return documentData; // Return the data so it can be used outside the function
  } else {
    console.log("No such document!");
    return null; // Return null if no document found
  }
}

const ScienceData = await getDataSci(); // Fetch and store the data in a constant





const courseIdO = localStorage.getItem('selectedCourseId'); // e.g., "course0"


function convertToCamelCase(str) {
  return str.replace(/-([a-z0-9])/gi, (_, char) => char.toUpperCase());
}

// Example usage
const camelCaseCourseId = convertToCamelCase(courseIdO);
 // Retrieve course details from localStorage
const courseId = camelCaseCourseId;
; // e.g., "course0"
const courseCategory = localStorage.getItem('courseCategory'); // e.g., "Desarrollo"



// Function to get selected course data and render the name in #CourseBanner
async function renderCourseName() {
  if (!courseId || !courseCategory) {
    console.log("Course ID or Category not found in localStorage!");
    return;
  }

  // Fetch the data from Firestore for the specified category
  const docRef = doc(db, 'courseList', courseCategory);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data();
    
    // Access the specific course data within the retrieved document
    const selectedCourse = documentData[courseId];

    if (selectedCourse) {
      // Render the course name in the #CourseBannerName element
      const courseBannerElement = document.getElementById('CourseBannerName');
      if (courseBannerElement) {
        courseBannerElement.innerText = selectedCourse.name; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }

      // Render the course image in the #CourseBannerIcon element using Iconl property
      const courseBannerIconElement = document.getElementById('CourseBannerIcon');
      if (courseBannerIconElement) { 
        courseBannerIconElement.src = selectedCourse.Icon || ''; // Set the course image source from Iconl property
        
      } else {
        console.log("Element with ID #CourseBannerIcon not found in the DOM!");
      }

      const backgroundElement = document.getElementById('CourseBannerBackground');
      if (backgroundElement && selectedCourse.backgroundImg) {
        // Set the background image using the `backgroundImg` property
        backgroundElement.style.backgroundImage = `url(${selectedCourse.backgroundImg})`;
        backgroundElement.style.backgroundSize = 'cover'; // Cover the entire area
        backgroundElement.style.backgroundPosition = 'center'; // Center the image
      } else if (!selectedCourse.backgroundImg) {
        console.log("No backgroundImg property found in the selected course data!");
      }

      const courseTnameElement = document.getElementById('teacherName');
      if (courseBannerElement) {
        courseTnameElement.innerText = selectedCourse.teacherName; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }


      const teacherSexElement = document.getElementById('teacherSex');      
      if (teacherSexElement) {
        // Check the gender and render the appropriate title
        if (selectedCourse.gender === "female") {
          teacherSexElement.innerText = "Instructora:";
        } else if (selectedCourse.gender === "male") {
          teacherSexElement.innerText = "Instructor:";
        } else {
          teacherSexElement.innerText = "Instructor:"; // Default text if gender is missing or unspecified
        }
      } else {
        console.log("Element with ID #teacherSex not found in the DOM!");
      }


       // Render the course image in the #CourseBannerIcon element using Iconl property
       const courseBannerTPElement = document.getElementById('CourseBannerTp');
       if (courseBannerIconElement) { 
        courseBannerTPElement.src = selectedCourse.teacherImage || ''; // Set the course image source from Iconl property
         
       } else {
         console.log("Element with ID #CourseBannerIcon not found in the DOM!");
       }


       const courseCblockElement = document.getElementById('CourseBannerCblock');
      if (courseBannerElement) {
        courseCblockElement.innerText = selectedCourse.CC; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }

      const courseCostElement = document.getElementById('cost');
      if (courseBannerElement) {
        courseCostElement.innerText = `${"$" + selectedCourse.cost}`; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }

      const courseCoinElement = document.getElementById('coin');
      if (courseBannerElement) {
        courseCoinElement.innerText =  selectedCourse.coin; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }

    } else {
      console.log(`Course with ID ${courseId} not found in the category ${courseCategory}!`);
    }
  } else {
    console.log(`No such document for category ${courseCategory}!`);
  }
}


// Example usage
renderCourseName();


async function renderCourseInfo() {
  if (!courseId || !courseCategory) {
    console.log("Course ID or Category not found in localStorage!");
    return;
  }

  // Fetch the data from Firestore for the specified category
  const docRef = doc(db, 'courseList', courseCategory);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const documentData = docSnap.data();
    
    // Access the specific course data within the retrieved document
    const selectedCourse = documentData[courseId];

    if (selectedCourse) {
     
      const coursemoduleContElement = document.getElementById('moduleInfo');
      if (coursemoduleContElement) {
        coursemoduleContElement.innerText = selectedCourse.moduleCont; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const coursemoduleElement = document.getElementById('modules');
      if (coursemoduleElement) { 
        const moduler = selectedCourse.modules
        if(moduler === 1){
          coursemoduleElement.innerText = `${moduler +" "+  "Módulo"}`
        }else if  (moduler > 1) {
          coursemoduleElement.innerText = `${moduler +" "+ "Módulos"}`
        }
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const teacherSexElement = document.getElementById('teacherSex');      
      if (teacherSexElement) {
        // Check the gender and render the appropriate title
        if (selectedCourse.gender === "female") {
          teacherSexElement.innerText = "Instructora:";
        } else if (selectedCourse.gender === "male") {
          teacherSexElement.innerText = "Instructor:";
        } else {
          teacherSexElement.innerText = "Instructor:"; // Default text if gender is missing or unspecified
        }
      } else {
        console.log("Element with ID #teacherSex not found in the DOM!");
      }
      const courseReviewAveElement = document.getElementById('reviewAv');
      if (courseReviewAveElement) {
        courseReviewAveElement.innerText = selectedCourse.reviews; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const courseReviewCountElement = document.getElementById('reviewCount');
      if (courseReviewCountElement) {
        courseReviewCountElement.innerText = `${"("+selectedCourse.reviewCount +" "+ "Reseñas"+")"}`; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const courselevelElement = document.getElementById('level');
      if (courselevelElement) {
        courselevelElement.innerText = selectedCourse.level; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const coursellevelContElement = document.getElementById('levelCont');
      if (coursellevelContElement) {
        coursellevelContElement.innerText = selectedCourse.levelC; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const courseScheduleElement = document.getElementById('schedule');
      if (courseScheduleElement) {
        courseScheduleElement.innerText = selectedCourse.level; // Set the course name
      } else {
        console.log("Element with ID #CourseBannerName not found in the DOM!");
      }
      const ulElement = document.getElementById('scheduleCont');
      console.log(ulElement)

      if (ulElement) {
        // Define the items you want to add to the list
        const listItems = selectedCourse.schedule;
        var ul = document.createElement("ul");
        // Loop through each item in the array
        listItems.forEach(item => {
          // Create a new <li> element
          const liElement = document.createElement('li');
          
          // Set the text content of the <li> element
          liElement.textContent = item;
          
          // Append the <li> element to the <ul>
          ulElement.appendChild(liElement);
        });
      } else {
        console.log("Element with ID #myList not found in the DOM!");
      }













    } else {
      console.log(`Course with ID ${courseId} not found in the category ${courseCategory}!`);
    }
  } else {
    console.log(`No such document for category ${courseCategory}!`);
  }
}














renderCourseInfo()