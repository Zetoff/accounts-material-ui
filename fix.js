// Keep this until issue with std:account-ui is fixed
// https://github.com/studiointeract/accounts-ui/issues/60

import {Accounts, STATES} from 'meteor/std:accounts-ui';

class Field extends Accounts.ui.Field {
  triggerUpdate() {
  		const {onChange} = this.props;
      let value;
  		if(this.input) {
        value = this.input.value;
      }
  		if (value === undefined) {
  			value = '';
  		} else {
  			// do nothing
  		}

  		if (this.input) {
  			onChange({target: {
  					value
  				}})
  		}
  	}
}

Accounts.ui.Field = Field;

export { Accounts, STATES }
export default Accounts
