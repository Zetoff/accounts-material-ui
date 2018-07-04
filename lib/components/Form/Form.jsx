import React from 'react';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default class Form extends Accounts.ui.Form {

  formRef = ref => this.form = ref;

  render() {
    const {
      hasPasswordService,
      oauthServices,
      fields,
      buttons,
      error,
      messages,
      ready = true,
      className,
      classes,
      formState,
      // custom accounts-material-ui props
      SocialButtonsProps,
      FormMessagesProps,
    } = this.props;

    return (
      <form
        noValidate
        ref={this.formRef}
        className={["accounts", className].join(' ')}
      >
        {Object.keys(fields).length === 0 ? null : (
          <Accounts.ui.Fields
            className={classes.fields}
            fields={fields}
          />
        )}
        <Accounts.ui.Buttons buttons={buttons} className={classes.buttons}/>
        {formState === STATES.SIGN_IN || formState === STATES.SIGN_UP
          ? (
            <React.Fragment>
              <Accounts.ui.PasswordOrService
                className={classes.passwordOrService}
                oauthServices={oauthServices}
              />
              <Accounts.ui.SocialButtons
                className={classes.socialButtons}
                {...SocialButtonsProps}
                oauthServices={oauthServices}
              />
            </React.Fragment>
          ) : null}
        <Accounts.ui.FormMessages
          className={classes.formMessages}
          {...FormMessagesProps}
          messages={messages}
        />
      </form>
    );
  }
}
