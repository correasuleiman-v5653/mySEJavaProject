//code for Player-card.class.js
class PlayerCard{
    //defining attributes
    _profilePicture = "";
    _username = "";
    _gender = "";
    _age = 0;
    _location = "";
    _personalityTraits = new Array();
    _games = new Array();

    //Creating the constructor to instantiate the object inside the Main.js class
    constructor(profilePicture,username,gender,age,location,personalityTraits,games){
        this._profilePicture = profilePicture;
        this._username = username;
        this._gender = gender;
        this._age = age;
        this._location = location;
        this._personalityTraits = personalityTraits;
        this._games = games;
    }

    //Getter functions for returning desired attributes in the Main.js class
    getProfilePicture(){
        return this._profilePicture;
    }

    getUsername(){
        return this._username;
    }

    getGender(){
        return this._gender;
    }

    getAge(){
        return this._age;
    }

    getLocation(){
        return this._location;
    }

    getPersonalityTraits(){
        return this._personalityTraits;
    }

    getGames(){
        return this._games;
    }
}

