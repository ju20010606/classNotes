console.log('app.js loaded for palette picker');

$(() => {
// /Cache DOM ELEMENTS

const $colorPalette = $('#color-palette');
const $myPalette = $('#my-palette');
const $generate = $('#generate');

const makePalette = () => {
/*reset colors every time */
    $colorPalette.empty()

    for(let i = 0; i < 150; i++) {
        const $div = $('<div>').addClass('square');
        $div.css('background-color', randomColor());
        /* add event listener after element had been created*/
        $div.on('click', addColor);

        $colorPalette.append($div);

    }
}

const addColor = (event) => {
   const color = $(event.target).css('background-color');

   const $div = $('<div>').addClass('square').css('background-color',color);

   $myPalette.append($div);
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
/*Make Palette*/
$generate.on('click', makePalette)



})