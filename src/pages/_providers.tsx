import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@services/react-query/client';

export default function _providers({ children }) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ChakraProvider>
    );
}
