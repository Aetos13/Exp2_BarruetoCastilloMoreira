function CambiarMayusculas(objeto_input)
{
    
    objeto_input.value = objeto_input.value.toUpperCase();
    
}

$(function()
{
    $("#dudas").validate({
        rules: {

            dudatipo:"required",

            correo: {
                required: true,
                email: true
            },

            nombre: "required",

            mensaje: "required"
        },

        messages: {

            dudatipo: { 
                required: 'Seleccione una opción'

            },
            nombre: {
                required: 'Ingresa un nombre valido'
            },
            correo: {
                required: 'Ingresa tu correo electrónico',
                email: 'Formato de correo no válido'  
            
            } ,  
            mensaje: {
                required:'Redacte un mensaje por favor.'
            }      



        }



    });
});
//validar registro
$(function() 
{
  $("#registro").validate({
       rules: {
            nombre: "required",
     
            apellido: "required",
            correo: {
                required: true,
                email: true
            },
            contrasena: "required",
            fono: "required",
            contrasena2: {
                required: true,
                equalTo: "#contrasena"
            }   
              
        }, 
      messages: {
          nombre: {
              required: 'Ingresa un nombre valido'
          },
          apellido: {
              required: 'Ingresa un apellido valido'
          },
          correo: {
              required: 'Ingresa tu correo electrónico',
              email: 'Formato de correo no válido'
          },
          contrasena: {
              required: 'Ingresa una contraseña',
              minlength: 'Caracteres insuficientes'
          },
          fono:{
              required: 'Ingrese un número de celular',
              minlength: 'Cantidad de digitos insuficiente'
          },
        
          contrasena2: {
              required: 'Reingresa la contraseña',
              equalTo: 'Las contraseñas ingresadas no coinciden',
              minlength: 'Caracteres insuficientes'

          }
      }
  }); 
}); 


$.getJSON('https://goweather.herokuapp.com/weather/Santiago', function(data){

    console.log(data);
    $(".clima").text(data.temperature);
});


