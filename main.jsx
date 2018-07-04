import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import {
  Button,
  Buttons,
  Field,
  Fields,
  Form,
  FormMessages,
  LoginForm,
  SocialButtons,
  PasswordOrService
} from './lib/components';

// Notice! Accounts.ui.LoginForm manages all state logic at the moment, so avoid overwriting this
// one, but have a look at it and learn how it works. And pull requests altering how that works are
// welcome. Alter provided default unstyled UI.
Accounts.ui.LoginForm = LoginForm;
Accounts.ui.Form = Form;
Accounts.ui.Buttons = Buttons;
Accounts.ui.Button = Button;
Accounts.ui.Fields = Fields;
Accounts.ui.Field = Field;
Accounts.ui.FormMessages = FormMessages;
Accounts.ui.SocialButtons = SocialButtons;
Accounts.ui.PasswordOrService = PasswordOrService;

// Export the themed version.
export { Accounts };
export default Accounts;
