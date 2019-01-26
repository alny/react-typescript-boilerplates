import React, { Component } from 'react';
import './App.css';
import AppCSSDynamic from './AppCSSDynamic';
import logo from './logo.svg';

class App extends Component {
  public state = {
    route: 'hello',
  };

  public render() {
    const { route } = this.state;
    let content: JSX.Element;
    switch (route) {
      case 'appcssdynamic':
        content = <AppCSSDynamic />;
        break;
      default:
        content = <div>Hello</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button disabled={route === 'hello'} onClick={this.handleHelloClick} type="button">
            Hello
          </button>
          <button
            disabled={route === 'appcssdynamic'}
            onClick={this.handleAppCSSDynamicClick}
            type="button"
          >
            AppCSSDynamic
          </button>
          {content}
        </header>
      </div>
    );
  }

  private handleAppCSSDynamicClick = () => this.setState({ route: 'appcssdynamic' });

  private handleHelloClick = () => this.setState({ route: 'hello' });
}

export default App;
