import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import style from './Follow.module.css';
import FollowImage from './FollowImage/FollowImage';

function Follow() {

	let follow = [{ id: 1, title: 'Присоединяйтесь к нам', text: 'Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми', button: 'Подписаться', adress: 'subscription'}];

	let followElements = follow.map(i => <TextBlock key={i.id} title={i.title} text={i.text} button={i.button} adress={i.adress}/>);

	return (
		<section className={style.follow}>
			<FollowImage />
			{followElements}
		</section>
	);
}

export default Follow;