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



function getNestedObject(data, key) {
  // Check if the key exists at the current level of the object
  if (key in data) {
      return data[key];
  }

  // Loop through each property in the object
  for (let k in data) {
      // If the property is itself an object, call getNestedObject recursively
      if (typeof data[k] === 'object' && data[k] !== null) {
          const result = getNestedObject(data[k], key);
          // If the key was found in the nested object, return the result
          if (result !== undefined) {
              return result;
          }
      }
  }

  // Return undefined if the key was not found in any nested object
  return undefined;
}


// Assuming allCourses is already defined as a flat array of course objects
const allcategories = [desarrolloData, IdiomasData, marketingData, NegociosData, DiseñoData, leaderData, SalesData];
const allCourses = allcategories.flatMap(Object.values);

// Function to get courses sorted by views
function getCoursesSortedByViews(courses) {
  return courses
    .map(course => {
      const courseViews = course.views ?? course.veiws ?? 0; // Normalize views property
      return { ...course, views: courseViews };
    })
    .sort((a, b) => b.views - a.views);
}


const clickedCourses = [];


// Function to render courses to the DOM
function renderCourses(courses) {
  const container = document.getElementById('courses-container');
  if (!container) {
    console.error('No element with id "courses-container" found in the DOM.');
    return;
  }

  // Clear any existing content
  container.innerHTML = '';

  courses.forEach((course, index) => {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

  

      // Assign a unique ID to each course based on its index
      courseDiv.id = `course-${index}`;
    
      // Add a click event listener to log the course ID
      courseDiv.addEventListener('click', () => {
       
        let courseId = courseDiv.id;
        let  category = "Trending"
   
        // Store the information in localStorage
        localStorage.setItem('selectedCourseId', courseId);
        localStorage.setItem('courseCategory', category);

        // Redirect to the course details page
        window.location.href = 'index9.html';

      });
    




    
    // Create and append the first image if it exists
    if (course.thumbnail) {
      const img1 = document.createElement('img');
      img1.src = course.thumbnail;
      img1.alt = `Thumbnail for ${course.name}`;
      courseDiv.appendChild(img1);
    }

    // Create a new div for the title and rating
    const titleRatingDiv = document.createElement('div');
    titleRatingDiv.classList.add('title-rating');

    // Create and append an h1 for course title
    const h1 = document.createElement('h1');
    h1.textContent = course.name;
    titleRatingDiv.appendChild(h1);
    const titleContainer = document.getElementById('courses-container-tittle');
    titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Trending</h1>`;


    // Create and append stars for the rating
    const span2 = document.createElement('span');
    const maxStars = 5;
    const stars = Math.round(course.stars) || 0;

    // Render filled stars (★) up to the rating value
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      span2.appendChild(star);
    }

    // Render empty stars (☆) up to maxStars
    for (let i = stars; i < maxStars; i++) {
      const star = document.createElement('span');
      star.textContent = '☆';
      span2.appendChild(star);
    }

    // Append the rating to the titleRatingDiv
    titleRatingDiv.appendChild(span2);

    // Append titleRatingDiv to the main courseDiv
    courseDiv.appendChild(titleRatingDiv);

    // Create a new div for the teacher's info and cost
    const teacherInfoDiv = document.createElement('div');
    teacherInfoDiv.classList.add('teacher-info');

    if (course.teacherImage) {
      const img2 = document.createElement('img');
      img2.src = course.teacherImage;
      img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
      img2.classList.add('teacher-image');
      teacherInfoDiv.appendChild(img2);
    }

    const h3 = document.createElement('h3');
    h3.textContent = course.teacherName;
    teacherInfoDiv.appendChild(h3);

    const span1 = document.createElement('span');
    span1.textContent = `$ ${course.cost || 'N/A'}`;
    teacherInfoDiv.appendChild(span1);

    // Append teacherInfoDiv to courseDiv
    courseDiv.appendChild(teacherInfoDiv);

    // Append courseDiv to the main container
    container.appendChild(courseDiv);
  });
}

// Function to push top 10 most-viewed courses to Firebase under "Trending" and render them
async function updateTrendingCourses() {
  // Ensure courses are sorted by views
  const sortedCoursesByViews = getCoursesSortedByViews(allCourses);

  // Get the top 10 most-viewed courses
  const top10Courses = sortedCoursesByViews.slice(0, 10);
  
  try {
    // Create a reference to the Trending document in the database
    const trendingRef = doc(db, 'courseList', 'Trending');

    // Push the top 10 courses to the "Trending" document in Firebase
    await setDoc(trendingRef, { courses: top10Courses });

    console.log("Top 10 trending courses successfully updated in the database.");

    // Render the top 10 trending courses to the DOM
    renderCourses(top10Courses);
  } catch (error) {
    console.error("Error updating trending courses in database:", error);
  }
  return(top10Courses)
}

// Set an interval to automatically update trending courses every hour (3600000 ms)
setInterval(updateTrendingCourses, 3600000);

// Update trending courses and render immediately when the script loads
updateTrendingCourses();


console.log(clickedCourses)





function extractCategoryType(items) {
  const result = [];
  const pattern = /^(\w+)\s([\w-]+)$/; // Regex to match "Category Type" pattern

  items.forEach(item => {
      const match = item.match(pattern);
      if (match) {
          const [, category, type] = match;
          result.push({ category, type });
      }
  });

  return result;
}

const output = extractCategoryType(clickedCourses);
console.log(output);








// Function to handle item clicks and manage active state
function handleItemClick(event) {
  // Get the currently active item (if any) and remove the "active" class
  const activeItem = document.querySelector('li.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }

  // Add the "active" class to the clicked item
  event.target.classList.add('active');
  
  // Log the new active item ID for verification
  console.log(`Active item changed to: ${event.target.id}`);

  // Clear the courses container before adding new content







  function updateCourseTitle(activeTittle) {
    const titleContainer = document.getElementById('courses-container-tittle');
    


    if (activeTittle === "Dev"){
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Desarrollo</h1>`;
    }else if (activeTittle === "Idiomas") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Idiomas</h1>`;
    }else if (activeTittle === "Marketing") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Marketing</h1>`;
    }else if (activeTittle === "Buissnes") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Negocios</h1>`;
    }else if (activeTittle === "Desine") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Diseño</h1>`;
    }else if (activeTittle === "leader") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Liderazgo</h1>`;
    }else if (activeTittle === "Sales") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Ventas</h1>`;
    }else if (activeTittle === "Science") {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Ciencias</h1>`;
    }       
     else {
      titleContainer.innerHTML =  `<h3>Cursos de</h3> `+` <h1>Trending</h1>`;
    }
  }
  updateCourseTitle(event.target.id) 











  const container = document.getElementById('courses-container');
  if (container) {
    container.innerHTML = ''; // This removes existing content
  }

  // Render courses based on the clicked item's ID
  switch (event.target.id) {
    case 'Trend':
      console.log("Trending item activated");
      updateTrendingCourses();
      // Call the function to render trending courses (if exists)
      break;
    case 'Dev':
      console.log("Desarrollo item activated");
      renderalldevcouses(); // This will now replace previous content
      break;
    case 'Buissnes':
      console.log("Negocios item activated");
      renderallNegcouses();
      break;
    case 'Desine':
      console.log("Diseño item activated");
      renderallDescouses();
      break;
    case 'leader':
      console.log("Liderazgo item activated");
      renderallLeadcouses();
      break;
    case 'Sales':
      console.log("Ventas item activated");
      renderallvENTAScouses()
      // Add call for Ventas if render function exists
      break;
    case 'Marketing':
      console.log("Marketing item activated");
      renderallMarkcouses();
      break;
    case 'Idiomas':
      console.log("Idiomas item activated");
      renderallLangcouses();
      break;
    case 'Science':
      console.log("Ciencias item activated");
      renderallScicouses();
      break;
    default:
      console.log("Unknown item activated");
  }
}

// Add event listeners to each <li> item
document.getElementById('Trend').addEventListener('click', handleItemClick);
document.getElementById('Dev').addEventListener('click', handleItemClick);
document.getElementById('Buissnes').addEventListener('click', handleItemClick);
document.getElementById('Desine').addEventListener('click', handleItemClick);
document.getElementById('leader').addEventListener('click', handleItemClick);
document.getElementById('Sales').addEventListener('click', handleItemClick);
document.getElementById('Marketing').addEventListener('click', handleItemClick);
document.getElementById('Idiomas').addEventListener('click', handleItemClick);
document.getElementById('Science').addEventListener('click', handleItemClick);
function getObjectLength(obj) {
  return Object.keys(obj).length;
}





function renderalldevcouses() {
  const dev = desarrolloData;
  const length = getObjectLength(dev);

  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) {
              courses.push(course);
          }
      }
      return courses;
  }

  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }
      container.innerHTML = ''; // Clear previous content

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          courseDiv.id = `course-${index}`; // Unique ID
          
          // Click event listener to log course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Desarrollo"
        
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';


          });

          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }
          titleRatingDiv.appendChild(span2);
          courseDiv.appendChild(titleRatingDiv);

          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');
          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }
          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);
          courseDiv.appendChild(teacherInfoDiv);
          container.appendChild(courseDiv);
      });
  }

  const allCourses = getAllCourses(dev, length);
  renderCourses(allCourses);
}

function renderallMarkcouses() {
  const dev = marketingData;
  const length = getObjectLength(dev);

  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) {
              courses.push(course);
          }
      }
      return courses;
  }

  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }
      container.innerHTML = ''; // Clear previous content

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          courseDiv.id = `course-${index}`; // Unique ID
          
          // Click event listener to log course ID
          courseDiv.addEventListener('click', () => {

            let courseId = courseDiv.id;
            let  category = "Marketing"
      
            // Store the information in localStorage
            localStorage.setItem('selectedCourseId', courseId);
            localStorage.setItem('courseCategory', category);
    
            // Redirect to the course details page
            window.location.href = 'index9.html';
       

          });

          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }
          titleRatingDiv.appendChild(span2);
          courseDiv.appendChild(titleRatingDiv);

          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');
          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }
          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);
          courseDiv.appendChild(teacherInfoDiv);
          container.appendChild(courseDiv);
      });
  }

  const allCourses = getAllCourses(dev, length);
  renderCourses(allCourses);
}

// Repeat similar pattern for other rendering functions like `renderallNegcouses`, `renderallLangcouses`, etc.
function renderallLangcouses() {
  const dev = IdiomasData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

 
  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Idiomas"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';
       
          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}

function renderallNegcouses() {
  const dev = NegociosData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Negocios"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';

          
          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}

function renderallDescouses() {
  const dev = DiseñoData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Diseño"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';
            
          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}

function renderallLeadcouses() {
  const dev = leaderData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Liderazgo"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';

          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}

function renderallvENTAScouses() {
  const dev = SalesData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {

              let courseId = courseDiv.id;
              let  category = "Ventas"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';
        
          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}

function renderallScicouses() {
  const dev = ScienceData;
  const length = getObjectLength(dev);

  // Helper function to get a nested object by path
  function getNestedObject(obj, path) {
      const keys = path.split('.');
      let current = obj;
      for (const key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return null;
          }
      }
      return current;
  }

  // Generate an array of courses up to the length of `dev`
  function getAllCourses(dev, length) {
      const courses = [];
      for (let i = 0; i < length; i++) {
          const course = getNestedObject(dev, `course${i}`);
          if (course) { // Only add if course exists
              courses.push(course);
          }
      }
      return courses;
  }

  // Render each course to the DOM inside #courses-container
  function renderCourses(courses) {
      const container = document.getElementById('courses-container');
      if (!container) {
          console.error('No element with id "courses-container" found in the DOM.');
          return;
      }

      // Clear any existing content
      container.innerHTML = '';

      courses.forEach((course, index) => {
          const courseDiv = document.createElement('div');
          courseDiv.classList.add('course');
          
          // Assign a unique ID to each course based on its index
          courseDiv.id = `course-${index}`;

          // Add a click event listener to log the course ID
          courseDiv.addEventListener('click', () => {
              let courseId = courseDiv.id;
              let  category = "Ciencias"
              // Store the information in localStorage
              localStorage.setItem('selectedCourseId', courseId);
              localStorage.setItem('courseCategory', category);
      
              // Redirect to the course details page
              window.location.href = 'index9.html';
            
          });

          // Create and append the first image if it exists
          if (course.thumbnail) {
              const img1 = document.createElement('img');
              img1.src = course.thumbnail;
              img1.alt = `Thumbnail for ${course.name}`;
              courseDiv.appendChild(img1);
          }

          // Create a new div for the title and rating
          const titleRatingDiv = document.createElement('div');
          titleRatingDiv.classList.add('title-rating');

          // Create and append an h1 for course title
          const h1 = document.createElement('h1');
          h1.textContent = course.name;
          titleRatingDiv.appendChild(h1);

          // Create and append stars for the rating
          const span2 = document.createElement('span');
          const maxStars = 5;
          const stars = Math.round(course.stars) || 0;

          // Render filled stars (★) up to the rating value
          for (let i = 0; i < stars; i++) {
              const star = document.createElement('span');
              star.textContent = '★';
              span2.appendChild(star);
          }

          // Render empty stars (☆) up to maxStars
          for (let i = stars; i < maxStars; i++) {
              const star = document.createElement('span');
              star.textContent = '☆';
              span2.appendChild(star);
          }

          // Append the rating to the titleRatingDiv
          titleRatingDiv.appendChild(span2);

          // Append titleRatingDiv to the main courseDiv
          courseDiv.appendChild(titleRatingDiv);

          // Create a new div for the teacher's info and cost
          const teacherInfoDiv = document.createElement('div');
          teacherInfoDiv.classList.add('teacher-info');

          if (course.teacherImage) {
              const img2 = document.createElement('img');
              img2.src = course.teacherImage;
              img2.alt = `Image of ${course.teacherName || 'the instructor'}`;
              img2.classList.add('teacher-image');
              teacherInfoDiv.appendChild(img2);
          }

          const h3 = document.createElement('h3');
          h3.textContent = course.teacherName;
          teacherInfoDiv.appendChild(h3);

          const span1 = document.createElement('span');
          span1.textContent = `$ ${course.cost || 'N/A'}`;
          teacherInfoDiv.appendChild(span1);

          // Append teacherInfoDiv to courseDiv
          courseDiv.appendChild(teacherInfoDiv);

          // Append courseDiv to the main container
          container.appendChild(courseDiv);
      });
  }

  // Get all courses dynamically
  const allCourses = getAllCourses(dev, length);

  // Render each course to the #courses-container div
  renderCourses(allCourses);
}
