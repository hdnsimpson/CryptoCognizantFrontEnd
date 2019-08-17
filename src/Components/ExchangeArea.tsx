import { IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import Search from '@material-ui/icons/Search'
import * as React from 'react'

interface IState {
    input: string,
    result: any,
    body: any,
}

interface IProps {
    currentCoin: any,
    play: any
}

export default class ExchangeArea extends React.Component<IProps, IState>{
    public constructor(props: any) {
        super(props);
        this.state = {
            body: [],
            input: "",
            result: [],
        }
    }


    public search = () => {
        let sym:string = this.state.input;
        sym = sym.replace(/"/g, '');
        sym = sym.replace(/'/g, '');
        sym = sym.replace(/&/g, '');
        sym = sym.replace(/</g, '');
        sym = sym.replace(/>/g, '');
        if (sym.trim() === "") {
            this.setState({ result: [] }, () => this.makeTableBody())
        } else {
            fetch("https://cryptocognizantapidevops.azurewebsites.net/api/Coins/SearchByPairs/" + sym, {
                headers: {
                    Accept: "text/plain"
                },
                method: "GET"
            }).then(response => {
                return response.json()
            }).then(answer => {
                this.setState({ result: answer }, () => this.makeTableBody())
            })
        }
    }

    public handleTableClick = (coinSymbol: any) => {
        window.scrollTo(0, 0);
    }

    public makeTableBody = () => {
        const toRet: any[] = [];
        this.state.result.sort((a: any, b: any) => {
            if (a.coinSymbol === b.coinSymbol) {
                return 0;
            } else if (a.coinSymbol === this.props.currentCoin) {
                return -1;
            } else if (b.coinSymbol === this.props.currentCoin) {
                return 1;
            }
            else {
                return a.coinSymbol.localeCompare(b.coinSymbol);
            }
        })
        this.state.result.forEach((coin: any) => {
            coin.exchange.forEach((exchange: any) => {
                toRet.push(
                    <tr>
                        <td><span className="red-heading"><b>{exchange.exchangeName}</b></span></td>
                        <td>{exchange.coinSymbol}</td>
                        <td className="pairings">{exchange.pairs}</td>
                    </tr>)
            })
        });
        if (toRet.length === 0) {
            if (this.state.input.trim() === "") {
                const errorCase = <div><p>Sorry you need to still search</p></div>
                this.setState({ body: errorCase })
            } else {
                const errorCase = <div><p>Sorry no results were returned for "{this.state.input}"</p></div>
                this.setState({ body: errorCase })
            }
        }
        else {
            this.setState({ body: toRet })
        }
    }

    public render() {
        return (
            <div className="exchange-area">
                <div className="row">
                    <div className="col-3 justify-content-center align-self-center">
                        <h2><span className="red-heading">Trading</span> Pairs</h2>
                    </div>
                    <div className="col-9">

                        <TextField
                            id="Search-Bar"
                            className="SearchBar"
                            placeholder="Search Pairs"
                            margin="normal"
                            variant="outlined"
                            onChange={(event: any) => this.setState({ input: event.target.value })}
                            value={this.state.input}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => this.search()}>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </div>
                </div>
                <br />
                <table className="table">
                    <tr>
                        <th>Exchange</th>
                        <th>Coin Symbol</th>
                        <th className="pairings">Trading Pairs</th>
                    </tr>
                    <tbody className="exchangeTable">
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}