import {initAuth0} from '@auth0/nextjs-auth0';
import IAuth0Settings from '@auth0/nextjs-auth0/dist/settings';

const config: IAuth0Settings = {
    domain: process.env.AUTH0_DOMAIN || '',
    clientId: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    audience: process.env.AUD,
    scope: 'openid profile',
    redirectUri: process.env.REDIRECT_URI_LOGIN || 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: process.env.REDIRECT_URI_LOGOUT || 'http://localhost:3000',
    session: {
        cookieSecret: process.env.COOKIE_SECRET || '',
        cookieLifetime: 60 * 60 * 8,
        cookieDomain: process.env.DOMAIN,
        cookieSameSite: 'lax',
        storeIdToken: true,
        storeAccessToken: true,
        storeRefreshToken: true
    },
    oidcClient: {
        httpTimeout: 2500,
        clockTolerance: 10000
    }
};

export default initAuth0(config);
