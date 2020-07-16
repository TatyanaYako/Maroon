import React from 'react';
import TextBlock from '../../TextBlock/TextBlock';
import style from './Individual.module.css';
import img from './Individual.jpg';

function Individual() {

	let individual = [{ id:1, title: 'Индивидуальный уход', text: 'Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.', text2: 'Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.', button: 'Заполнить анкету', adress: 'profile' }];

	let individualElements = individual.map(i => <TextBlock key={i.id} title={i.title} text={i.text} text2={i.text2} button={i.button} adress={i.adress}/>);

	return (
		<section className={style.individual}>
			<div className={style.individual_block}>
				{individualElements}
			</div>
			<img src={img} alt='' width='670' height='451'/>
		</section>
	);
}

export default Individual;