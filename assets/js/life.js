(function () {
  var frames = document.querySelectorAll('.photo-frame');
  var scroll = document.querySelector('.photo-scroll');

  if (!frames.length) return;

  frames.forEach(function (frame) {
    frame.addEventListener('click', function (event) {
      event.stopPropagation();

      var wasExpanded = frame.classList.contains('is-expanded');

      frames.forEach(function (item) {
        item.classList.remove('is-expanded');
        item.setAttribute('aria-label', 'Enlarge photo of Toto');
      });

      if (scroll) {
        scroll.classList.remove('has-expanded');
      }

      if (!wasExpanded) {
        frame.classList.add('is-expanded');
        frame.setAttribute('aria-label', 'Shrink photo of Toto');

        if (scroll) {
          scroll.classList.add('has-expanded');
        }

        requestAnimationFrame(function () {
          frame.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        });
      }
    });
  });
})();
