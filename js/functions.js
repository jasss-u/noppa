const kuvat = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
];

function arvoKuva () {
    const satunnaisIndeksi = Math.floor(Math.random() * kuvat.length);
    return kuvat[satunnaisIndeksi]
}

window.onload = function() {
    const imgElement = document.getElementById('satunnainenKuva');

    imgElement.src = arvoKuva();

    imgElement.addEventListener('click', function(){
        imgElement.src = arvoKuva();
    })
}