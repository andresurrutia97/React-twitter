import React from "react";
import { Button, Form } from "react-bootstrap";

import styles from "./InputText.css";

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.userNameToReply) ? `@${this.props.userNameToReply} ` : ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form className={styles.container} onSubmit={this.props.onSendText}>
        <textarea
          className={styles.text}
          name="text"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {/* {(this.props.userNameToReply) ? `@${this.props.userNameToReply} ` : ""} */}
        </textarea>
        <div className={styles.buttons}>
          <Button variant="outline-danger" onClick={this.props.onCloseText}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    );
  }
}
