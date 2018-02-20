//var movies = []
//$.ajax({
//    url:"http://www.moviesdb.brm.us/api/movies",
//    crossdomain: true,
//    dataType:"jsonp"
//  }).done(function(result){
//        movies = result.content.movies;
//        console.log(movies);
//
//        if(!movies.length){
//            console.log("pas de film trouvé");;
//        }
////            $.each(movies, function(index,value){
////
////                let $movie =( `
////                    <div class="movie-item">
////
////                        <div class="titre"><h2>${movies.Title}</h2></div>
////                        <div class="titre"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"/></div>
////                        <div class="titre">${movies.Plot}</div>
////
////                    </div>
////
////                `);
//                $('#conteneur').append($movie);
//               });
//     }).fail(function(){
//                console.log("connnection non reussie")
//    });

var films= [];

$.ajax({
    url:"http://moviesdb.brm.us/api/movies",
    crossdomain:true,
    dataType:"jsonp"

}).done(function(response){
    films=response.content.movies;
    if(!films.length){
    console.log("no surch have been found");
    }

//console.log(films);
//readFilm();
var i = 0;

for (var index = 0, size = films.length ; index<size+1 ; index++){

                const movie = films[index+i];
                let $movie = `
                    <div class="row">
                    <div class="movie-item col-xs-3  ">
                        <div class="titre"><h2>${movie.title}</h2></div>
                        <div class="cover"><img src="${movie.cover_small}" /></div>
                        <div class ="desc">${movie.description}</div>
                        <div class ="btn"><input type = "button"  value = "voir le trailer"/></div>
                    </div>
                    </div>`
                ;

                //index++;

                $('#conteneur').append($movie);}
                ;
                }

}).fail(function(){
console.log(" an error has occured ...")
});



//$(document).ready(function(){
//$('.films').slick({
//  infinite: true,
//  slidesToShow: 3,
//  slidesToScroll: 3





