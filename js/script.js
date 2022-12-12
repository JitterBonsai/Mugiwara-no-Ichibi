function RandomColor(element) {
    console.log('esta sendo clicado')
    let e = element
    let cor = "#"+Math.floor(Math.random()*16777215).toString(16);

    e.style.backgroundColor =  cor
}