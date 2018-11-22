import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";
import "./scss/_email.scss";

class Email extends React.Component {  render() {
    return (
      <div className="email-form">
        {/* v-on:submit="onSubmit" */}
        <form className="form" method="POST">
          <div className="field-group">
            <label htmlFor="email" className="field-group__label">
              { this.props.labelText }
            </label>
            <input id="email" className="field-group__email-input" type="email" placeholder={this.props.placeholder} required />
          </div>
          <div className="field-group field-group--inline">
            <a href="#" className="field-group__link">link here</a>
            <input type="submit" className="field-group__submit" value={this.props.buttonText} />
          </div>
        </form>
      </div>
    )
  }
}

Email.propTypes = {
  fields: PropTypes.shape({
    labelText: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    placeholder: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    }),
    buttonText: PropTypes.shape({
      value: PropTypes.string,
      editable: PropTypes.string
    })
  })
};

Email.defaultProps = {
  labelText: "Email",
  placeholder: "Enter your email address",
  buttonText: "Create now"
};

export default Email;