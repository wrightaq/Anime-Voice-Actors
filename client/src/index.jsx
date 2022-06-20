import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

root.render(<App/>);
