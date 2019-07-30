import * as React from 'react';
import ExchangeArea from 'src/Components/ExchangeArea';
import Header from 'src/Components/Header';
import CoinList from 'src/Components/CoinList';
import 'src/App.css'

interface IState {
  updateCoinList: any,
  player: any,
  coinSymbol: string
  coinList: object
}

class App extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props);
    this.state = {
      coinList: [],
      coinSymbol: "",
      player: null,
      updateCoinList: null,
      
    }
  }

  public setRef = (playerRef: any) => {
    this.setState({
      player: playerRef
    })
  }

  public addCoin = (sym: string) => {
    const body = {"sym": sym}
    fetch("https://cryptocognizantapidevops.azurewebsites.net/api/Coins", {
      body: JSON.stringify(body),
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(() => {
      this.state.updateCoinList();
    })
  }

  public updateSym = (sym: string) => {
    if(this.state.coinSymbol === sym){
      this.setState({coinSymbol : ""},() => this.setState({coinSymbol: sym}))
    }else{
      this.setState({coinSymbol:sym})
    }
  }

  public listMounted = (callbacks: any) => {
    this.setState({ updateCoinList: callbacks })
  }

  public render() {
    return (<div>
      <Header addCoin={this.addCoin} />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h1>Coin info Placeholder</h1>
          </div>
          <div className="col-3">
            <CoinList play={this.updateSym} mount={this.listMounted} />
          </div>
        </div>
        <ExchangeArea currentCoin={this.state.coinSymbol} play={this.updateSym} />
      </div>
    </div>)
  }
}

export default App;