import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { Accounts } from 'meteor/std:accounts-ui';

export default class Button extends Accounts.ui.Button {
  render() {
    const {
      label,
      href = null,
      type,
      disabled = false,
      onClick,
      className,
      classes,
      icon: Icon,
    } = this.props;
    return (
      <MuiButton
        variant={type === 'link' ? 'flat' : 'contained'}
        href={href}
        color="primary"
        type={type}
        className={className}
        classes={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {Icon ? <Icon /> : null}
        {label}
      </MuiButton>
    );
  }
}
