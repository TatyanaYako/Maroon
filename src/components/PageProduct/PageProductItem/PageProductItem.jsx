import React from 'react';
import style from './PageProductItem.module.css';
import { NavLink } from 'react-router-dom';

function PageProductItem(props) {

	return (
		<NavLink to={props.title} className={style.product}>
			<div className={style.product_page}>
				<img src={props.img} alt={props.title} />
				<div className={style.product_description}>
					<p>{props.title}</p>
					<p>{props.desc}</p>
					<p>{props.text}</p>
					<p>{props.composition}</p>
					<p>{props.use}</p>
					<p>{props.volume}</p>
					<p>{props.price}</p>
				</div>
			</div>
		</NavLink>
	);
}

export default PageProductItem;