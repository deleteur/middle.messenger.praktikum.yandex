import renderPageTemplate from './ProfilePage.hbs';
import * as s from './ProfilePage.module.css';

import btn from '../../components/Button';
import goBack from './components/GoBack';
import profileRow from './components/ProfileRow';
import profileControls from './components/ProfileControls';

const mockUser = {
    name: 'Иван',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 (909) 967 30 30',
};

export default renderPageTemplate({user: mockUser, s});
