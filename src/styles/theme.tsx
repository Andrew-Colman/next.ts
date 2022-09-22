import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { global } from './global';

const fonts = { mono: `'Menlo', monospace` };

const theme: ThemeConfig = extendTheme({
    colors: {
        primary: '#005B96',
        secondary: '#1BC5BD',
        lightBg: '#F1FAFE',
        black: '#16161D',
    },
    fonts,
    styles: {
        global,
    },
    initialColorMode: "dark",
    
});

export default theme;
