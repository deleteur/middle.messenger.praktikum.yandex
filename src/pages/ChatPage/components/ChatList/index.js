const Handlebars = require("handlebars");
import ChatListTemplate from './ChatList.hbs';
import * as s from './ChatList.module.css';

import linkTemplate from '/src/components/Link';
import chatListRow from './ChatListRow';

export default Handlebars.registerPartial('ChatList', (params) => ChatListTemplate({s, ...params}));