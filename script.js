function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.element3');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Arrête d'observer une fois que l'élément est visible
        }
      });
    }, {
      threshold: 0.1 // L'élément doit être 10% visible pour que l'animation commence
    });
  
    elements.forEach(element => {
      observer.observe(element); // Observe chaque élément
    });
  });

  var Slider = function() {
    var total, $slide, $slider, sliderWidth, increment = 120;
    var on = function() {
      $slider = $('.slider');
      $slide = $('.slide');
      sliderWidth = $slider.width();
      total = $slide.length;
      position();
    }
  
    var position = function() {
      var sign, half = $('.active').index(), x = 0, z = 0, zindex, scaleX, scaleY, transformOrigin;
      var slideWidth = $slide.outerWidth(true); // Largeur actuelle d'une diapositive y compris les marges
    
      // Le calcul de l'incrément peut être ajusté en fonction de la largeur de la diapositive
      var dynamicIncrement = slideWidth * 0.5; // Exemple de calcul dynamique pour l'incrément
    
      $slide.each(function(index, element) {
        scaleX = scaleY = 1;
        transformOrigin = sliderWidth / 2;
    
        if (index < half) {
          sign = 1;
          zindex = index + 1;
          x = sliderWidth / 2 - dynamicIncrement * (half - index + 1);
          z = -dynamicIncrement * (half - index + 1);
        } else if (index > half) {
          sign = -1;
          zindex = total - index;
          x = sliderWidth / 2 + dynamicIncrement * (index - half + 1);
          z = -dynamicIncrement * (index - half + 1);
        } else {
          sign = 0;
          zindex = total;
          x = sliderWidth / 2;
          z = 1;
          scaleX = scaleY = 1.2;
          transformOrigin = 'initial';
        }
    
        $(element).css({
          'transform': 'translate3d(' + calculateX(x, sign, 100) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
          'z-index': zindex,
          'transform-origin-x': transformOrigin
        });
      });
    };
    
  
    var calculateX = function(position, sign, width) {
      switch(sign) {
        case 0: 
        case 1: return position - width / 2;
        case -1: return position - width / 2;
      }
    }
      
    var recalculateSizes = function() {
      sliderWidth = $slider.width();
      position();
    }
    
    var clickedImage = function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
      position();
    }
    
    var addEvents = function() {
      $( window ).resize(recalculateSizes);
      $(document).on('click','.slide', clickedImage);
    }
    
    return {
      init: function() {
        on();
        addEvents();
      }
    };
  }();
  
  $(function(){
    var slider = Slider.init();
  })

window.addEventListener('load', () => {
  document.html.style.overflow = 'hidden';
  window.scrollTo(0, 0);
});

window.addEventListener('popstate', () => {
  window.location.reload();
});

window.history.pushState(null, null, window.location.href);

function redirectToForm() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSePW42Lgsj0q2cHbGDUzY5p-EjD8frRu-i2zRsw9hVWOlpwZg/viewform", "_blank");
}

const element = document.querySelector('.element2');

element.addEventListener('animationend', () => {
    element.classList.remove('element2'); // Supprime la classe element2 une fois l'animation terminée
});


