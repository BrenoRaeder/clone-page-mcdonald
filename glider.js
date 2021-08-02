window.addEventListener('pageshow', function(){
if(window.matchMedia("(min-width: 770px)").matches)
    {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  }
else
    {
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
    }
})

window.addEventListener('load', function(){
  if(window.matchMedia("(min-width: 770px)").matches)
      {
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
    }
  else
      {
        new Glider(document.querySelector('.glider'), {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          dots: '.dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          }
        });
      }
  })

  


