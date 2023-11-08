//display second text entry for SSN if user clicks radio button indicating yes
var y = document.getElementById("inputAnotherSSN");
y.style.display = "none"; 

function hideFunction() { 
  y.style.display = "none"; 
}

function unhideFunction() { 
  y.style.display = "block";
}

//reading data from file
$(function () {

  // click a button event to load Dwight data

  $("#dwightBtn").on("click", function () {
    console.log("button clicked: ");

    $.ajax({
      url: "https://github.com/beth-ann-tucker/super-adventure/blob/main/data.json",
      dataType: "json",
      success: function (data) {
        console.log(data.inputFirstName);
        $("#inputFirstName").val(data.inputFirstName);
        console.log(data.inputMiddleName);
        $("#inputMiddleName").val(data.inputMiddleName);
        console.log(data.inputLastName);
        $("#inputLastName").val(data.inputLastName);
        console.log(data.inputEmail);
        $("#inputEmail").val(data.inputEmail);
        console.log(data.inputPhone);
        $("#inputPhone").val(data.inputPhone);
        console.log(data.inputSSN);
        $("#inputSSN").val(data.inputSSN);
        console.log(data.inputBirthdate);
        $("#inputBirthdate").val(data.inputBirthdate);
        console.log(data.inputAddress);
        $("#inputAddress").val(data.inputAddress);
        console.log(data.inputCity);
        $("#inputCity").val(data.inputCity);
        console.log(data.data.inputZip);
        $("#inputZip").val(data.inputZip);
        console.log(data.data.permissionCheck);
        $("#permissionCheck").prop("checked", data.permissionCheck);
      },
    });

    //TODO: can we grab data form anohter website.
  });

  // click submit button to get message

  $("submitBtn").on("click", function () {
    $("#thankYouPersonalized").append(
      $("#inputFirstName").val() + " " + $("#inputMiddleName").val() + " " + $("#inputLastName").val() + ", thank you for allowing us to steal your identity"
    );
  });
});
