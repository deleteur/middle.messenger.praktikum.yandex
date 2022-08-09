const Handlebars = require("handlebars");
import buttonTemplate from './button.hbs';
import styles from './styles.module.css';

export default Handlebars.registerPartial('button', buttonTemplate);

