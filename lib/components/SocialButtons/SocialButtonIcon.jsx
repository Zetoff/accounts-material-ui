import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

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
    colorColor: '#bb0000',
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

const SocialButtonIcon = ({
  id: serviceId,
  className,
  Icon,
  label,
  classes,
  ...props
}) => (
  <MuiIconButton
    color="primary"
    className={[
      className,
      classes.button,
    ].join(' ')}
    classes={{
      colorPrimary: classes[serviceId],
    }}
    {...props}
  >
    <Icon className={classes.icon} />
  </MuiIconButton>
);

export default withStyles(styles)(SocialButtonIcon);
