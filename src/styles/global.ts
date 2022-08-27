import { hideNavbar, showNavbar } from './keyframes';

export const global = {
    html: {
        scrollBehavior: 'smooth',
    },
    '.animation': {
        '&--hide-navbar': {
            animation: `${hideNavbar} 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards`,
            transformOrigin: 'top',
        },
        '&--show-navbar': {
            animation: `${showNavbar} 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards`,
            transformOrigin: 'top',
        },
    },
};
