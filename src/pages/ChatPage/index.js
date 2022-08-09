import renderPageTemplate from './ChatPage.hbs';
import * as chatPageStyles from './ChatPage.module.css';

// import btn from '../../components/Button';
import ChatList from './components/ChatList';
import ChatArea from './components/Chat';
// import profileControls from './components/profileControls';

// const mockUser = {
//     name: 'Иван',
//     email: 'pochta@yandex.ru',
//     login: 'ivanivanov',
//     first_name: 'Иван',
//     second_name: 'Иванов',
//     display_name: 'Иван',
//     phone: '+7 (909) 967 30 30',
// };

export default renderPageTemplate({chatPageStyles});