# react-auth-wrap-provider

![npm](https://img.shields.io/npm/v/react-auth-wrap-provider?style=flat-square) ![npm](https://img.shields.io/npm/dm/react-auth-wrap-provider?style=flat-square) ![NPM](https://img.shields.io/npm/l/react-auth-wrap-provider?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-auth-wrap-provider?style=flat-square) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-auth-wrap-provider?style=flat-square)

## Getting Started :rocket:

`npm i react-auth-wrap-provider`

### Usage

```js
// index.js
<AuthProvider>
  <App />
</AuthProvider>
```

```js
// myProtectedPage.js
<ProtectedAuth>{user?.displayName}</ProtectedAuth>
```
