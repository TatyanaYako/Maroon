import React from 'react';
import style from './Product.module.css';
import { NavLink } from 'react-router-dom';


function Product(props) {

	return (
		<NavLink to={props.title} className={style.product}>
			<img src={props.img} alt={props.title} />
			<div className={style.product_conteiner}>
				<div className={style.product_content}>
					<p>{props.title}</p>
					<p>{props.price}</p>
				</div>
				<div className={style.product_content}>
					<p>{props.desc}</p>
					<p>{props.volume}</p>
				</div>
			</div>
		</NavLink>
	);
}

export default Product;