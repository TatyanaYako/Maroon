import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Profile.module.css';

function Profile() {
	return (
		<div className={style.profile_wripper}>
			<NavLink to='profile'>Войти</NavLink>
			<NavLink to='profile'>Зарегистрироваться</NavLink>
			<div className={style.exit_conteiner}>
				<input type='tel' required placeholder='Телефон'></input>
				<input type='password' required placeholder='Пароль'></input>
				<input type='button' value='Войти'></input>
			</div>
			<div className={style.registration_conteiner}>
				<input type='text' required placeholder='Имя'></input>
				<input type='tel' required placeholder='Телефон'></input>
				<input type='email' required placeholder='Email'></input>
				<input type='password' required placeholder='Пароль'></input>
				<input type='button' value='Зарегистрироваться'></input>
			</div>
		</div>
	);
}

export default Profile;