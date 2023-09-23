window.addEventListener("load", function(){
let formulario = document.querySelectorAll("form.input-group")

formulario.addEventListener('submit', function(e){
   let email = document.querySelector("input.form-control")
   if(email.value == ""){
    alert("Debe completar el email")
   }
})

formulario.addEventListener('submit', function(e){
   let password = document.querySelector("input.form-control")
   if(password.value == ""){
    alert("Debe completar la contraseña")
   }else if(password.value.length < 5){
      alert("La contraseña es demasiado corta")
   }
})
})
