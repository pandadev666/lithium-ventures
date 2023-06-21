import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css';

import RootLayout from '@/app/layout';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </RootLayout>
    );
}

export default CustomApp
