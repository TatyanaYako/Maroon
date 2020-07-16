import React from 'react';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


function Navigation(props) {
	return (
			<NavLink to={`${props.adress}`} className={style.nav_link}>{props.item}</NavLink>
	);
}

export default Navigation;