import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

/**
 * Form.propTypes = {
 *   fields: React.PropTypes.object.isRequired,
 *   buttons: React.PropTypes.object.isRequired,
 *   error: React.PropTypes.string,
 *   ready: React.PropTypes.bool
 * };
 */

export default class LoginForm extends Accounts.ui.LoginForm {
  getAccountsMuiProps() {
    return {
      FormMessagesProps: this.props.FormMessagesProps,
      SocialButtonsProps: this.props.SocialButtonsProps,
    };
  }

  componentWillMount() {
    // FIXME hack to solve issue #18
  }

  // overridden to avoid mutating state.messages
  showMessage(message, type, clearTimeout, field){
    message = this.translate(message).trim();
    if (message) {
      this.setState(({ messages = [] }) => ({
        messages: [
          ...messages,
          {
            message,
            type,
            ...(field && { field }),
          },
        ]
      }));
      if (clearTimeout) {
        this.hideMessageTimout = setTimeout(() => {
          // Filter out the message that timed out.
          this.clearMessage(message);
        }, clearTimeout);
      }
    }
  }

  render() {
    this.oauthButtons();
    // Backwords compatibility with v1.2.x.
    const { messages = [] } = this.state;
    const message = {
      deprecated: true,
      message: messages.map(({ message }) => message).join(', '),
    };
    return (
      <Accounts.ui.Form
        oauthServices={this.oauthButtons()}
        fields={this.fields()}
        buttons={this.buttons()}
        {...this.state}
        message={message}
        translate={this.translate}
        {...this.getAccountsMuiProps()}
      />
    );
  }
}
