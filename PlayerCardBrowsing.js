//code for the main for the Player Card Browsing feature
$(document).ready(function(){
    
    //Getting the JSON response from the server
    $.getJSON("userData.json", null, function(data){
        let users = data.users;

        //Loop - "do this for each user in the userData.json file"
        $.each(users,function(i,user){

            //Creating a PlayerCard object to store the user's data that is inside the JSON file
            let pc = new PlayerCard(user.profilePicture,user.username,user.gender,user.age,user.location,user.personalityTraits,user.games);

            //Creating an HTML element to display the user's information on the page feed
            let pcHTML = "";

            pcHTML += "<div id = \"player-card\">";
            pcHTML += "<img src = \"https://placehold.it/90x90\" alt = \"profile picture\"> <br>";
            pcHTML += "<b>Username:</b> " + pc.getUsername() + "<br>";
            pcHTML += "<b>Gender:</b> " + pc.getGender() + "<br>";
            pcHTML += "<b>Age:</b> " + pc.getAge() + "<br>";
            pcHTML += "<b>Location:</b> " + pc.getLocation() + "<br>";
            pcHTML += "<ul><b>Traits:</b> ";

            let traits = pc.getPersonalityTraits();
            for (let i = 0; i < traits.length; i++){
                pcHTML += "<li>" + traits[i] + "</li>";
            }
            pcHTML += "</ul>";

            pcHTML += "<ul><b>Games:</b>"
            let games = pc.getGames();
            for (let i = 0; i < games.length; i++){
                pcHTML += "<li>" + games[i] + "</li>";
            }
            pcHTML += "</ul><br>";

            //Creating "like" and "hide" buttons for the Player Card
            pcHTML += "<button><span id = \"heart\">♥</span> Like <span id = \"heart\">♥</span></button> <button><span><b>X</b></span> Hide <span><b>X</b></span></button>";

            pcHTML += "</div><br>";
            
            //Appending the Player Card to the appropriate element inside the page
            $('#player-cards').append(pcHTML);
        });
    });
});