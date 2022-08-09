import renderPageTemplate from './ErrorPage.hbs';
import * as s from './ErrorPage.module.css';

export default (params) => renderPageTemplate({...params, s});

