import React from 'react';
import style from './FilterItem.module.css';

function FilterItem(props) {
	return (
		<div>
			<label><input type='checkbox' checked={props.filter.check} onChange={() => props.checkClick(props.filter.id)} className={style.check} />{props.filter.value}</label>
		</div>
	);
}

export default FilterItem;

