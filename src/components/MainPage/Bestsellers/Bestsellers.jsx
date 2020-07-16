import React from 'react';
import TextBlock from '../../TextBlock/TextBlock';
import style from './Bestsellers.module.css';

function Bestsellers() {

	let bestsellers = [{ id:1, title: 'Бестселлеры', text: 'Легендарные продукты, завоевавшие любовь наших клиентов', button: 'Смотреть всё', adress: 'bestsellers' }];

	let bestsellersElements = bestsellers.map(i => <TextBlock key={i.id} title={i.title} text={i.text} button={i.button} adress={i.adress}/>);

	return (
		<section className={style.bestsellers_block}>
			{bestsellersElements}
		</section>
	);
}

export default Bestsellers;

