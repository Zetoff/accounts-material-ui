import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

export default class Fields extends Accounts.ui.Fields {
  render() {
    let {
      fields = {},
      className = ""
    } = this.props;
    return (
      <div className={className}>
        {Object.keys(fields).map((id) => (
          <Accounts.ui.Field key={id} {...fields[id]}/>
        ))}
      </div>
    );
  }
}
