import {Accounts, STATES} from 'meteor/std:accounts-ui';

class Field extends Accounts.ui.Field {
	triggerUpdate() {
		const {onChange} = this.props
		let value = this.input.value;

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
