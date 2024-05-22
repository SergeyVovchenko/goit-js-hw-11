import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.show({
  title: 'Hey',
  message: 'What would you like to add?',
});

// !==========================================================================

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
