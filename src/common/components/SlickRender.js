
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import ImageGallery from 'react-image-gallery';

    const images2 = [
         {
           original: 'https://i.imgur.com/IffmWDM.jpg',
           thumbnail: 'http://lorempixel.com/250/150/nature/1/',
         },
         {
           original: 'https://i.imgur.com/e6MS6Ki.jpg',
           thumbnail: 'http://lorempixel.com/250/150/nature/2/'
         },
         {
           original: 'https://i.imgur.com/HRiN6pM.jpg',
           thumbnail: 'http://lorempixel.com/250/150/nature/3/'
         },
         {
           original: 'https://i.imgur.com/HRiN6pM.jpg',
           thumbnail: 'http://lorempixel.com/250/150/nature/3/'
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
