const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const userAuthentication = (req, res, next) => {
  const user = req.headers;
  const findUser = USERS.find(
    (u) => u.username === user.username && u.password === user.password
  );
  if (findUser) {
    req.user = findUser; // Add user object to the request
    next();
  } else res.status(403).json({ message: "User authentication failed" });
};

const adminAuthentication = (req, res, next) => {
  const admin = req.headers;
  // console.log(admin.username);
  // console.log(admin.password);
  const findAdmin = ADMINS.find(
    (a) => a.username === admin.username && a.password === admin.password
  );
  if (findAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const alreadyExist = ADMINS.find((a) => a.username === admin.username);
  if (alreadyExist) {
    res.status(403).json({ message: "Admin already Exists!" });
  } else {
    ADMINS.push(admin);
    res.json({ message: "Admin created successfully" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ message: "Logged in successfully" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({ message: "Course created successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId);
  if (course) {
    Object.assign(course, req.body);
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  // logic to get all courses
  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = {
    username: req.body.username,
    password: req.body.password,
    purchasedCourses: [],
  };
  const alreadyExist = USERS.find((u) => u.username === user.username);
  if (alreadyExist) {
    res.status(403).json({ message: "User already Exists!" });
  } else {
    USERS.push(user);
    res.json({ message: "User created successfully" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  res.json({ message: "Logged in successfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  /*  
    One line logic 
    res.json({ courses: COURSES.filter(c => c.published) })
  */
  // logic to list all courses
  let listedCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (COURSES[i].published) listedCourses.push(COURSES[i]);
  }
  res.json({ courses: listedCourses });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: "Course purchased successfully" });
  } else {
    res.status(404).json({ message: "Course not found or not available" });
  }
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  /*ONE line solution
   const purchasedCourses = COURSES.filter( c => req.user.purchasedCourses.includes(c.id));
   res.json({purchasedCourses: purchasedCourses});
  */
  // logic to view purchased courses
  // cuz in purchasedCources array we've only passed the courseId in above function, hence here we need to extract full course details
  var purchasedCourseIds = req.user.purchasedCourses;
  var purchasedCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
      // indexOf (COURSES[i].id) in purchasedCourseIds array    eg: const arr = [1,2,3];  arr.indexOf(2) -> 1
      purchasedCourses.push(COURSES[i]);
    }
  }
  res.json({ purchasedCourses: purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
