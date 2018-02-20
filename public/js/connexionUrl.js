
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


    for (var index = 0, size = films.length ; index<size+1 ; index=index+3){

                for(var i=0;i<3;i++){
                    const movie = films[index+i];
                    let $movie = `
                            <div class="col-xs-12 col-md-4">
                            <div class="movie-item ">
                                <div class="titre"><h2 class="center-block">${movie.title}</h2></div>
                                <div class="cover"><img src="${movie.cover_small}" class="center-block" /></div>
                                <div class ="desc">${movie.description}</div>
                                <div class ="btn"><input type = "button"  value = "voir le trailer"/></div>
                            </div>
                            </div>` ;

                    $('#conteneur').append($movie);
                };

    };

}).fail(function(){
console.log(" an error has occured ...")
});

