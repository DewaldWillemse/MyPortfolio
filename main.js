function sendMail(params){
    var tempParams ={
        from_Name: document.getElementById('fromName').Value,
        from_email: document.getElementById('fromEmail').Value,
        message: document.getElementById('msg').Value,};


        email.js.send('service_7n116sg','template_25di067',tempParams)
        .then(function(res){
            console.log("sucess" , res.status);
        })
    }
