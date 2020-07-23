//init room
$("#form_init_room").submit(function(e){
    e.preventDefault();
    
    $.post({
        url: "http://127.0.0.1:3000/users/init-room", 
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