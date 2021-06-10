export default [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

import images from './gallery-items.js';

const gallery=document.querySelector('.gallery');

const lightbox =document.querySelector('.js-lightbox');
const lightboxImage=document.querySelector('.lightbox__image');
const lightboxCloseBtn=document.querySelector(`button[data-action="close-lightbox"]`);
const lightboxOverlay=document.querySelector('.lightbox__overlay');

const createGallery=images.map(({preview,original,description})=>
 
`<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`

);

gallery.innerHTML=createGallery.join('');

// const galleryImage=document.querySelector('.gallery__image');

const onImageClick=(e)=>{
  e.preventDefault();
  const galleryImage=e.target;
  if (e.target.nodeName!=='IMG'){return;}
  openLightbox(galleryImage);
}


const openLightbox=(galleryImage)=> {
  lightbox.classList.add('is-open');
  lightboxImage.src=galleryImage.dataset.source;
  lightboxImage.alt=galleryImage.alt;

  lightboxCloseBtn.addEventListener('click',closeLightbox);
  lightboxOverlay.addEventListener('click',closeLightbox);
  document.addEventListener('keydown',pressEscToCloseLightbox);
}

const closeLightbox=()=> {
  lightbox.classList.remove('is-open');
  lightboxImage.src='';
  lightboxImage.alt='';

  lightboxCloseBtn.removeEventListener;
  lightboxOverlay.removeEventListener;
  document.removeEventListener;
}

const pressEscToCloseLightbox=(e)=>{
  if (e.code === 'Escape') {
    closeLightbox();
  }
}


gallery.addEventListener('click',onImageClick);




// function closeOnEscape(callback) {
//   document.addEventListener(
    
//     'keydown',

//     event => {
//       if (event.code === 'Escape') {
//         callback();
//       }
//     },
   
//     {
//       once: true,
//     }
//   );
// }