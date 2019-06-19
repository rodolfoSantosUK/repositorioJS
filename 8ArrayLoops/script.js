var videoGames = ['Switch','PS4','XBOX', '3DS'];

var ultimoItem = videoGames.pop();


for (var item = 0 ; item < videoGames.length ; item++) {
    console.log(videoGames[item]);

    if(videoGames[item] === 'PS4') {
      break;
    }
}

//ArrayLike

videoGames.forEach(function(vg){
  console.log(vg);
});  

var frutas = ['Banana','Pera','Maçã','Abacaxi','Uva'];

frutas.forEach( function(fruta, index, frutas) {
    frutas.pop();

console.log(fruta, index, frutas);
} ) ;