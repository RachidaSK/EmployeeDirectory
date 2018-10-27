
const showView = function () {
  $("#verify-page").addClass("hide");
  $("#add-page").addClass("hide");
  $("#search").addClass("hide");
  $("#view-page").removeClass("hide");
};

const showAdd = function () {
  $("#verify-page").addClass("hide");
  $("#add-page").removeClass("hide");
  $("#view-page").removeClass("hide");
  $("#btn-add").removeClass("hide");
  $("#btn-update").addClass("hide");
  $("#search").addClass("hide");
};

const showVerify = function () {
  $("#verify-page").removeClass("hide");
  $("#add-page").addClass("hide");
  $("#view-page").addClass("hide");
  $("#verify-icon").removeClass("hide");
  $("#btn-delete").addClass("hide");
  $("#search").removeClass("hide");
};

const showUpdate = function () {
  $("#verify-page").addClass("hide");
  $("#add-page").removeClass("hide");
  $("#view-page").removeClass("hide");
  $("#btn-add").addClass("hide");
  $("#btn-update").removeClass("hide");
  $("#search").addClass("hide");
};

const showDelete = function () {
  $("#verify-page").removeClass("hide");
  $("#add-page").addClass("hide");
  $("#view-page").removeClass("hide");
  $("#verify-icon").addClass("hide");
  $("#btn-delete").removeClass("hide");
  $("#search").addClass("hide");
};

$("#view").on("click", showView);
$("#add").on("click", showAdd);
$("#verify").on("click", showVerify);
$("#update").on("click", showUpdate);
$("#delete").on("click", showDelete);

const render = function () {
  $(".employee-list").empty();
  for (let i = 0; i < employeeList.length; i++) {
    $("#view-page.employee-list").append(`<div class="row"><div class="col-md-8 employee-info"><div class="row employee-name"><p>${employeeList[i].name}</p></div><div class="row employee-office"><p>${employeeList[i].officeNum}</p></div><div class="row employee-phone"><p>${employeeList[i].phoneNum}</p></div></div></div>`);
  }
}
render();

const addName = function () {
  const name = $("#name").val();
  const office = $("#office").val();
  const phone = $("#phone").val();

  employeeList.push({
    name: name,
    officeNum: office,
    phoneNum: phone
  });

  $("#name").val(" ");
  $("#office").val(" ");
  $("#phone").val(" ");

  render();
}

$("#btn-add").on("click", addName);

const verifyName = function () {
  const searchName = $("#verName").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.includes(searchName)) {
      $("#search-result").text("yes");
      return;
    } else { document.querySelector("#search-result").innerText = "no"; }
  }
  $("#verName").val(" ");
}
$("#verify-icon").on("click", verifyName);

const updateName = function () {
  const upName = $("#name").val();
  const upOffice = $("#office").val();
  const upPhone = $("#phone").val();

  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === upName) {
      console.log("yes");
      employeeList[i].officeNum = upOffice;
      employeeList[i].phoneNum = upPhone;
    }
  }
  $("#name").val(" ");
  $("#office").val(" ");
  $("#phone").val(" ");

  render();
}
$("#btn-update").on("click", updateName);

const deleteName = function () {
  const delName = $("#verName").val();
  for (let i = 0; i < employeeList.length; i++) {

    if (employeeList[i].name === delName) {
      console.log("yes it works");
      employeeList.splice(i, 1);
      break;
    }
  }
  $("#verName").val(" ");
  render();
}
$("#btn-delete").on("click", deleteName);
