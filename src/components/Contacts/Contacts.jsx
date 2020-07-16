import React from 'react';
import IconsSocial from '../IconsSocial/IconsSocial';
import ItemContacts from './ItemContacts/ItemContacts';
import style from './Contacts.module.css';

function Contacts() {
  
  let contact = [
    { id: 'adress', title: 'Адрес', text: 'Санкт-Петербург ул. Большая Конюшенная 19' },
    { id: 'telephone', title: 'Телефон', text: '+7 (923) 888-90-60' },
    { id: 'e-mail', title: 'E-mail', text: 'info@maroon.ru' }
  ];

  let contactElements = contact.map(c => <ItemContacts key={c.id} title={c.title} text={c.text} />);

  return (
    <div className={style.contacts_wripper}>
      <div className={style.contacts}>
        {contactElements}
        <IconsSocial />
      </div>
    </div>
  );
}

export default Contacts;