window.addEventListener('load', function() {
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(e) {
      let errores = [];
      e.preventDefault();
      let campoArtista = document.getElementById('artista');
      if (campoArtista.value == '') {
        errores.push('El campo de Artista debe estar completo');
      }

      let campoTitle = document.getElementById('title');
      if (campoTitle.value == '') {
        errores.push('El campo de título debe estar completo');
      }

      let campoDate = document.getElementById('date');
      if (campoDate.value == '') {
        errores.push('El campo de fecha debe estar completo');
      }

      let campoDireccion = document.getElementById('direccion'); 
      if (campoDireccion.value == '') {
        errores.push('El campo de dirección debe estar completo');
      }

      let campoProvincia = document.getElementById('provincia');
      if (campoProvincia.value == 'Elegi la Ciudad') {
        errores.push('Debes seleccionar una provincia');
      }

      let campoCiudad = document.getElementById('ciudad');
      if (campoCiudad.value == '') {
        errores.push('El campo de Ciudad debe estar completo');
      }

      let campoImagen = document.querySelector('.cargarImagen input[type="file"]');
      if (campoImagen.value == '') {
        errores.push('Debe cargar una imagen');
      }

      let ulErrores = document.querySelector('div.errores ul');
      ulErrores.innerHTML = ''; // Limpiar mensajes de error anteriores
      
      if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
          ulErrores.innerHTML += '<li>' + errores[i] + '</li>';
        }
      }else{
        formulario.submit();
      }
    });
  });