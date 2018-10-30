console.log($('#holabtn').html());

//$: Idempotente

$('#holabtn').click(function () {
    alert("Hola!");
});


$('h1').html('hola').click(function () {
    alert('Este es el título');
}).html('Mi pana');

let amigos = [
    { name: 'Manolo', email: 'm@m.es' },
    { name: 'Sara', email: 's@s.es' },
    { name: 'Dani', email: 'd@d.es' },
    { name: 'Klara', email: 'k@k.es' },
];

$('#amigos').html(function () {
    let htmlAmigos = '';
    amigos.forEach(unAmigo => {
        htmlAmigos += `<li>
        <div>${unAmigo.name}</div>
        <div>${unAmigo.email}</div>
        <div><button class="saludaBtn" data-value="${unAmigo.name}">Saludar</button></div>
        </li>`;
    });

    return htmlAmigos;
});


$('.saludaBtn').click(function(){
    alert('Blotel ' + $(this).attr('data-value')+ "!!  Aloja");
})


$('#holabtn').click(function () {
   $('#amigos').toggle()
});