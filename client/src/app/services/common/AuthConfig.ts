import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from '@azure/msal-browser';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export const msalConfig: Configuration = {
  auth: {
    clientId: '<your-client-id-here>',
    authority: 'https://login.microsoftonline.com/<your-tenant-id-here>', // This is your tenant ID
    redirectUri: '<redirect-link>', // This is your redirect URI
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};

export const protectedResources = {
  usersListApi: {
    endpoint: 'https://localhost:5001/api/users',
    scopes: ['<sope-link-here>'],
  },
};

export const loginRequest = {
  scopes: [],
};
