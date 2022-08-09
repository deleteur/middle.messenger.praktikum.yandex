const Handlebars = require("handlebars");
import chatListRowTemplate from './ChatListRow.hbs';
import * as chatListRowStyles from './styles.module.css';

export default Handlebars.registerPartial('chatListRow', (params) => chatListRowTemplate({chatListRowStyles, params}));
