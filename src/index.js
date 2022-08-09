import {getPageByRoute} from './router';

const root = document.querySelector('#root');
root.innerHTML = getPageByRoute();
