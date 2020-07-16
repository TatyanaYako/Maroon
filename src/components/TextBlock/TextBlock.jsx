import React from 'react';
import style from './TextBlock.module.css';
import { NavLink } from 'react-router-dom';

function TextBlock(props) {
	return (
		<div className={style.text_block}>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
			<p>{props.text2}</p>
			<NavLink to={props.adress}>{props.button}</NavLink>
		</div>
	);
}

export default TextBlock;