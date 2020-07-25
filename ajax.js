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
       
            console.log(response.info);
            $("#register .modal-body").empty(); 
            let html = "<p style='color:black'>Félicitation "+ response.info.gameMaster.pseudo +" votre partie est crée.</p><p style='color:black'>Invitez vos proches à vous rejoindre en leur communiquant votre pin.<br> PIN: "+ response.info.pin + "</p><br><a href='' class='btn btn-dark'>Jouer</a>"; 
            $("#register .modal-body").html(html);
            
        },
        error:function(){
            alert("Une erreur s'est produite"); 
        }
    })
}); 


//join room
$("#form_join_room").submit(function(e){
    e.preventDefault();
    
    $.post({
        url: "http://127.0.0.1:3000/users/join-room", 
        cache: false,
        dataType: "json",
        ContentType: "application/json;charset=utf-8",
        data: $(this).serialize(), 
        success:function(response){
            console.log(response)
        },
        error:function(){
            alert("Une erreur s'est produite"); 
        }
    })
}); 


$('.popover-dismiss').popover({
    trigger: 'focus'
})