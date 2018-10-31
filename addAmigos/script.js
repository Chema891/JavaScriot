function generarhtml(paramID, listaAmigos) {
    $(paramID).html(function () {
        let htmlAmigos = '';
        listaAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>
                <div>${unAmigo.name}</div>
                <div>${unAmigo.email}</div>
                <div><button class="saludaBtn" data-value="${unAmigo.name}">Saludar</button></div>
                </li>`;
        });

        return htmlAmigos;
    });
}

function asociaClick(paramSelector) {
    $(paramSelector + ' .saludaBtn').click(function () {
        alert('Blotel ' + $(this).attr('data-value') + "!!  Aloja");
    })
}

//especificidades
$('#cargarbtnFace').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b19310000e809474d47",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectar  amigosFromServer en el html
        generarhtml('#amigosFace', amigosFromServer);

        asociaClick('#amigosFace');
    })
});


$('#cargarbtnSpoty').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b19310000e809474d47",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectar  amigosFromServer en el html
        generarhtml('#amigosSpoty', amigosFromServer);

        asociaClick('#amigosSpoty .saludaBtn');
    })
});


function addAmigoHtml(paramID, unAmigo) {
    let htmlAmigos = `<li>
    <div>${unAmigo.name}</div>
    <div>${unAmigo.email}</div>
    <div><button class="saludaBtn" data-value="${unAmigo.name}">Saludar</button></div>
    </li>`;

    $(paramElemid).append(htmlAmigos);
    asociaClick('#amigosface .saludaBtn');

}

$('#addBtn').click(function(evnt){
    evnt.preventDefault();

    document.querySelectorAll('.error').jorEach(elem=> {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('addForm').checkValidity();

})

// document.getElementById('accederbtn').onclick = (function (evnt) {
//     // console.log(evnt);
//     evnt.preventDefault();

//     document.querySelectorAll('.error').forEach(elem => {
//         elem.classList.add('esconder');
//     });

    let formValid = document.getElementById('loginForm').checkValidity();

    if (formValid) {
        let newAmigo = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value
        };

        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            // url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false
            data: newAmigo
        }).done(function (data) {
            console.log(data);
            if (data.result) {
               addAmigoHtml('#amigosface', newAmigo);

            } else {
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');
            }
        });

    } else {
        
        if (!document.getElementById('nombrebro').checkValidity()) {document.getElementById('errornombrebro').classList.remove('esconder');
        }

        if (!document.getElementById('email').checkValidity()) {
            document.getElementById('erroremail').classList.remove('esconder');
        }
    }
});

