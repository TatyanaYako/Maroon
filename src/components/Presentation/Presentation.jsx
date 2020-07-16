import React from 'react';
import style from './Presentation.module.css';
import img1 from './Presentation1.jpg';
import img2 from './Presentation2.jpg';
import PresentationContent from './PresentationContent/PresentationContent';

function Presentation() {
	return (
		<section className={style.presentation}>
			<div><img src={img1} alt='' /></div>
			<PresentationContent />
			<div><img src={img2} alt='' /></div>
		</section>
	);
}

export default Presentation;