import * as React from 'react';
import ExchangeArea from 'src/Components/ExchangeArea';
import Header from 'src/Components/Header';
import Footer from 'src/Components/Footer';
import CoinList from 'src/Components/CoinList';
import 'src/App.css';
import FacebookLogin from 'react-facebook-login';
import HeaderNoSearch from './Components/HeaderNoSearch';

interface IState {
  authenticated: boolean,
  updateCoinList: any,
  player: any,
  coinSymbol: string
  coinList: object
}

class App extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props);
    this.state = {
      authenticated: false,
      coinList: [],
      coinSymbol: "",
      player: null,
      updateCoinList: null,

    }

    this.responseFacebook = this.responseFacebook.bind(this)
    this.facebookLoginClicked = this.facebookLoginClicked.bind(this)
  }

  public setRef = (playerRef: any) => {
    this.setState({
      player: playerRef
    })
  }

  public addCoin = (sym: string) => {
    const body = { "sym": sym }
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
    if (this.state.coinSymbol === sym) {
      this.setState({ coinSymbol: "" }, () => this.setState({ coinSymbol: sym }))
    } else {
      this.setState({ coinSymbol: sym })
    }
  }

  public listMounted = (callbacks: any) => {
    this.setState({ updateCoinList: callbacks })
  }

  public render() {
    return (
      <div>
        {(!this.state.authenticated) ?
          <div>
            <HeaderNoSearch addCoin={this.addCoin} />
            <div className="container">
              <div className="row">
                <div className="auth">
                  <p className="authMessage">Please authenticate with Facebook to begin</p>
                  <FacebookLogin
                    appId="2310147239225554"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.facebookLoginClicked}
                    callback={this.responseFacebook}
                  />
                </div>
              </div>
            </div>
            <Footer />
          </div>
          : ""}

        {(this.state.authenticated) ?
          <div>
            <Header addCoin={this.addCoin} />
            <div className="container">
              <div className="row">
                <div className="col-9">
                  <ExchangeArea currentCoin={this.state.coinSymbol} play={this.updateSym} />
                </div>
                <div className="col-3">
                  <CoinList play={this.updateSym} mount={this.listMounted} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
          : ""}
      </div>
    )
  }

  private facebookLoginClicked(response: any) {
    this.responseFacebook(response);
  }

  private responseFacebook = (response: any) => {
    console.log(response);
    if (!(response.name === "")) {
      this.setState({ authenticated: true })
    }
  }
}

export default App;