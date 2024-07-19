//?=== MAIN CONTAINER ===
let mainContainer = document.querySelector(".main-container");
//?=== SIDE BAR ELEMENTS ===
let sideBar = document.querySelector(".sideBar-container");
let sideBarHeader = document.querySelector(".sideBar-header > a");
let toggleBtns = document.querySelector(".toggleBtns");
let cancelBtn = document.querySelector(".toggleBtns > .cancel");
let barBtn = document.querySelector(".toggleBtns > .bar");
let angle = document.querySelector(".angle");
let copyWrite = document.querySelector(".copyWrite");
let sideBarNav = document.querySelectorAll(".sideBar-nav > li");
//?=== STUDENT DETAILS ELEMENT ===
let categoryHeading = document.querySelectorAll(".categoryHeading");
let categoryDetails = document.querySelectorAll(".categoryDetails");
let personalDetails = document.querySelector(".personalDetails");
let educationalDetails = document.querySelector(".educationalDetails");
let contactDetails = document.querySelector(".contactDetails");
let categoryDetailsContainer = document.querySelector(
  ".categoryDetailsContainer"
);
let formDataCompleted = true; // FLAG TO CHECK EMPTY INPUT

//! FUNCTION TO TOGGLE THE VISIBILITY OF THE SIDEBAR
function showSideBar() {
  mainContainer.classList.add("show");
  copyWrite.classList.remove("d-none");
  angle.classList.remove("d-none");
}

function hideSideBar() {
  if (mainContainer.classList.contains("show")) {
    mainContainer.classList.remove("show");
    copyWrite.classList.add("d-none");
    angle.classList.add("d-none");
  }
}
//! FUNCTION TO LOG IN
function logIn() {
  //*  LOGIN ELEMENTS
  let adminId = "admin";
  let adminPassword = 1234;
  let logInContainer = document.querySelector(".logInContainer");
  let inputs = logInContainer.querySelectorAll("input");
  let logInEmail = logInContainer.querySelector("#logInEmail").value;
  let logInPassword = logInContainer.querySelector("#logInPassword").value;
  //* ENSURES NO INPUT FIELD IS EMPTY BEFORE PROCEEDING.
  for (input of inputs) {
    if (!input.value) {
      console.log("hi");
      formDataCompleted = false;
    }
  }

  //* IF NO INPUT IS EMPTY CODE WILL BE EXECUTED
  if (formDataCompleted) {
    let emailFlag = false;
    let passwordFlag = false;

    if (logInEmail == adminId) {
      emailFlag = true;
      if (logInPassword == adminPassword) {
        passwordFlag = true;
      }
    }
    if (emailFlag && passwordFlag) {
      inputs.forEach((val) => {
        val.value = "";
      });
      Swal.fire({
        customClass: {
          container: "sweatContainer",
          popup: "sweatPopup",
          title: "sweatTitle",
          htmlContainer: "sweatPara",
          confirmButton: "sweatBtn",
          cancelButton: "sweatBtn",
        },
        title: "congratulation!",
        text: "You are loged In!",
        icon: "success",
      });

      setTimeout(() => {
        location.href = "../dashBoard.html";
      }, 1400);
    } else if (emailFlag && !passwordFlag) {
      Swal.fire({
        customClass: {
          container: "sweatContainer",
          popup: "sweatPopup",
          title: "sweatTitle",
          htmlContainer: "sweatPara",
          confirmButton: "sweatBtn",
          cancelButton: "sweatBtn",
        },
        title: "sorry!",
        text: "Incorrect Password. Please try again.",
        icon: "error",
      });
    } else if (!emailFlag) {
      Swal.fire({
        customClass: {
          container: "sweatContainer",
          popup: "sweatPopup",
          title: "sweatTitle",
          htmlContainer: "sweatPara",
          confirmButton: "sweatBtn",
          cancelButton: "sweatBtn",
        },
        title: "Error!",
        text: "Incorrect admin ID. Please try again.",
        icon: "error",
      });
    }
  } //* IF ANY INUT IS EMPTY WARNING WILL BE GIVEN TO THE USER
  else {
    Swal.fire({
      customClass: {
        container: "sweatContainer",
        popup: "sweatPopup",
        title: "sweatTitle",
        htmlContainer: "sweatPara",
        confirmButton: "sweatBtn",
        cancelButton: "sweatBtn",
      },
      icon: "error",
      title: "Incomplete Form",
      text: "Please fill in all the fields before submitting.",
    });
    formDataCompleted = true;
  }
}

//! FUNCTION TO TOGGLE THE DETAILS CATEGORY BASED ON THE CLICKED TAB.
counter = 0;
function toggleStudentDetails(event) {
  categoryHeading.forEach((heading) => {
    heading.classList.remove("active");
  });

  event.target.classList.add("active");

  categoryDetails.forEach((details) => {
    details.classList.add("opacity0");
  });

  if (event.target.classList.contains("personalDetailsHeading")) {
    counter = 0;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    personalDetails.classList.remove("opacity0");
  } else if (event.target.classList.contains("educationalDetailsHeading")) {
    counter = 1;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    educationalDetails.classList.remove("opacity0");
  } else if (event.target.classList.contains("contactDetailsHeading")) {
    counter = 2;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    contactDetails.classList.remove("opacity0");
  }
}
