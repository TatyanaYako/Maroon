import React from 'react';

function ItemContacts(props) {
	return (
		<div>
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</div>
	);
}

export default ItemContacts;