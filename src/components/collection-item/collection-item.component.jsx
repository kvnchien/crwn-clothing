import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//The 'addItem' prop here is given from the 'mapDispatchToProps' --> addItem
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  console.log("===> In CollectionItem component, we are getting the 'item': ")
  console.log(item);
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
      
    </div>
)};

/*
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);
*/


const mapDispatchToProps = dispatch => ( {
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
