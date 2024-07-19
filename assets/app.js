//?=== MAIN CONTAINER ===
let mainContainer = document.querySelector(".main-container");
let studentDetailsContainer = document.querySelector(
  ".studentsDetails-container"
);
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
//?=== MODALS EDIT SECTION ELEMENT ===
let modalToChange = document.querySelectorAll(".modalToChange");
let modalContent = document.querySelector(".modalContent");
let modalContentCover = document.querySelector(".modalContentCover");
let editPersonalDetails = document.querySelector(".editPersonalDetails");
let editEducationalDetails = document.querySelector(".editEducationalDetails");
let editContactDetails = document.querySelector(".editContactDetails");
//?=== OTHERS ===
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
function toggleStudentDetails(heading) {
  categoryDetails.forEach((details) => {
    details.classList.add("opacity0");
  });

  if (heading.classList.contains("personalDetailsHeading")) {
    counter = 0;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    personalDetails.classList.remove("opacity0");
  } else if (heading.classList.contains("educationalDetailsHeading")) {
    counter = 1;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    educationalDetails.classList.remove("opacity0");
  } else if (heading.classList.contains("contactDetailsHeading")) {
    counter = 2;
    categoryDetailsContainer.style.transform = `translateX( ${
      counter * -100
    }%)`;
    contactDetails.classList.remove("opacity0");
  }
}

//! FUNCTION TO TOGGLE THE VISIBILITY OF EDIT SECTIONS WITHIN THE MODAL
function toggleEditSection(heading) {
  modalToChange.forEach((modal) => {
    modal.classList.add("opacity0");
  });

  if (heading.classList.contains("personalDetailsHeading")) {
    counter = 0;
    modalContentCover.style.transform = `translateX( ${counter * -100}%)`;
    editPersonalDetails.classList.remove("opacity0");
  } else if (heading.classList.contains("educationalDetailsHeading")) {
    counter = 1;
    modalContentCover.style.transform = `translateX( ${counter * -100}%)`;
    editEducationalDetails.classList.remove("opacity0");
  } else if (heading.classList.contains("contactDetailsHeading")) {
    counter = 2;
    modalContentCover.style.transform = `translateX( ${counter * -100}%)`;
    editContactDetails.classList.remove("opacity0");
  }
}

//! FUNCTION TO SET THE ACTIVE CLASS ON THE HEADING OF THE SECTIN THAT IS CURRENCTLY BEING VIEWED
function setActiveHeading(event) {
  categoryHeading.forEach((heading) => {
    heading.classList.remove("active");
  });

  let heading = event.target;

  if (!event.target.classList.contains("categoryHeading")) {
    heading = event.target.closest("h2");
  }

  heading.classList.add("active");
  if (heading.classList.contains("detailsCategoryHeading")) {
    toggleStudentDetails(heading);
  } else {
    toggleEditSection(heading);
  }
}

//! ==============================================
//! MODAL FUNCTIONALITY
//! ==============================================

//* FUNCTION TO SHOW THE MODAL AND HIDE THE UL ELEMENTS
function showModalAndHideUls() {
  let modalContainer = document.querySelector(".modalContainer");

  //? HIDING ALL LISTS AND SHOWING MODAL
  modalContainer.classList.replace("d-none", "d-flex");
  modalContent.classList.replace("animate__bounceOut", "animate__bounceIn");
  studentDetailsContainer.classList.add("d-none");
}

//* FUNCTION TO HIDE THE MODAL AND SHOW THE UL ELEMENTS
function hideModalAndShowUls() {
  let modalContainer = document.querySelector(".modalContainer");
  modalContent.classList.replace("animate__bounceIn", "animate__bounceOut");
  setTimeout(() => {
    modalContainer.classList.replace("d-flex", "d-none");
    studentDetailsContainer.classList.remove("d-none");
  }, 700);
}
