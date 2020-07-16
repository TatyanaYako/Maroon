import React from 'react';
import Product from './Product';
import CardProductState from './CardProductState';

class CardProduct extends React.Component {
  constructor() {
    super()
    this.state = { product: CardProductState }
  }
  render() {
    let productElements = this.state.product.map(p => <Product key={p.id} title={p.title} price={p.price} desc={p.desc} volume={p.volume} img={p.img} availability={p.availability} form={p.form}/>);
    return (
      <>
        {productElements}
      </>
    );
  }
}

export default CardProduct;