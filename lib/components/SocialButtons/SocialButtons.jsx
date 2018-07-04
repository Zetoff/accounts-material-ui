import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

import SocialButton from './SocialButton';
import SocialButtonIcon from './SocialButtonIcon';

export default class SocialButtons extends Accounts.ui.SocialButtons {
  static defaultProps = {
    icons: {},
  };

  render() {
    let {
      oauthServices = {},
      className = "social-buttons",
      classes,
      // custom accounts-material-ui props
      asIconButtons = false,
      icons,
    } = this.props;

    const Button = asIconButtons ? SocialButtonIcon : SocialButton;

    if (Object.keys(oauthServices).length > 0) {
      return (
        <div className={[className, classes.root].join(' ')}>
          {Object.keys(oauthServices).map(serviceId => {
            return (
              <Button
                key={serviceId}
                variant="raised"
                className={[
                  `oauth-service-${serviceId}`,
                  classes[serviceId],
                ].join(' ')}
                classes={{
                  button: classes.button,
                }}
                Icon={icons[serviceId]}
                {...oauthServices[serviceId]}
              />
            );
          })}
        </div>
      )
    } else {
      return null;
    }

  }
}
