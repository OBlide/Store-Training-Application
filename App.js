import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import items from './Components/items.json'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      text: '',
      items: items.items
    };
  }

  onTextChanged = (text) => {
    let suggestions = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, 'i');
      suggestions = this.state.items.filter(v => regex.test(v.name));
      console.log(suggestions);
      this.setState(() => ({ suggestions }));
    }
    this.setState(() => ({ suggestions, text: text }));
  }

  render() {
    const s = this.state.suggestions.map(suggestion => s)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <SearchBar onTextChanged={this.onTextChanged} suggestions={this.state.suggestions} text={this.state.text} />


        </header>
        <div>

        </div>
      </div>
    )
  }
}

export default App;
