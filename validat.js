
    function validateForm() {
    let fname = document.forms["registrationForm"]["fname"].value;
    let lname = document.forms["registrationForm"]["lname"].value;
    let password = document.forms["registrationForm"]["pass"].value;
 


    // regExp
    let fnameRegex = /^[a-zA-Z\s]+$/;
    let lnameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    // let fnameRegex = /^[a-z]{3,10}$/i
    // let lnameRegex = /^[a-z]{3,10}$/i
    // let passwordRegex = /^[\w@-]{8,12}$/i
    

    if (!fname.match(fnameRegex)) {
        alert("Please enter a valid fname.");
        return false;
      }
    
      if (lname.match(lnameRegex)) {
        alert("Please enter a valid lname.");
        return false;
      }
    
      if (!password.match(passwordRegex)) {
        alert("Please enter a valid password. It must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).");
        return false;
      }

     
     return true;
    }

