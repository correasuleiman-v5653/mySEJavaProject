//function for submitting the account, in other words, creating a class User
function submitAccount(){
    //grabbing values from the page
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    //instantiating a new User object
    let account = new User();

    //putting the values to each of its attributes
    account.setUsername(username);
    account.setPassword(password);
    account.setEmail(email);

    //resetting the textboxes in the page
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";

    //alerting user to check email for confirming account
    alert("We've sent an email to confirm the account creation. Please confirm it so you can start creating your Player Card!");
}