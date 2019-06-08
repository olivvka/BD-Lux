$(document)
  .ready(function() {


    //navigation
    $('#menu-icon')
      .on('click', function() {
        $('.navbar')
          .toggleClass('expand');
        return false;
      });
    //galeria
    $('#gallery')
      .on('click', function() {
        $(this)
          .next()
          .magnificPopup('open');
      });
    $('.gallery')
      .each(function() {
        $(this)
          .magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
              enabled: true,
              tCounter: '<span class="mfp-counter">Zdjęcie %curr% z %total%</span>'

            }
          });
      });


    //slider
    var i = 0;

    $(document)
      .on('click', '#slider .slider-next', function() {
        var previous = i + 11;
        if (i === 50) {
          $('#slider > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:0%;-webkit-transition:left 1s;transition:left 1s;');
          i = 0;
        } else {
          $('#slider > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-' + previous + '.1%;-webkit-transition:left 1s;transition:left 1s;');
          i = previous;
        }
      });

    $(document)
      .on('click', ' #slider .slider-previous', function() {
        var next = i - 11;
        if (i === 0) {
          $('#slider > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-70%;-webkit-transition:left 1s;transition:left 1s;');
          i = 70;
        } else {
          $('#slider > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-' + next + '.1%;-webkit-transition:left 1s;transition:left 1s;');
          i = next;
        }
      });





    var i = 0;

    $(document)
      .on('click', '#slider2 .slider-next', function() {
        var next = i + 11;
        if (i === 50) {
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:0%;-webkit-transition:left 1s;transition:left 1s;');
          i = 0;
        } else {
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-' + next + '.1%;-webkit-transition:left 1s;transition:left 1s;');
          i = next;
        }
      });

    $(document)
      .on('click', ' #slider2 .slider-previous', function() {
        var previous = i - 11;
        if (i === 0) {
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-70%;-webkit-transition:left 1s;transition:left 1s;');
          i = 70;
        } else {
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .removeAttr('style');
          $('#slider2 > div.slider-wrapper > div > ul > li')
            .attr('style', 'left:-' + previous + '.1%;-webkit-transition:left 1s;transition:left 1s;');
          i = previous;
        }
      });




  });