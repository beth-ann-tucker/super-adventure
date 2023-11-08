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
      url: "#",
      dataType: "json",
      success: function (data) {
        $("#inputFirstName").val(data.inputFirstName);
        $("#inputMiddleName").val(data.inputMiddleName);
        $("#inputLastName").val(data.inputLastName);
        $("#inputEmail").val(data.inputEmail);
        $("#inputPhone").val(data.inputPhone);
        $("#inputSSN").val(data.inputSSN);
        $("#inputBirthdate").val(data.inputBirthdate);
        $("#inputAddress").val(data.inputAddress);
        $("#inputCity").val(data.inputCity);
        $("#inputZip").val(data.inputZip);
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