var surName = document.getElementById('surName');
var givenName = document.getElementById('givenName');
var gender = document.getElementById('gender');
var dob = document.getElementById('dob');
var nationality = document.getElementById('nationality');
var residence = document.getElementById('residence');
var occupation = document.getElementById('occupation');
var category = document.getElementById('category');
var submit = document.getElementById('submit');
var message = document.getElementById('message');
// Errors
var surName_error = document.getElementById('surName_error');
var givenName_error = document.getElementById('givenName_error');
var gender_error = document.getElementById('gender_error');
var dob_error = document.getElementById('dob_error');
var residence_error = document.getElementById('residence_error');
var occupation_error = document.getElementById('occupation_error');
var nationality_error = document.getElementById('nationality_error');
var category_error = document.getElementById('category_error');


// A function that will do all my data validations system wide
var required = (input, error, input_error, regex) => {
    if (input.value.length == "") {
        input.style.border = "1px solid red";
        input_error.classList.add("warnings");
        input_error.textContent = "" + error + "";
        submit.disabled = true;
        return false;
    } else {
        input.style.border = "";
        input_error.textContent = "";
        submit.disabled = false;
    }
    if (regex != undefined) {
        if (!input.value.match(regex)) {
            input.style.border = "1px solid red";
            input_error.classList.add("warnings");
            input_error.textContent = "Invalid entry!"
            submit.disabled = true;
            return false;
        } else {
            input.style.border = "";
            input_error.textContent = "";
            submit.disabled = false;
        }
    }
}

var validate = () => {
    if (required(surName, "This field is required!", surName_error, '^[a-zA-Z]{1,16}$') === false) return 0;
    if (required(givenName, "This field is required!", givenName_error, '^[a-zA-Z]{1,16}$') === false) return 0;
    if (required(dob, "Select Date of Birth", dob_error) === false) return 0;
    if (required(nationality, "This field is required!", nationality_error, '^[a-zA-Z]{5,20}$') === false) return 0;
    if (required(residence, "This field is required!", residence_error, '^[a-zA-Z]{1,20}$') === false) return 0;
    if (required(occupation, "This field is required!", occupation_error, '^[a-zA-Z]{5,50}$') === false) return 0;
    if (required(category, "Select Patient Category", category_error) === false) return 0;
    // Category
    if (category.value === "--Select Category--") {
        category.style.border = "1px solid red";
        category_error.classList.add("warnings");
        category_error.textContent = "Select Patient Category"
        submit.disabled = true;
        return false;
    } else {
        category.style.border = "";
        category_error.textContent = "";
        submit.disabled = false;
    }

    // // Date of birth
    // if ((Date.now.getFullYear - dob.value.getFullYear) < 0) {
    //     dob.style.border = "1px solid red";
    //     dob_error.classList.add("warnings");
    //     dob_error.textContent = "Patient should be atleast 1 year old"
    //     submit.disabled = true;
    //     return false;
    // } else if ((Date.now.getFullYear - dob.value.getFullYear) > 150) {
    //     dob.style.border = "1px solid red";
    //     dob_error.classList.add("warnings");
    //     dob_error.textContent = "Patient should not be more than 150 year old"
    //     submit.disabled = true;
    // } else {
    //     dob.style.border = "";
    //     dob_error.textContent = "";
    //     submit.disabled = false;
    // }
}

