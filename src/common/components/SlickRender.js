
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import ImageGallery from 'react-image-gallery';

    const images2 = [
         {
           original: 'http://lorempixel.com/1000/600/nature/1/',
           thumbnail: 'http://lorempixel.com/250/150/nature/1/',
         },
         {
           original: 'http://lorempixel.com/1000/600/nature/2/',
           thumbnail: 'http://lorempixel.com/250/150/nature/2/'
         },
         {
           original: 'http://lorempixel.com/1000/600/nature/3/',
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
