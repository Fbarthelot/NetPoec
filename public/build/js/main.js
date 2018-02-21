(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/*var mysql = require('mysql');
var net = require('net');

var con= mysql.createConnection({

    host:'172.17.0.2',
    user:'root',
    password:'poec',
    database:'dbProfile'
});


con.connect(function(err){
    if(err)throw err;
    console.log("connected!")


  let sqlquery="SELECT * FROM Profil";

    con.query(sqlquery, function(err,result,fields){
        if(err)throw err;
        console.log("result"+result)
    });

});*/
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

var films = [];

$.ajax({
    url: "http://moviesdb.brm.us/api/movies",
    crossdomain: true,
    dataType: "jsonp"

}).done(function (response) {
    films = response.content.movies;
    if (!films.length) {
        console.log("no surch have been found");
    }

    for (var index = 0, size = films.length; index < size + 1; index = index + 3) {

        for (var i = 0; i < 3; i++) {
            var movie = films[index + i];
            var $movie = "\n                            <div class=\"col-xs-12 col-md-4\">\n                            <div class=\"movie-item \">\n                                <div class=\"titre\"><h2 class=\"center-block\">" + movie.title + "</h2></div>\n                                <div class=\"cover\"><img src=\"" + movie.cover_small + "\" class=\"center-block\" /></div>\n                                <div class =\"desc\">" + movie.description + "</div>\n                                <div class =\"btn\"><input type = \"button\"  value = \"voir le trailer\"/></div>\n                            </div>\n                            </div>";

            $('#conteneur').append($movie);
        };
    };
}).fail(function () {
    console.log(" an error has occured ...");
});

},{}],3:[function(require,module,exports){
"use strict";

},{}],4:[function(require,module,exports){
/*
var databaseConfig = module.exports = function(){};

 module.exports = {

    mySQLConfig: {
       host: '172.17.0.2',
       username: 'root',
       password: 'poec',
       database: 'bdProfile',
       port: 3306,
       timeout: 100000
    },
*/
/*
    sshTunnelConfig: {
       username: 'poec2',
       password: 'poec',
       host: '10.110.10.41',
       port: 22,
       //localPort: 3306, //4370
       //port: 3333,
       //localPort: 4370,
       dstPort: 3306,
       srcHost: '172.17.0.2',
       dstHost: '172.17.0.2',
       localHost: 'localhost'
    }*/ /*
        };*/
"use strict";

},{}],5:[function(require,module,exports){
"use strict";

},{}]},{},[1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvY29ubmV4aW9uLmpzIiwicHVibGljL2pzL2Nvbm5leGlvblVybC5qcyIsInB1YmxpYy9qcy9maWxtLmpzIiwicHVibGljL2pzL215U1FMQ29uZmlnLmpzIiwicHVibGljL2pzL3Byb2ZpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxJQUFJLFFBQU8sRUFBWDs7QUFFQSxFQUFFLElBQUYsQ0FBTztBQUNILFNBQUksbUNBREQ7QUFFSCxpQkFBWSxJQUZUO0FBR0gsY0FBUzs7QUFITixDQUFQLEVBS0csSUFMSCxDQUtRLFVBQVMsUUFBVCxFQUFrQjtBQUN0QixZQUFNLFNBQVMsT0FBVCxDQUFpQixNQUF2QjtBQUNBLFFBQUcsQ0FBQyxNQUFNLE1BQVYsRUFBaUI7QUFDakIsZ0JBQVEsR0FBUixDQUFZLDBCQUFaO0FBQ0M7O0FBR0QsU0FBSyxJQUFJLFFBQVEsQ0FBWixFQUFlLE9BQU8sTUFBTSxNQUFqQyxFQUEwQyxRQUFNLE9BQUssQ0FBckQsRUFBeUQsUUFBTSxRQUFNLENBQXJFLEVBQXVFOztBQUUzRCxhQUFJLElBQUksSUFBRSxDQUFWLEVBQVksSUFBRSxDQUFkLEVBQWdCLEdBQWhCLEVBQW9CO0FBQ2hCLGdCQUFNLFFBQVEsTUFBTSxRQUFNLENBQVosQ0FBZDtBQUNBLGdCQUFJLHlOQUdzRCxNQUFNLEtBSDVELHFGQUl1QyxNQUFNLFdBSjdDLGlHQUs2QixNQUFNLFdBTG5DLHNNQUFKOztBQVVBLGNBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixNQUF2QjtBQUNIO0FBRVo7QUFFSixDQS9CRCxFQStCRyxJQS9CSCxDQStCUSxZQUFVO0FBQ2xCLFlBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0MsQ0FqQ0Q7OztBQ0hBO0FBQ0E7O0FDREE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7UUFhTzs7Ozs7QUMzQlA7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLyp2YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xudmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuXG52YXIgY29uPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcblxuICAgIGhvc3Q6JzE3Mi4xNy4wLjInLFxuICAgIHVzZXI6J3Jvb3QnLFxuICAgIHBhc3N3b3JkOidwb2VjJyxcbiAgICBkYXRhYmFzZTonZGJQcm9maWxlJ1xufSk7XG5cblxuY29uLmNvbm5lY3QoZnVuY3Rpb24oZXJyKXtcbiAgICBpZihlcnIpdGhyb3cgZXJyO1xuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIVwiKVxuXG5cbiAgbGV0IHNxbHF1ZXJ5PVwiU0VMRUNUICogRlJPTSBQcm9maWxcIjtcblxuICAgIGNvbi5xdWVyeShzcWxxdWVyeSwgZnVuY3Rpb24oZXJyLHJlc3VsdCxmaWVsZHMpe1xuICAgICAgICBpZihlcnIpdGhyb3cgZXJyO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiK3Jlc3VsdClcbiAgICB9KTtcblxufSk7Ki9cblxuIiwiXG52YXIgZmlsbXM9IFtdO1xuXG4kLmFqYXgoe1xuICAgIHVybDpcImh0dHA6Ly9tb3ZpZXNkYi5icm0udXMvYXBpL21vdmllc1wiLFxuICAgIGNyb3NzZG9tYWluOnRydWUsXG4gICAgZGF0YVR5cGU6XCJqc29ucFwiXG5cbn0pLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgIGZpbG1zPXJlc3BvbnNlLmNvbnRlbnQubW92aWVzO1xuICAgIGlmKCFmaWxtcy5sZW5ndGgpe1xuICAgIGNvbnNvbGUubG9nKFwibm8gc3VyY2ggaGF2ZSBiZWVuIGZvdW5kXCIpO1xuICAgIH1cblxuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCBzaXplID0gZmlsbXMubGVuZ3RoIDsgaW5kZXg8c2l6ZSsxIDsgaW5kZXg9aW5kZXgrMyl7XG5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPDM7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aWUgPSBmaWxtc1tpbmRleCtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0ICRtb3ZpZSA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWl0ZW0gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRyZVwiPjxoMiBjbGFzcz1cImNlbnRlci1ibG9ja1wiPiR7bW92aWUudGl0bGV9PC9oMj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdmVyXCI+PGltZyBzcmM9XCIke21vdmllLmNvdmVyX3NtYWxsfVwiIGNsYXNzPVwiY2VudGVyLWJsb2NrXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJkZXNjXCI+JHttb3ZpZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJidG5cIj48aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgIHZhbHVlID0gXCJ2b2lyIGxlIHRyYWlsZXJcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCA7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI2NvbnRlbmV1cicpLmFwcGVuZCgkbW92aWUpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICB9O1xuXG59KS5mYWlsKGZ1bmN0aW9uKCl7XG5jb25zb2xlLmxvZyhcIiBhbiBlcnJvciBoYXMgb2NjdXJlZCAuLi5cIilcbn0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKbWFXeHRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iLCIvKlxudmFyIGRhdGFiYXNlQ29uZmlnID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe307XG5cbiBtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIG15U1FMQ29uZmlnOiB7XG4gICAgICAgaG9zdDogJzE3Mi4xNy4wLjInLFxuICAgICAgIHVzZXJuYW1lOiAncm9vdCcsXG4gICAgICAgcGFzc3dvcmQ6ICdwb2VjJyxcbiAgICAgICBkYXRhYmFzZTogJ2JkUHJvZmlsZScsXG4gICAgICAgcG9ydDogMzMwNixcbiAgICAgICB0aW1lb3V0OiAxMDAwMDBcbiAgICB9LFxuKi9cbi8qXG4gICAgc3NoVHVubmVsQ29uZmlnOiB7XG4gICAgICAgdXNlcm5hbWU6ICdwb2VjMicsXG4gICAgICAgcGFzc3dvcmQ6ICdwb2VjJyxcbiAgICAgICBob3N0OiAnMTAuMTEwLjEwLjQxJyxcbiAgICAgICBwb3J0OiAyMixcbiAgICAgICAvL2xvY2FsUG9ydDogMzMwNiwgLy80MzcwXG4gICAgICAgLy9wb3J0OiAzMzMzLFxuICAgICAgIC8vbG9jYWxQb3J0OiA0MzcwLFxuICAgICAgIGRzdFBvcnQ6IDMzMDYsXG4gICAgICAgc3JjSG9zdDogJzE3Mi4xNy4wLjInLFxuICAgICAgIGRzdEhvc3Q6ICcxNzIuMTcuMC4yJyxcbiAgICAgICBsb2NhbEhvc3Q6ICdsb2NhbGhvc3QnXG4gICAgfSovLypcblxuIH07Ki9cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSndjbTltYVd3dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5Il19
