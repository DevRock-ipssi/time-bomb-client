if(sessionStorage.getItem('room_gameMaster') ){
    let info =  sessionStorage.getItem('room');
    let room = JSON.parse(info);
   $.get({
        url: "http://127.0.0.1:3000/room/"+room.pin+"/"+ sessionStorage.getItem('user_id'), 
        headers: {"authorization": room.token }, //token
        cache: false,
        dataType: "json",
        ContentType: "application/json;charset=utf-8",
        success:function(response){
            $("#pin").text("Pin: " + response.room.pin);
            $("#player_name").text("Pseudo: " + response.user.pseudo);
            $("#room_number_players").text("Nb. joueurs : " +response.room.numberOfPlayers); 
            $("#room_number_rounds").text("Tour restant : " +response.room.numberOfRounds);   
        },
        error:function(erreur){
            /*
            $("#erreur .modal-body").html("<p style='color:black;'>"+ erreur.responseJSON.message +"</p>"); 
            $("#erreur").modal("show"); 
            $("#close").on("click" , ()=>{
                window.location="index.html";
                sessionStorage.clear()
            })*/
            console.log(erreur)
        }
    })
}



if(sessionStorage.getItem('room') ){
    let info =  sessionStorage.getItem('room');
    let room = JSON.parse(info);

   $.get({
        url: "http://127.0.0.1:3000/room/"+room.userData.pin+"/"+ sessionStorage.getItem('user_id'), 
        headers: {"authorization": room.token }, //token
        cache: false,
        dataType: "json",
        ContentType: "application/json;charset=utf-8",
        success:function(response){
            $("#pin").text("Pin: " + response.room.pin);
            $("#player_name").text("Pseudo: " + response.user.pseudo);
            $("#room_number_players").text("Nb. joueurs : " +response.room.numberOfPlayers); 
            $("#room_number_rounds").text("Tour restant : " +response.room.numberOfRounds);   
            
        },
        error:function(erreur){
          
            $("#erreur .modal-body").html("<p style='color:black;'>"+ erreur.responseJSON.message +"</p>"); 
            $("#erreur").modal("show"); 
            $("#close").on("click" , ()=>{
                window.location="index.html";
                sessionStorage.clear()
            })
           
        }
    })
}