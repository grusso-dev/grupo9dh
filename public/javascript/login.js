window.addEventListener("load", function(){
let formulario = document.getElementById("login_form")

let errores = [];

formulario.addEventListener('submit', function(e){
   let email = document.getElementById("mail")
   if(email.value == ""){
    errores.push("Debe completar el email")
   }
})

formulario.addEventListener('submit', function(e){
   let password = document.getElementById("password")
   if(password.value == ""){
      errores.push("Debe completar la contraseña")
   }else if(password.value.length < 5){
      errores.push("La contraseña es demasiado corta")
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
