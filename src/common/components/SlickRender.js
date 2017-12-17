
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import ImageGallery from 'react-image-gallery';

    const images2 = [
         {
           original: 'https://i.imgur.com/IffmWDM.jpg',
           thumbnail: 'https://i.imgur.com/IffmWDM.jpg',
         },
         {
           original: 'https://i.imgur.com/e6MS6Ki.jpg',
           thumbnail: 'https://i.imgur.com/e6MS6Ki.jpg'
         },
         {
           original: 'https://i.imgur.com/HRiN6pM.jpg',
           thumbnail: 'https://i.imgur.com/HRiN6pM.jpg'
         },
         {
           original: 'https://i.imgur.com/oKy4wlL.jpg',
           thumbnail: 'https://i.imgur.com/oKy4wlL.jpg'
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
