window.addEventListener("load", function(){
    let formulario = document.getElementById("registerdata_form")
    
    let errores = [];

    //usuario
    formulario.addEventListener('submit', function(e){
        let user = document.getElementById("user")
        if(user.value == ""){
         errores.push("Debe completar usuario")
        }
     })

    //mail
    formulario.addEventListener('submit', function(e){
       let email = document.getElementById("mail")
       if(email.value == ""){
        errores.push("Debe completar el email")
       }
    })

    //nombre
    formulario.addEventListener('submit', function(e){
        let fullname = document.getElementById("fullname")
        if(fullname.value == ""){
         errores.push("Debe completar el campo  Nombre")
        }
     })

    //contraseña
    formulario.addEventListener('submit', function(e){
       let password = document.getElementById("password")
       if(password.value == ""){
          errores.push("Debe completar la contraseña")
       }else if(password.value.length < 5){
          errores.push("La contraseña es demasiado corta")
       }
    })

    //cuit/cuil
    formulario.addEventListener('submit', function(e){
        let fiscal_value = document.getElementById("fiscal_value")
        if(fiscal_value.value == ""){
         errores.push("Debe completar el campo Cuil/Cuit")
        }else if(fiscal_value.length < 11){
            errores.push("El numero de Cuit/Cuil es incorrecto")
         }
     })

    //cbu
    formulario.addEventListener('submit', function(e){
        let cbu_alias = document.getElementById("cbu_alias")
        if(cbu_alias.value == ""){
         errores.push("Debe completar el campo CBU")
        }else if(cbu_alias.length < 22){
            errores.push("El numero de CBU es incorrecto")
         }
     })
    
    if (errores.length > 0){
       e.preventDefault();
    
       let ulErrores = document.querySelector("div.errores ul");
       for(let i = 0 ; i < errores.length ; i++ ){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
       }
    }
    })
    