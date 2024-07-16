let mainContainer = document.querySelector(".main-container");
let sideBar = document.querySelector(".sideBar-container");
let sideBarHeader = document.querySelector(".sideBar-header > a");
let toggleBtns = document.querySelector(".toggleBtns");
let cancelBtn = document.querySelector(".toggleBtns > .cancel");
let barBtn = document.querySelector(".toggleBtns > .bar");
let angle = document.querySelector(".angle");
let copyWrite = document.querySelector(".copyWrite");
let sideBarNav = document.querySelectorAll(".sideBar-nav > li");
let formDataCompleted = true; // FLAG TO CHECK EMPTY INPUT

//! FUNCTION TO TOGGLE THE VISIBILITY OF THE SIDEBAR
function showSideBar() {
  mainContainer.classList.add("show");
  copyWrite.classList.remove("d-none");
  angle.classList.remove("opacity0");
}

function hideSideBar() {
  if (mainContainer.classList.contains("show")) {
    mainContainer.classList.remove("show");
    copyWrite.classList.add("d-none");
    angle.classList.add("opacity0");
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
