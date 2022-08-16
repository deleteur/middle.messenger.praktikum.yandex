import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ErrorPage from '../pages/ErrorPage';
import ProfilePage from '../pages/ProfilePage';
import ChatPage from '../pages/ChatPage';

export const getPageByRoute = () => {
    let page;

    switch (window.location.pathname) {
        case "/":
            page = LoginPage;
            break;
        case "/profile":
            page = ProfilePage;
            break;
        case "/signup":
            page = RegistrationPage;
            break;
        case "/signin":
            page = LoginPage;
            break;
        case "/404":
            page = ErrorPage({ errorCode: 404, errorDescription: 'Не туда попали' });
            break;
        case "/500":
            page = ErrorPage({ errorCode: 500, errorDescription: 'Мы уже фиксим' });
            break;
        case "/chat":
            page = ChatPage;
            break;
        default:
            page = LoginPage;
    }

    return page;
};
