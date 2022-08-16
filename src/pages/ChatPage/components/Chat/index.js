const Handlebars = require("handlebars");
import ChatTemplate from './Chat.hbs';
import * as s from './Chat.module.css';

export default Handlebars.registerPartial('ChatArea', (params) => ChatTemplate({s, ...params}));
