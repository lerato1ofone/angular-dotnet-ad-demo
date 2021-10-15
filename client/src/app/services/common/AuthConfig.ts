import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from '@azure/msal-browser';
import { environment } from '../../../environments/environment';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export const msalConfig: Configuration = {
  auth: {
    clientId: environment.adClientId,
    authority: `https://login.microsoftonline.com/${environment.adTenantId}`, // This is your tenant ID
    redirectUri: environment.redirectUri, // This is your redirect URI
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
    endpoint: `${environment.apiUrl}/users`,
    scopes: [environment.scopeUri],
  },
};

export const loginRequest = {
  scopes: [],
};
