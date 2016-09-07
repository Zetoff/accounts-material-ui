import React from 'react';
import {Accounts, STATES} from './fix.js'; // TODO: back to normal once std:accounts-ui is fixed
import {RaisedButton, FlatButton, FontIcon, TextField, Divider} from 'material-ui';
import {socialButtonsColors, socialButtonIcons} from './social_buttons_config';

/**
 * Form.propTypes = {
 *   fields: React.PropTypes.object.isRequired,
 *   buttons: React.PropTypes.object.isRequired,
 *   error: React.PropTypes.string,
 *   ready: React.PropTypes.bool
 * };
 */

class Form extends Accounts.ui.Form {
	render() {
		const {
			fields,
			buttons,
			error,
			message,
			ready = true,
			oauthServices,
			formState
		} = this.props;
		return (
			<form
				className={ready
				? "ready"
				: null}
				onSubmit={evt => evt.preventDefault()}
				className="accounts-ui">

				<Accounts.ui.Fields fields={fields}/>
				<Accounts.ui.Buttons buttons={buttons}/>
				<br/>
				{ formState == STATES.SIGN_IN || formState == STATES.SIGN_UP ? (
					 <Accounts.ui.PasswordOrService oauthServices={ oauthServices } />
				 ) : null }
				 { formState == STATES.SIGN_IN || formState == STATES.SIGN_UP ? (
					 <Accounts.ui.SocialButtons oauthServices={ oauthServices } />
				 ) : null }
				<br/>
				<Accounts.ui.FormMessage message={message}/>
			</form>
		);
	}
}

class Buttons extends Accounts.ui.Buttons {}
class Button extends Accounts.ui.Button {
	render() {
		const {
			label,
			href = null,
			type,
			disabled = false,
			onClick,
			className,
			icon
		} = this.props;
		return type == 'link'
			? (
				<FlatButton
					href={href}
					label={label}
					icon={icon
					? <FontIcon className={`fa ${icon}`}/>
					: null}
					className={className}
					onTouchTap={onClick}
					disabled={disabled}/>
			)
			: (
				<RaisedButton
					label={label}
					icon={icon
					? <FontIcon className={`fa ${icon}`}/>
					: null}
					primary={true}
					type={type}
					className={className}
					onTouchTap={onClick}
					disabled={disabled}/>
			)
	}
}
class Fields extends Accounts.ui.Fields {
	render() {
		let {
			fields = {},
			className = ""
		} = this.props;
		return (
			<div className={[className].join(' ')}>
				{Object.keys(fields).map((id, i) => <div key={i}>
					<Accounts.ui.Field {...fields[id]}/>
					<br/>
				</div>)}
			</div>
		);
	}
}
class Field extends Accounts.ui.Field {
	render() {
		const {
			id,
			hint,
			label,
			type = 'text',
			onChange,
			required = false,
			className,
			defaultValue = ""
		} = this.props;
		const {
			mount = true
		} = this.state;
		return mount
			? (<TextField
				floatingLabelText={label}
				hintText={hint}
				onChange={onChange}
				fullWidth={true}
				defaultValue={defaultValue}
				name={id}
				type={type}
				ref={(ref) => this.input = ref}
				required={required
				? "required"
				: ""}
				autoCapitalize={type == 'email'
				? 'none'
				: false}
				autoCorrect="off"/>)
			: null;
	}
}
class SocialButtons extends Accounts.ui.SocialButtons {
	render() {
		let {
			oauthServices = {},
			className = "social-buttons"
		} = this.props;
		if (Object.keys(oauthServices).length > 0) {
			return (
				<div className={[className].join(' ')}>
					{Object.keys(oauthServices).map((id, i) => {
						let serviceClass = id.replace(/google|meteor\-developer/gi, (matched) => {
							return socialButtonIcons[matched];
						});
						const {label, type, onClick, disabled} = oauthServices[id];
						return (
							<RaisedButton
								key={i}
								label={label}
								type={type}
								onTouchTap={onClick}
								disabled={disabled}
								className={serviceClass.length > 0
								? `${serviceClass}`
								: ''}
								icon={serviceClass.length > 0
								? <FontIcon className={`fa fa-${serviceClass}`}/>
								: ''}
								backgroundColor={socialButtonsColors[id].background}
								labelColor={socialButtonsColors[id].label}
								style={{marginRight: '5px'}}
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
class FormMessage extends Accounts.ui.FormMessage {}
// Notice! Accounts.ui.LoginForm manages all state logic at the moment, so avoid overwriting this
// one, but have a look at it and learn how it works. And pull requests altering how that works are
// welcome. Alter provided default unstyled UI.
Accounts.ui.Form = Form;
Accounts.ui.Buttons = Buttons;
Accounts.ui.Button = Button;
Accounts.ui.Fields = Fields;
Accounts.ui.Field = Field;
Accounts.ui.FormMessage = FormMessage;
Accounts.ui.SocialButtons = SocialButtons;

// Export the themed version.
export {Accounts, STATES};
export default Accounts;
