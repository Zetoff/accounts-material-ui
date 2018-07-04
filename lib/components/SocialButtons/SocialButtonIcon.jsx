import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiTooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import SocialButton from './SocialButton';

const styles = () => ({
  button: {},
  icon: {},
  facebook: {
    color: '#3b5998',
  },
  twitter: {
    color: '#55acee',
  },
  github: {
    color: '#000',
  },
  google: {
    color: '#dd4b39',
  },
  'meteor-developer': {
    color: '#bb0000',
  },
  meetup: {
    color: '#ED1C40',
  },
  weibo: {
    color: '#000'
  },
  pinterest: {
    color: '#bd081c',
  }
});

const SocialButtonIcon = ({ Icon, ...props }) => {
  const {
    id: serviceId,
    className,
    label,
    classes,
    ...iconButtonProps
  } = props;
  if (!Icon) {
    return (
      <SocialButton
        {...props}
        classes={{
          ...classes,
          [serviceId]: undefined,
        }}
      />
    );
  }
  return (
    <MuiTooltip title={label}>
      <MuiIconButton
        color="primary"
        className={[
          className,
          classes.button,
        ].join(' ')}
        classes={{
          colorPrimary: classes[serviceId],
        }}
        {...iconButtonProps}
      >
        <Icon className={classes.icon}/>
      </MuiIconButton>
    </MuiTooltip>
  );
};

export default withStyles(styles)(SocialButtonIcon);
