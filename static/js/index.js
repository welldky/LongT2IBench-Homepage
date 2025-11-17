window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

  // Initialize all carousels
  bulmaCarousel.attach('#carousel-fine-grained', {
    slidesToScroll: 1,
    slidesToShow: 1, // Show 1 image at a time
    infinite: true,
    autoplay: true,
    loop: true,
  });
  bulmaCarousel.attach('#carousel-qualitative', {
    slidesToScroll: 1,
    slidesToShow: 1, // Show 1 image at a time
    infinite: true,
    autoplay: true,
    loop: true,
  });

  // Check if there are any navbar burgers
});

document.addEventListener('DOMContentLoaded', () => {
  // BibTeX 一键复制
  const copyBtn = document.getElementById('bibtex-copy-btn');
  const codeEl  = document.getElementById('bibtex-code');
  if (copyBtn && codeEl) {
    copyBtn.addEventListener('click', async () => {
      const text = codeEl.innerText || codeEl.textContent || '';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // 兼容降级
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span:last-child').textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.querySelector('span:last-child').textContent = 'Copy';
        }, 1500);
      } catch (e) {
        console.error('Copy failed:', e);
        copyBtn.querySelector('span:last-child').textContent = 'Failed';
        setTimeout(() => (copyBtn.querySelector('span:last-child').textContent = 'Copy'), 1500);
      }
    });
  }
});
