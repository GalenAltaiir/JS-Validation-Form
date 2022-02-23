

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    return specialChars.test(str);
}

function emailChecks(str) {
    const emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim;
    // not 100% fool proof, can be fooled by typing anything after the @ symbol
    // apparently email validation is overcomplicated
    return emailReg.test(str);
}

function mobileCheck(str){
    const mobileReg = /^([0][0-9]{9}|[+44][0-9]{12})$/gm;
    return mobileReg.test(str);
} // currently not used


function validateForm(){
// Removes any whitespaces (spacebar, tabs, etc)
// .replace(/\s+/g, '')`


    let nameCheck = document.forms["accountCreation"]["name"].value.replace(/\s+/g, '');
    let surnameCheck = document.forms["accountCreation"]["surname"].value.replace(/\s+/g, '');
    let passCheck = document.forms["accountCreation"]["password"].value.replace(/\s+/g, '');
    let passConfirm = document.forms["accountCreation"]["passwordCheck"].value.replace(/\s+/g, '');
    let mailConfirm = document.forms["accountCreation"]["email"].value.replace(/\s+/g, '');
    let mobileConfirm = document.forms["accountCreation"]["mobile"].value.replace(/\s+/g, '');
// innocent until proven guilty
    let fail = false;

    
    let errorBox = document.getElementById("error")
    errorBox.innerHTML = ""

    if(!mobileCheck || nameCheck == "" || nameCheck.length < 2){
        errorBox.innerHTML += "Please enter a valid mobile number. (UK ONLY) <br>"
        document.getElementById("mobile").style.border = "1px solid red"
        fail = true;
    } else {
        document.getElementById("mobile").style.border = "1px solid black"
    }

    //Validate Email
    if(!emailChecks(mailConfirm) || nameCheck == "" || nameCheck.length < 2){
        errorBox.innerHTML += "Please enter a valid email. <br>"
        document.getElementById("email").style.border = "1px solid red"
        fail = true;
    } else {
        document.getElementById("email").style.border = "1px solid black"
    }


    // Validate name field

    if(nameCheck == "" || nameCheck.length < 2 || containsSpecialChars(nameCheck)){
        // CHECK IF  EMPTY , contains at least 2 chars, and doesn't have special character or numbers
        // Sorry Elon's kid.

        errorBox.innerHTML += "Please enter a valid name. <br>"
        document.getElementById("name").style.border = "1px solid red"
        fail = true;
    }else {
        document.getElementById("name").style.border = "1px solid black"
    }
///////////////////////////////////////////////////////////
        // Validate surname field

    if(surnameCheck == "" || surnameCheck.length < 2 || containsSpecialChars(surnameCheck)){
        errorBox.innerHTML += "Please enter a valid surname. <br>"
        document.getElementById("surname").style.border = "1px solid red"
        fail = true;
    }else {
        document.getElementById("surname").style.border = "1px solid black"
    }

    ///////////////////////////////////////////////////////////
        // Validate password field

    if(passCheck == "" || passCheck.length < 8 || containsSpecialChars(passCheck) == false){
        // CHECK IF EMPTY , contains at least 8 chars, and DOES have special character or numbers
        // Sorry Elon's kid.
        errorBox.innerHTML += "Please enter a valid password. <br>"
        document.getElementById("pass").style.border = "1px solid red"
        fail = true;
    } else if(passCheck !== passConfirm){
        // CHECK IF PASSWORDS MATCH
        errorBox.innerHTML += "Passwords do not match. <br>"
        document.getElementById("conPass").style.border = "1px solid red"
        fail = true;
    } else {
        document.getElementById("conPass").style.border = "1px solid black"
        document.getElementById("pass").style.border = "1px solid black"
    }

    if(fail){
        
        return false;
    } else {
        return true;
    }
}