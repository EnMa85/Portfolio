$(document).ready(function(){
    // Ottieni l'URL della pagina corrente
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    console.log("URL corrente:", currentPage);
  // Cicla attraverso tutti i link nel menu
    $('#menu a').each(function(){
        // Estrai solo il nome del file dal percorso del link
        var linkPath = $(this).attr('href');
        var linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1);
        
        // Se il nome del file del link corrisponde al nome del file della pagina corrente
        if (linkPage === currentPage) {
        // Aggiungi la classe 'active' al link corrente
        $(this).addClass('active');
        }
    });
});


window.addEventListener('DOMContentLoaded', function() {
  const pictures = document.querySelectorAll('.carousel picture');
  let index = 0;

  setInterval(function() {
    pictures[index].classList.remove('active');
    pictures[index].style.animation = 'hideToLeft 0.5s forwards';
    index = (index + 1) % pictures.length;
    pictures[index].classList.add('active');
    pictures[index].style.animation = 'showFromRight 0.5s forwards';
  }, 5000);
});