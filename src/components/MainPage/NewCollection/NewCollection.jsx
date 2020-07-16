import React from 'react';
import TextBlock from '../../TextBlock/TextBlock';
import style from './NewCollection.module.css';

function NewCollection() {

	let newColl = [{ id:1, title: 'Встречайте весну вместе с нами', text: 'Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой', button: 'Подробнее', adress: 'collection'}];

	let newCollElements = newColl.map(i => <TextBlock key={i.id} title={i.title} text={i.text} button={i.button} adress={i.adress}/>);

	return (
		<section className={style.new_collection}>
			<div className={style.new_collection_content}>
			{newCollElements}
			</div>
		</section>
	);
}

export default NewCollection;