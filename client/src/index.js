import react from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
ReactDOM.render(<App/>, document.getElementById('root'));