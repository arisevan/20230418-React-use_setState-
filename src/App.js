import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    // 要調用Component的底層函數就一定要super
    super();

    this.state = {
      name: 'Angel',
    }

    // this.Mii = 'hi';

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span>Hello! {this.state.name}</span>
          </p>
          <button
            onClick={() => {
              // this.setState({name: 'Eva'})
              this.setState(
                ()=> {
                  return {
                    name: "Eva"
                  }
                },
                // 這邊放 callback,畫面渲染完才會執行
                // 所以會是最新的
                // callback是選擇性調用
                () => {
                  console.log(this.state)
                }
              )
              // ˊ執行有分同步和非同步,在這裡不會拿到最新的資料
              // console.log(this.state)
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

  
export default App;
