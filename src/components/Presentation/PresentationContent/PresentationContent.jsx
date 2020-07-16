import React from 'react';
import TextBlock from '../../TextBlock/TextBlock';
import style from './PresentationContent.module.css';
import Logo from '../../Logo/Logo';

function PresentationContent() {

	let presentation = [{ id: 1, text: 'Натуральная косметика для бережного ухода за кожей', button: 'Подробнее', adress: 'about' }];

	let presentationElements = presentation.map(i => <TextBlock key={i.id} text={i.text} button={i.button} adress={i.adress} />);

	return (
		<div className={style.presentation_content}>
			<div className={style.logo}>
				<Logo />
			</div>
			{presentationElements}
		</div>
	);
}

export default PresentationContent;