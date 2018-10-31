let amigos = [
    { name: 'Manolo', email: 'm@m.es' },
    { name: 'Sara', email: 's@s.es' },
    { name: 'Dani', email: 'd@d.es' },
    { name: 'Klara', email: 'k@k.es' },
];

window.localStorage.setItem('palabra_almacenada','valor de la palabra');
window.localStorage.setItem('lista_amigos',JSON.stringify(amigos));
