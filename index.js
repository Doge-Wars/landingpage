var setStars = function(){
    var stars = document.querySelectorAll('.star');
    Array.prototype.forEach.call( stars, function( node ) {
        node.parentNode.removeChild( node );
    });

    var numStars = 250;

    // For every star we want to display
    for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");  
    star.className = "star";
    var xy = getRandomPosition();
        star.style.top = xy[0] + 'px';
        star.style.left = xy[1] + 'px';
    document.body.append(star);
    }

    // Gets random x, y values based on the size of the container
    function getRandomPosition() {  
    var y = window.innerWidth;
    var x = window.innerHeight;
        var randomX = Math.floor(Math.random()*x);
        var randomY = Math.floor(Math.random()*y);
        return [randomX,randomY];
    }
}

var audio = new Howl({
    src: ['./theme.m4a'],
    preload: true,
  });

    window.onload = function() {
        setStars();
        var logo = document.querySelector('.logo');
        // var audio = document.querySelector('.audio');
        // var audio = new Audio('./theme.m4a');

        logo.addEventListener('animationstart', (event) => {
            audio.play();
        });
    }
    window.onresize = function() {
        setStars();
    }