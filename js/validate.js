

function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
    // check for any special characters using regex (source: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,special%20character%20and%20false%20otherwise.)
    // I added the numbers
    return specialChars.test(string);
}

function validateForm(){
    let nameCheck = document.forms["accountCreation"]["name"].value;
    let surnameCheck = document.forms["accountCreation"]["surname"].value;
    let passCheck = document.forms["accountCreation"]["password"].value;
    let passConfirm = document.forms["accountCreation"]["passwordCheck"].value;

// innocent until proven guilty
    let fail = false;

    
    let errorBox = document.getElementById("error")
    errorBox.innerHTML = ""

    // Validate name field

    if(nameCheck == "" || nameCheck.length < 2 || containsSpecialChars(nameCheck)){
        // CHECK IF  EMPTY , contains at least 2 chars, and doesn't have special character or numbers
        // Sorry Elon's kid.

        errorBox.innerHTML += "Please enter a valid name. <br>"
        fail = true;
    }
///////////////////////////////////////////////////////////
        // Validate surname field

    if(surnameCheck == "" || surnameCheck.length < 2 || containsSpecialChars(surnameCheck)){
        errorBox.innerHTML += "Please enter a valid surname. <br>"
        fail = true;
    }

    ///////////////////////////////////////////////////////////
        // Validate password field

    if(passCheck == "" || passCheck.length < 8 || containsSpecialChars(passCheck) == false){
        // CHECK IF EMPTY , contains at least 8 chars, and DOES have special character or numbers
        // Sorry Elon's kid.
        errorBox.innerHTML += "Please enter a valid password. <br>"
        fail = true;
    } else if(passCheck !== passConfirm){
        // CHECK IF PASSWORDS MATCH
        errorBox.innerHTML += "Passwords do not match. <br>"
        fail = true;
    }

    if(fail){
        return false;
    }
}