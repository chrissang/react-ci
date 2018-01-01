import React, { Component } from 'react';
import Form from './components/Form';
import axios from 'axios';
import './app.css';

class App extends Component {
  state = {
    sku: 252020000000,
    formData: [],
    skusSelected: []
  }

  componentDidMount () {
    if (this.state.skusSelected.indexOf(this.state.sku) <= -1 ) {
      axios.get('https://www.uncommongoods.com/lookup/ci/1/ci-inputs/' + this.state.sku)
      .then(response => {
        let tempDataArry = [];
        let tempSkuArry = [];
        tempDataArry.push(response.data);
        tempSkuArry.push(response.sku);
        this.setState({formData: tempDataArry});
        this.setState({skusSelected: tempSkuArry});
      });
    } else {
      console.log('already have json no need to get josn twice');
    }
  }

  render() {
    let forms = this.state.formData.map((form) => {
      return (
        <Form
          key={form.sku}
          sku={form.sku}
          itemId={form.itemId}
          groups={form.groups}/>
      )
    });
    
    return (
      <div className="App">
        <p>react ci</p>
        <div id="personalization_container" className="row" style={{ 'display': 'block' }}>
			    <div id="personalized_groups" className="small-12 columns">
              {forms}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
