import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'> The best way to find yourself is to lose yourself in the service of others</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt=" quote" />
          <p className='p__opensans' style={{textTransform:'none'}}>Explore the vibrant dishes our customers are creating with Gericht range of gluten-free, vegan, vegetarian world food favourites, and more. </p>

        </div>
        <p className='p__opensans' style={{textTransform:'none'}}>From plant-powered plates to authentic global flavours, our social galleries are packed with inspiration to help you discover new ways to enjoy every meal. Eating well has never been so exciting.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kelvin Luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt="sign" />

      </div>

    </div>
  </div>
);

export default Chef;
