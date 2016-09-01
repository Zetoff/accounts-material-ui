# React Accounts UI for using Material-UI

Current version 0.0.1

![React Accounts UI for using Material-UI](https://raw.githubusercontent.com/zetoff/accounts-material-ui/master/accounts-material-ui.png)
TODO: add picture

### Based on and extends std:accounts-ui

[https://github.com/studiointeract/accounts-ui](https://github.com/studiointeract/accounts-ui)

## Installation

`meteor add zetoff:accounts-material-ui`

### Dependencies

In addition to React this package also depends on [material-ui](http://www.material-ui.com/). So make sure it is installed:

`meteor npm install -S material-ui`

## Configuration

We support the standard [configuration in the account-ui package](http://docs.meteor.com/#/full/accounts_ui_config). But have extended with some new options.

### [Accounts.ui.config(options)](https://github.com/studiointeract/react-accounts-ui#configuration)

### Example setup (Meteor 1.3)

`meteor add accounts-password`  
`meteor add zetoff:accounts-material-ui`
`meteor npm install -S material-ui`

```javascript

import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'NO_PASSWORD',
  loginPath: '/',
});

if (Meteor.isClient) {
  ReactDOM.render(<Accounts.ui.LoginForm />, document.body)
}

```

## Example setup using FlowRouter (Meteor 1.3)

`meteor add accounts-password`  
`meteor add zetoff:accounts-material-ui`
`meteor npm install -S material-ui`

```javascript
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Accounts } from 'meteor/std:accounts-ui';
import React from 'react';

Accounts.ui.config({
  passwordSignupFields: 'NO_PASSWORD',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/')
});

FlowRouter.route("/login", {
  action(params) {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />
    });
  }
});
```

## Credits

Made by Zetoff
