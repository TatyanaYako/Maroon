import React from 'react';
import style from './FollowImage.module.css';
import follow1 from './follow1.jpg';
import follow2 from './follow2.jpg';
import follow3 from './follow3.jpg';
import follow4 from './follow4.jpg';
import follow5 from './follow5.jpg';
import follow6 from './follow6.jpg';

function FollowImage() {
	return (
		<div className={style.follow_image}>
			<img src={follow1} alt=''/>
			<img src={follow2} alt=''/>
			<img src={follow3} alt=''/>
			<img src={follow4} alt=''/>
			<img src={follow5} alt=''/>
			<img src={follow6} alt=''/>
		</div>
	);
}

export default FollowImage;