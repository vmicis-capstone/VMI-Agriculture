
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import ImageGallery from 'react-image-gallery';

    const images2 = [
         {
           original: 'https://i.imgur.com/Z1znc16.jpg',
           thumbnail: 'https://i.imgur.com/Z1znc16.jpg',
         },
         {
           original: 'https://i.imgur.com/gMVtJyu.png',
           thumbnail: 'https://i.imgur.com/gMVtJyu.png'
         },
         {
           original: 'https://i.imgur.com/eJkai9V.png',
           thumbnail: 'https://i.imgur.com/eJkai9V.png'
         },
         {
           original: 'https://i.imgur.com/8bS1FaI.png',
           thumbnail: 'https://i.imgur.com/8bS1FaI.png'
         },
         {
           original: 'https://i.imgur.com/S6JBvwj.png',
           thumbnail: 'https://i.imgur.com/S6JBvwj.png'
         },
         {
           original: 'https://i.imgur.com/UcU0Tww.png',
           thumbnail: 'https://i.imgur.com/UcU0Tww.png'
         },
         {
           original: 'https://i.imgur.com/Zdx2VqW.jpg',
           thumbnail: 'https://i.imgur.com/Zdx2VqW.jpg'
         },
         {
           original: 'https://i.imgur.com/Y3oOa8E.png',
           thumbnail: 'https://i.imgur.com/Y3oOa8E.png'
         },
         {
           original: 'https://i.imgur.com/7n8ofCX.jpg',
           thumbnail: 'https://i.imgur.com/7n8ofCX.jpg'
         },
         {
           original: 'https://i.imgur.com/Tfy9g2i.jpg',
           thumbnail: 'https://i.imgur.com/Tfy9g2i.jpg'
         },
         {
           original: 'https://i.imgur.com/Tfy9g2i.jpg',
           thumbnail: 'https://i.imgur.com/Tfy9g2i.jpg'
         },
         {
           original: 'https://i.imgur.com/iaA0tW6.png',
           thumbnail: 'https://i.imgur.com/iaA0tW6.png'
         },
         {
           original: 'https://i.imgur.com/0uVtAIW.png',
           thumbnail: 'https://i.imgur.com/0uVtAIW.png'
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
