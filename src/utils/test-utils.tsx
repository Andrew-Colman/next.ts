import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

//import { Provider as AuthProvider } from 'next-auth/client';
import { Provider } from 'react-redux';
//import defaultStrings from 'i18n/en-x-default';

import { makeStore } from '@store/store';
import reducers from '@store/reducers';

const AllTheProviders = ({ children, pageProps }) => {
    const store = makeStore(reducers);
    return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options?) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
export { user };

// override render method
export { customRender as render };

/* example of more providers: */
/*  <ThemeProvider theme="light"><TranslationProvider messages={defaultStrings}> */
// ....
/*  </TranslationProvider></ThemeProvider> */
