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
    var container = document.querySelector('.stars');
    container.appendChild(star);
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
    onplayerror: function() {
        audio.once('unlock', function() {
          audio.play();
        });
      }
  });

    window.onload = function() {
        setStars();
        var logo = document.querySelector('.logo');
        var opening = document.querySelector('.opening');
        var content = document.querySelector('.content');
        var button = document.querySelector('.firstplay');
        var replay = document.querySelector('.replay');
        var question = document.querySelector('.question');

        logo.addEventListener('animationstart', (event) => {
            audio.play();
        });

        var callback = (event) => {
            replay.style.display = 'none';
            audio.stop();
            logo.classList.remove('active');
            opening.classList.remove('active');
            content.classList.remove('active');
            
            setTimeout(() => {
                logo.classList.add('active');
                opening.classList.add('active');
                content.classList.add('active');
            }, 100);

            question.style.display = 'none';
            setTimeout(() => {
                replay.style.display = 'block';
            }, 85000);
        }

        button.addEventListener('click', callback);
        replay.addEventListener('click', callback);
    }
    window.onresize = function() {
        setStars();
    }