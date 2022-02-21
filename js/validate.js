

function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    // check for any special characters using regex (source: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,special%20character%20and%20false%20otherwise.)
    // I added the numbers
    return specialChars.test(string);
}

function emailCheks(string) {
    const emailReg = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    // check for any special characters using regex (source: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,special%20character%20and%20false%20otherwise.)
    // I added the numbers
    return emailReg.test(string);
}

function validateForm(){
// Removes any whitespaces (spacebar, tabs, etc)
// .replace(/\s+/g, '')`


    let nameCheck = document.forms["accountCreation"]["name"].value.replace(/\s+/g, '');
    let surnameCheck = document.forms["accountCreation"]["surname"].value.replace(/\s+/g, '');
    let passCheck = document.forms["accountCreation"]["password"].value.replace(/\s+/g, '');
    let passConfirm = document.forms["accountCreation"]["passwordCheck"].value.replace(/\s+/g, '');
    let mailConfirm = document.forms["accountCreation"]["email"].value.replace(/\s+/g, '');
// innocent until proven guilty
    let fail = false;

    
    let errorBox = document.getElementById("error")
    errorBox.innerHTML = ""

    //Validate Email
    if(mailConfirm == "" || !mailConfirm.includes("@") || nameCheck.length < 5){
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