import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default class Field extends Accounts.ui.Field {
  render() {
    const {
      id,
      hint,
      label,
      type = 'text',
      onChange,
      required = false,
      className,
      defaultValue = "",
      message,
    } = this.props;
    return !this.state.mount ? null : (
      <MuiTextField
        label={label}
        placeholder={hint}
        onChange={onChange}
        fullWidth={true}
        defaultValue={defaultValue}
        name={id}
        helperText={message ? message.message : null}
        error={message ? ['error', 'warning'].includes(message.type) : false}
        className={className}
        type={type}
        required={required}
        InputProps={{
          inputProps: {
            autoCorrect: "off",
          }
        }}
      />
    );
  }
}
