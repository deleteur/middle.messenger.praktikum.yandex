const Handlebars = require("handlebars");
import linkTemplate from './link.hbs';
import styles from './styles.module.css';

export default Handlebars.registerPartial('link', linkTemplate);

