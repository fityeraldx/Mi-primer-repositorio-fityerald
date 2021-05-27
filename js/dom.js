// function agregar_mascota_1() {
//     let col = document.createElement('div');
//     col.setAttribute('class', 'col-6 col-xl-3 col-lg-4 col-sm-6 mb-2');
//
//     let card = document.createElement('div');
//     card.setAttribute('class', 'card');
//     let img = document.createElement('img');
//     img.setAttribute('class', 'card-img-top');
//     img.src = '../images/bbs1.jpg';
//
//     card.appendChild(img);
//     col.appendChild(card);
//
//     let fila = document.getElementById('fila');
//     fila.appendChild(col);
// }

function agregar_mascota() {
    let imagenes = ['bbs3.jpg', 'bbs4.jpg', 'bbs5.JPG', 'bbs6.jpg', 'bbs7.jpg', 'bbs8.jpg'];

    let textos = ['Some quick example text to build on the card title', 'Otros textos cualquiera'];
    let posicion = Math.floor(Math.random() * imagenes.length);
    let posicion_texto = Math.floor(Math.random() * textos.length);

    let ruta_imagen = '../images/' + imagenes[posicion];
    let texto = textos[posicion_texto];

    let fila_animales = document.querySelector('.animales');
    let col_animal = fila_animales.querySelector('.col-6');
    let nueva_col = col_animal.cloneNode(true);

    let imagen = nueva_col.querySelector('img');
    imagen.src = ruta_imagen;

    let elem_texto = nueva_col.querySelector('.card-text');
    elem_texto.innerText = texto;

    fila_animales.appendChild(nueva_col);
}

$('#buscador').keyup(function () {
    let busqueda = $('#buscador').val();
    let columnas_a_filtrar = document.querySelectorAll('.animales .col-6');
    $.each(columnas_a_filtrar, function (i, columna) {
        let texto_col = columna.querySelector('.card-text').innerText;
        if(texto_col.toLowerCase().includes(busqueda.toLowerCase())){
            $(columna).show();
        }else{
            $(columna).hide();
        }
    });
});