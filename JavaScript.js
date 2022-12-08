function validateForm() {

    var errorMessages = "";
    var Firstname = document.getElementById("FirstName").value;
    if (Firstname === null || Firstname === "" || Firstname.length > 20) {
        errorMessages += "<p>The Firstname is required and cannot be greater than 20 characters</p>";
    }

    var lastname = document.getElementById("LastName").value;
    if (lastname === null || lastname === "" || lastname.length > 50) {
        errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";

    }
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
        console.log("email invalid")
    } else {
        validEmail = true;
        console.log("Email valid")
    }

    var phone = document.getElementById("Phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
        errorMessages += "<p>Invalid phone number</p>";

    } else {
        validphone = true;
        console.log("VALID PHONE #")
    }

    var Username = document.getElementById("Username").value;
    if (Username === null || Username === "" ||Username.length > 12) {
        errorMessages += "<p>UserName can not be more than 12 Characters</p>";
    }
    var Password = document.getElementById("Password").value;
    if (Password === null || Password ===  ""||Password.length > 7) {
        errorMessages += "<p>password can not be more than 7 Characters</p>";
    }

    if (errorMessages !== "") {

        document.getElementById("errorMessages").innerHTML = errorMessages;
        return false;
    }

    var country = document.getElementById("Country").value;
    if (country === "USA") {
        var zipcode = document.getElementById("zipcode").value;
    }
    if (zipcode === null || zipcode === ""||zipcode.length > 5) {
        errorMessages += "<p>zipcode can not be more than 5 characters</p>";
    }

//Zipcode is OK. For example: validZipcode = true;

}
