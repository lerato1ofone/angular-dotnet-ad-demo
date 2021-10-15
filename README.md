# angular-dotnet-ad-demo

Simple application to demonstrate Azure AD Authentication using .NET Core Web API with an Angular client

# Installation and setup

## Clone the project

```sh
git clone https://github.com/lerato1ofone/angular-dotnet-ad-demo.git
```

## Setting up environments

### For the Server

Change directory into the Server/APi and setup your environment variables in appSettings.json

```sh
cd Server
```

- Open the solution or folder in Visual Studio / Visual studio code
- Inside appSettings.json file

```sh
    "Domain": "your-app's-domain-here",
    "ClientId": "your-client-id-here",
    "TenantId": "your-tenant-id-here"
```

- Create an application in Azure AD for your server following [this documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) and replace the clientId and TenantId with values from your Azure app. Change the Domain value to the domain of your server. e.g. http://localhost:5001

### For the client

- Change directory into the frontend and create environments

```sh
cd client/src
```

- Create the environments folder and create environment files

```sh
mkdir environments
cd environments
```

- In this directory create files named 'environment.ts' and 'environment.prod.ts' and paste the following code/configuration in both files

```sh
export const environment = {
  production: false,
  apiUrl: '<your-api-url>',
  adClientId: '<your-app-client-id>',
  adTenantId: '<your-app-tenant-id>',
  redirectUri: '<your-frontend-app-url>',
  scopeUri: '<your-api-scope-uri>',
};
```

For the 'environment.prod.ts' change the production property to true
Create and register your client application on [Azure](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration) and replace the value in the environment files in '<>' with values from your azure app (adClientId, adTenantId, scopeUri)

# Running the application

To run the application with docker, on the root of the repository, build and run the docker compose to run the image

```sh
docker compose build
docker compose up
```

Visit the frontend application in your browser on http://localhost:4200

- Alternatively, run both applications on your localhost, with dotnet run and npm start (ng serve)

```sh
cd Server
dotner run
```

cd ../client
npm install
npm start

```
Visit the frontend application in your browser on http://localhost:4200
```
