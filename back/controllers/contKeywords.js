
const keywords = [
    {"keys": ['hola','cola', 'nariz']},
    {"keys": ['hola','cola', 'barco']},
    {"keys": ['hola','bola', 'nariz']},
];
var palabrasEncontradas = [];
var data = [];
const contPalabras = ()=>{
    keywords.map( (obj)=>{
        obj.keys.map( palabras => {
            if( palabrasEncontradas.includes(palabras)){
                data.map( dato =>{
                    if(dato.palabra == palabras){
                        dato.frecuencia = dato.frecuencia +1;
                    }
                });
            }
            else{
                palabrasEncontradas.push(palabras);
                data.push({ "palabra": palabras, "frecuencia":1} );
            }
        })
    });
    console.log(palabrasEncontradas);
    console.log(data);
}

contPalabras();
module.exports = contPalabras;