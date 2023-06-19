document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.video-slideshow');
    video.volume = 0.1;
    var fraseElement = document.createElement('p');
    fraseElement.textContent = 'Delicie-se com nossas pizzas artesanais, feitas com paixão e ingredientes frescos. Uma fatia de sabor que irá encantar seu paladar e alimentar sua alma';
    fraseElement.classList.add('frase');
    fraseElement.classList.add('fade-in');
    fraseElement.classList.add('slide-in');
  
    video.addEventListener('ended', function() {
      video.pause();
      video.parentNode.insertBefore(fraseElement, video.nextSibling);
      document.querySelector('.imagem_fundo_frase').classList.add('imagem_fundo_frase-visible');
  
      setTimeout(function() {
        video.currentTime = 0;
        video.play();
        fraseElement.remove();
        document.querySelector('.imagem_fundo_frase').classList.remove('imagem_fundo_frase-visible');
      }, 11000);
    });
  });
  