//code for User.class.js. This is the closest one from the models drawn on the modeling phase.
class User{
    //defining attributes. The constructor here is default
    _username = "";
    _password = "";
    _email = "";

    //setters to put page values onto the instatiated object
    setUsername(username){
        this._username = username;
    }

    setPassword(password){
        this._password = password;
    }

    setEmail(email){
        this._email = email;
    }
}