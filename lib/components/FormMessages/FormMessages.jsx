import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiSnackbarContent from '@material-ui/core/SnackbarContent';
import MuiButton from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton';
import { Accounts } from 'meteor/std:accounts-ui';

export default class FormMessage extends Accounts.ui.FormMessage {
  static defaultProps = {
    autoHideDuration: 4000,
  };

  constructor(props) {
    super(props);

    this.queue = [];
    this.state = {
      open: false,
      message: undefined,
    };
  }

  componentDidUpdate(prevProps) {
    const { messages } = this.props;
    if (Array.isArray(messages) && messages !== prevProps.messages) {
      // reset queue
      this.queue = messages.filter(message => !('field' in message));
      if (this.state.message) {
        // message showing, process queue will be triggered when fully closed
        this.setState({ open: false });
      } else {
        this.processQueue();
      }
    }
  }

  processQueue = () => {
    if (this.queue.length > 0) {
      const [nextMessage, ...queue] = this.queue;
      this.queue = queue;
      this.setState({
        message: nextMessage,
        open: true,
      });
    } else {
      this.setState({
        message: undefined,
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const {
      messages, // deconstruct to prevent from being passed to snackbar
      classes,
      CloseIcon,
      ...props
    } = this.props;
    const {
      open,
      message: {
        message,
        type,
      } = {},
    } = this.state;

    return (
      <MuiSnackbar
        {...props}
        open={open}
        onClose={this.handleClose}
        onExited={this.handleExited}
      >
        <MuiSnackbarContent
          className={classes[type]}
          message={message}
          action={CloseIcon ? (
            <MuiIconButton
              aria-label="Close"
              color="inherit"
              className={classes.closeIcon}
              onClick={this.handleClose}
            >
              {CloseIcon ? <CloseIcon/> : "OK"}
            </MuiIconButton>
          ) : (
            <MuiButton
              color="inherit"
              onClick={this.handleClose}
            >
              Ok
            </MuiButton>
          )}
        />
      </MuiSnackbar>
    );
  }
}
