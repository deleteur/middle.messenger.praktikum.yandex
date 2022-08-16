import renderPageTemplate from './ChatPage.hbs';
import * as chatPageStyles from './ChatPage.module.css';

import ChatList from './components/ChatList';
import ChatArea from './components/Chat';

export default renderPageTemplate({chatPageStyles});
