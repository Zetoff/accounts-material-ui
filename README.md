# React Accounts UI for using Material-UI

[**Demo Here**](https://zetoff-accounts-material-ui-demo-dtegtmwdsl.now.sh)

![React Accounts UI for using Material-UI](https://raw.githubusercontent.com/Zetoff/accounts-material-ui/master/accounts-material-ui.png)

### Based on and extends std:accounts-ui

[https://github.com/studiointeract/accounts-ui](https://github.com/studiointeract/accounts-ui)

## Installation

`meteor add zetoff:accounts-material-ui`

### Dependencies

In addition to React this package also depends on [material-ui](http://www.material-ui.com/). So make sure it is installed:

`meteor npm install --save @material-ui/core`

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

### Example setup using FlowRouter (Meteor 1.3)

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

### Custom props

You can customize the `LoginForm` with by providing some props when rendering it:

```jsx harmony
import { Accounts } from 'meteor/std:accounts-ui';

const LoginForm = () => (
  <Accounts.ui.LoginForm 
    {...{
      FormMessagesProps: {
        CloseIcon, // component to use as button to close the snackbar
        // ... other snackbar props, ex: anchorOrigin
      },
      SocialButtonsProps: {
        asIconButtons: true, // will render social icons using Mui's IconButton
        icons: {}, // components to be used as icons, keyed by oauthService id
      },
    }}
  />
);
```

#### Icons

This package does not provide any icons out of the box, so you will have to explicitly set them. There are two places where icons can be injected:

- the close action in the message Snackbar
- the social media icons

Example using `mdi-material-ui`:

```jsx harmony
import { Accounts } from 'meteor/std:accounts-ui';

import Facebook from 'mdi-material-ui/Facebook';
import Github from 'mdi-material-ui/GithubBox';
import GooglePlus from 'mdi-material-ui/GooglePlus';
import Pinterest from 'mdi-material-ui/Pinterest';
import Rocket from 'mdi-material-ui/Rocket';
import Twitter from 'mdi-material-ui/Twitter';
import Close from 'mdi-material-ui/Close';

const LoginForm = () => (
  <Accounts.ui.LoginForm 
    {...{
      FormMessagesProps: {
        CloseIcon: Close,
      },
      SocialButtonsProps: {
        icons: {
          facebook: Facebook,
          twitter: Twitter,
          github: Github,
          google: GooglePlus,
          'meteor-developer': Rocket,
          pinterest: Pinterest,
        },
      },
    }}
  />
);
```

## Credits

Made by Zetoff
