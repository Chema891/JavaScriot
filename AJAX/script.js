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

function asociaClick(paramID) {
    $(paramID + ' .saludaBtn').click(function () {
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

        asociaClick('#amigosSpoty');
    })
});