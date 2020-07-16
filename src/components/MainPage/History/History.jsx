import React from 'react';
import TextBlock from '../../TextBlock/TextBlock';
import style from './History.module.css';

function History() {

	let history = [{id:1, button: 'Наша история', adress: 'history'}];

	let historyElements = history.map(i => <TextBlock key={i.id} button={i.button} adress={i.adress}/>);

	return (
		<section className={style.history}>
			<p className={style.history_text}>“Мы стремимся сделать уход за кожей <br />доступным и приятным ритуалом для всех, кто хочет<br /> заботиться о себе и своем теле”</p>
			{historyElements}
		</section>
	);
}

export default History;