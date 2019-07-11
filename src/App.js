import React, { Component } from 'react';
import './bootstrap/css/bootstrap.min.css'
import PriceList from './components/PriceList.js'
const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去云南旅游",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <PriceList items={items} 
          onModifyItem={(item) => {alert(item.id)}}
        />
      </div>
    );
  }
}

export default App;
