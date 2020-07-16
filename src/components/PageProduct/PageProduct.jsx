import React from 'react';
import PageProductItem from './PageProductItem/PageProductItem';
import CardProductState from './../CardProduct/CardProductState';

class PageProduct extends React.Component {
	constructor() {
		super()
		this.state = { product: CardProductState }
	}
	render() {
		let productElements = this.state.product.map(p => <PageProductItem key={p.id} title={p.title} price={p.price} desc={p.desc} volume={p.volume} img={p.img} availability={p.availability} text={p.text} composition={p.composition} use={p.use} />);
		return (
			<>
				{productElements[2]}
			</>
		);
	}
}

export default PageProduct;