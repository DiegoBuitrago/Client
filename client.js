getList = function(){
    console.log("Get list")
    fetch('http://localhost:3000/show')
    .then(response => response.json())
    .then(
        data => {
            var panel = document.createElement("div");
            data.list.forEach(element => {
                var card = document.createElement("h1");
                card.innerText = element.names;
                panel.appendChild(card)
            });
            var body = document.getElementById("main");
            body.appendChild(panel);
        }
    );
}


personas = [];

postList = function(){
    console.log('PostList')
    
    const form = document.forms['formulario']

    const persona = {
        "name" : form.elements[0].value,
        "lastname" : form.elements[1].value,
        "adress" :form.elements[2].value,
        "email" :form.elements[3].value,
        "phone" :form.elements[4].value
    }
    
    personas.push(persona)

    fetch('http://localhost:3000/persona', {
            method: 'POST',
            body: JSON.stringify({
                personas
            })
        })

    

/*
        fetch('http://localhost:3000/persona', {
            method: 'POST',
            body: JSON.stringify({
                name: persona.name,
                lastname: persona.lastname,
                adress: persona.adress,
                email: persona.email,
                phone: persona.phone
            })
        })
    */
    //var name = document.getElementById('nombre');
    //var lastname = document.getElementById('apellido')
    //var adress = document.getElementById('direccion')
    //var email = document.getElementById('correo')
    //var phone = document.getElementById('telefono')

    console.log('Esto es un mensaje')
    console.log(personas)
    //console.log(name + '----------------' + lastname + '-')
}

$(document).ready(function() {
    $( "#buttonJquery" ).click(function() {
        $.ajax({
            url: "http://127.0.0.1:3000/show",
            success: function( result ) {
                JSON.parse(result).list.forEach(element => {
                    $("body").append('<h1>' + element.name + '</h1>');
                });
            }
        });
    });
});