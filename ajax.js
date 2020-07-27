//init room
$("#form_init_room").submit(function(e){
    
    e.preventDefault();
    
    $("#form_init_room_btn").empty(); 
    $('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...').appendTo("#form_init_room_btn")

    $.post({
        url: "http://127.0.0.1:3000/users/init-room", 
        cache: false,
        dataType: "json",
        ContentType: "application/json;charset=utf-8",
        data: $(this).serialize(), 
        success:function(response){
            
            $("#register .modal-body").empty(); 
            let html = "<p style='color:black'>Félicitation "+ response.info.gameMaster.pseudo +" votre partie est crée.</p><p style='color:black'>Invitez vos proches à vous rejoindre en leur communiquant votre pin.<br> PIN: "+ response.info.pin + "</p><br><a href='room.html' class='btn btn-dark'>Accédez à la room</a>"; 
            $("#register .modal-body").html(html);
            $("#register_btn_close").prop("disabled" , true);
            sessionStorage.setItem('room_gameMaster', JSON.stringify(response));  
            sessionStorage.setItem('user_id', response.info.gameMaster._id);  
            
        },
        error:function(){
            alert("Une erreur s'est produite"); 
        }
    })
}); 


//join room
$("#form_join_room").submit(function(e){
    e.preventDefault();
    $("#form_join_room_btn").empty(); 
    $('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...').appendTo("#form_join_room_btn")

    $.post({
        url: "http://127.0.0.1:3000/users/join-room", 
        cache: false,
        dataType: "json",
        ContentType: "application/json;charset=utf-8",
        data: $(this).serialize(), 
        success:function(response){

            if(response == "Le pin entré est invalide !"){
                $("#start .modal-body").empty(); 
                let html = "<p style='color:red'>"+ response +"</p>"; 
                $("#start .modal-body").html(html);
            }else{
                   
                $("#start .modal-body").empty(); 
                let html = "<p style='color:black'>Félicitation "+response.userData.pseudo + " " + response.message +"</p><p style='color:black'>Invitez d'autre personne à vous rejoindre en leur communiquant le pin.<br> PIN : " + response.userData.pin + "</p><br><a href='room.html' class='btn btn-dark'>Accédez à la room</a>"; 
                $("#start .modal-body").html(html);
                sessionStorage.setItem('room', JSON.stringify(response));  
                sessionStorage.setItem('user_id', response.userJoining._id); 
                $("#start_btn_close").prop("disabled" , true);

            }
         
        },
        error:function(){
            alert("Une erreur s'est produite"); 
        }
    })
}); 


$('.popover-dismiss').popover({ trigger: 'focus'})

