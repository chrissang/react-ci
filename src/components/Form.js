import React, { Component } from 'react';
import Groups from './Groups';

class Form extends Component {
  render() {
    let groups = this.props.groups.map((group, index) => {
      return (
        <Groups
          key={group.groupId}
          index={index}
          sku={this.props.sku}
          groupId={group.groupId}
          inputs={group.inputs}
          groupLabel={group.groupLabel}
          groupsLength={this.props.groups.length} />
      )
    });

    return (
      <form id={'form_' + this.props.sku}>
        <div id={ 'personalize_' + this.props.sku } className="small-12 columns panel panel-secondary" style={{ 'display': 'block'}}>
          <div className="row">
            <div className="small-12 columns small-centered">
              <span className="icon-close icon-md"></span>
              <h2>Edit Your Personalization</h2>
            </div>

            <div className="small-12 columns small-centered">
              {groups}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
