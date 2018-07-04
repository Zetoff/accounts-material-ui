import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Accounts } from 'meteor/std:accounts-ui';

export default class PasswordOrService extends Accounts.ui.PasswordOrService {
  get servicesLabels() {
    const { services = [] } = this.state;
    return services.length > 2 ? [] : services;
  }

  render() {
    const {
      className = 'password-or-service',
    } = this.props;
    const {
      hasPasswordService,
      services,
    } = this.state;

    if (hasPasswordService && services.length > 0) {
      return (
        <Typography className={className} variant="body1">
          {this.translate('orUse')}
        </Typography>
      );
    }
    return null;
  }
}
