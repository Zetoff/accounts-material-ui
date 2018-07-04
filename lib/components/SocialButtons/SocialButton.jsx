import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {},
  icon: {
    marginRight: theme.spacing.unit,
  },
  facebook: {
    backgroundColor: '#3b5998',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2f4779', // 20% darkened
    },
  },
  twitter: {
    backgroundColor: '#55acee',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1a8fe8', // 20% darkened
    },
  },
  github: {
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333333', // 20% lightened
    },
  },
  google: {
    backgroundColor: '#dd4b39',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#bd3120', // 20% darkened
    },
  },
  'meteor-developer': {
    backgroundColor: '#bb0000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#950000', // 20% darkened
    },
  },
  meetup: {
    backgroundColor: '#ed1c40',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#c40f2e', // 20% darkened
    },
  },
  weibo: {
    backgroundColor: '#faf6f1',
    color: '#000',
    '&:hover': {
      backgroundColor: '#e0c7a8', // 20% darkened
    },
  },
  pinterest: {
    backgroundColor: '#bd081c',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#970616', // 20% darkened
    },
  }
});

const SocialButton = ({
  id: serviceId,
  className,
  Icon,
  label,
  classes,
  ...props
}) => (
  <MuiButton
    variant="raised"
    className={[
      className,
      classes.button,
      classes[serviceId],
    ].join(' ')}
    {...props}
  >
    {Icon ? <Icon className={classes.icon} /> : null}
    {label}
  </MuiButton>
);

export default withStyles(styles)(SocialButton);
