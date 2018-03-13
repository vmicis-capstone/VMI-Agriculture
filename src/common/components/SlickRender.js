
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import ImageGallery from 'react-image-gallery';

    const images2 = [
         {
           original: 'https://i.imgur.com/7zuPo6I.jpg',
           thumbnail: 'https://i.imgur.com/7zuPo6I.jpg',
         },
         {
           original: 'https://i.imgur.com/GB7BWC0.png',
           thumbnail: 'https://i.imgur.com/GB7BWC0.png'
         },
         {
           original: 'https://i.imgur.com/Njp91H7.png',
           thumbnail: 'https://i.imgur.com/Njp91H7.png'
         },
         {
           original: 'https://i.imgur.com/BuBeEZd.png',
           thumbnail: 'https://i.imgur.com/BuBeEZd.png'
         },
         {
           original: 'https://i.imgur.com/jj4BCMY.png',
           thumbnail: 'https://i.imgur.com/jj4BCMY.png'
         },
         {
           original: 'https://i.imgur.com/KaC20Um.jpg',
           thumbnail: 'https://i.imgur.com/KaC20Um.jpg'
         },
         {
           original: 'https://i.imgur.com/CgXA7aY.png',
           thumbnail: 'https://i.imgur.com/CgXA7aY.png'
         },
         {
           original: 'https://i.imgur.com/nfyorJg.jpg',
           thumbnail: 'https://i.imgur.com/nfyorJg.jpg'
         },
         {
           original: 'https://i.imgur.com/PqOoRdG.png',
           thumbnail: 'https://i.imgur.com/PqOoRdG.png'
         },
         {
           original: 'https://i.imgur.com/7zuPo6I.jpg',
           thumbnail: 'https://i.imgur.com/7zuPo6I.jpg'
         },
         {
           original: 'https://i.imgur.com/08yu8Qy.png',
           thumbnail: 'https://i.imgur.com/08yu8Qy.png'
         },
         {
           original: 'https://i.imgur.com/3uPJa2H.jpg',
           thumbnail: 'https://i.imgur.com/3uPJa2H.jpg'
         },
         {
           original: 'https://i.imgur.com/YSzGysx.png',
           thumbnail: 'https://i.imgur.com/YSzGysx.png'
         },
         {
           original: 'https://i.imgur.com/ZVpf99D.png',
           thumbnail: 'https://i.imgur.com/ZVpf99D.png'
         }
       ]


export default function (props, state) {


  return (
     /*<div>
         <BackgroundSlideshow images={[ image1, image2, image3, image4 ]} />
    </div> */

   <ImageGallery items={images2} />

);

}
