// Import necessary Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the 'courses' collection
const colRef = collection(db, 'courses');

// Function to get and display all documents from the 'courses' collection
async function getCourses() {
  try {
    const snapshot = await getDocs(colRef); // Fetch all documents
    const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map each document to an object

    // Log each course's data for debugging
    console.log("Courses retrieved:", courses);

    // Select a container in your HTML to display courses
    const courseContainer = document.querySelector(".Courses"); // Ensure a <div class="Courses"> is in your HTML

    // Display each course
    courses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.classList.add("course-item");

      // Populate with course details
      courseDiv.innerHTML = `
        <h3>${course.name}</h3>
        <p>Description: ${course.description}</p>
        <p>Level: ${course.level}</p>
        <p>Duration: ${course.duration}</p>
      `;
      
      courseContainer.appendChild(courseDiv); // Append each course to the container
    });
  } catch (error) {
    console.error("Error fetching courses:", error); // Handle any errors
  }
}

// Call the function to get and display courses
getCourses();
