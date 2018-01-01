import React, { Component } from 'react';

class Text extends Component {
  render() {
    const maxLength = this.props.attributes ? this.props.attributes.maxlength : '';
    const minLength = this.props.attributes ? this.props.attributes.minlength : '';
    const placeHolder = this.props.attributes ? this.props.attributes.placeholder : '';
    const required = this.props.validators ? this.props.validators.indexOf('required') >= 0 : false;
    const upperCase = this.props.validators ? this.props.validators.indexOf('UpperCase') >= 0 : false;
    const lowerCase = this.props.validators ? this.props.validators.indexOf('LowerCase') >= 0 : false;
    const wholeNumber = this.props.validators ? this.props.validators.indexOf('integer') >= 0 : false;
    const decimal = this.props.validators ? this.props.validators.indexOf('decimal') >= 0 : false;
    
    let maxChars = null;
    let notes = null;

    if (maxLength !== null) {
      maxChars =(
        <div className="small-6 columns">
          <div className="body-mini right">{maxLength + ' Characters Max.'}</div>
        </div>
      )
    }

    if (this.props.notes !== null) {
      notes =(
        <div className="input-notes">
          {this.props.notes}
        </div>
      )
    }

    return (
      <div className="row">
        <div className={ maxLength === null ? 'small-12 columns' : 'small-6 columns' }>
          <label>
            {this.props.webLabel}
          </label>
        </div>

        {maxChars}

        <div className="small-12 columns">
          <input type="text"
            id={this.props.cid}
            name={this.props.cid}
            placeholder={placeHolder !== '' ? 'Ex. ' + placeHolder : ''} 
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            className={
              upperCase ? 'UpperCase' : '' +
              lowerCase ? ' LowerCase' : '' +
              wholeNumber ? ' digits' : '' +
              decimal ? ' number' : ''
            }/>

            {notes}
        </div>
      </div>
    );
  }
}

export default Text;
