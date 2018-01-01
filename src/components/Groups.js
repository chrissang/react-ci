import React, { Component } from 'react';
import Text from './Text';

class Groups extends Component {
  render() {
    let inputs = this.props.inputs.map((input, index) => {
      switch(input.type) {
        case 'text':
          return (
            <Text
              key={input.cid}
              cid={input.cid}
              webLabel={input.weblabel}
              notes={input.notes}
              validators={input.validators}
              attributes={input.attributes}/>
          );
        default:
          return null;
      }
    });

    return (
      <dl className="accordion" data-accordion="" role="tablist">
        <dd className={ this.props.index === 0 ? 'accordion-navigation active' : 'accordion-navigation' }>
          <a
            style={{ 'display': this.props.groupsLength > 1 ? '' : 'none' }}
            href={'#panel-' + this.props.groupId}>
            { this.props.groupLabel !== undefined ? this.props.groupLabel + (this.props.hasOwnProperty('validators') ? '' : ' optional') : 'group' }
            </a>
            <div
              id={'panel-' + this.props.groupId}
              className={this.props.index === 0 ? 'content active' : 'content'}
              data-sku={this.props.sku}
              data-groupid={this.props.groupId}>
                {inputs}
            </div>
        </dd>
      </dl>
    );
  }
}

export default Groups;
