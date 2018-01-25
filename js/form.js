
function onFormSubmit() {
    var firstname = document.forms['login-form']['firstname'].value;
    var lastname = document.forms['login-form']['lastname'].value;
    var message = document.getElementById("myTextarea").value;
    var elementas = document.getElementById('p1');


    if (firstname == "") {
        elementas.innerHTML = "Please enter Your first name!";
        elementas.className = "red-alert";
        return false;

    }else if (lastname == "") {
        elementas.innerHTML = "Please enter Your last name!";
        elementas.className = "red-alert";
        return false;

    }else if (!/^[a-zA-Z ]*$/g.test(firstname) || (!/^[a-zA-Z ]*$/g.test(lastname))){
        elementas.innerHTML = "First name and last name must have alphabet characters only!";
        elementas.className = "red-alert";
        return false;
    
    }else if (message == "") {
        elementas.innerHTML  = "Please write Your message!";
        elementas.className = "red-alert";
        return false;
    }else {
        elementas.innerHTML = "Thank You for Your message!";
        elementas.className = "green-alert";
        return true;

    }
}
