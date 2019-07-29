import { IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import Search from '@material-ui/icons/Search'
import * as React from 'react'

interface IState {
    input: string,
    result: any,
    body:any,
}

interface IProps {
    currentCoin:any,
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
        if(this.state.input.trim() === ""){
            this.setState({result:[]},()=>this.makeTableBody())
        }else{
            fetch("https://scriberapi.azurewebsites.net/api/Videos/SearchByTranscriptions/"+this.state.input, {
                headers: {
                  Accept: "text/plain"
                },
                method:"GET"
            }).then(response => {
                return response.json()
            }).then(answer => {
                this.setState({result:answer},()=>this.makeTableBody())
            })
        }
    }

    public handleTableClick = (coinSymbol:any) => {
        window.scrollTo(0,0);
        // this.props.play(videoUrl + "&t=" + timedURL + "s")
    }

    public makeTableBody = () => {
        const toRet: any[] = [];
        this.state.result.sort((a:any, b:any)=>{
            if(a.coinSymbol === b.coinSymbol){
                return 0;
            }else if(a.coinSymbol === this.props.currentCoin){
                return -1;
            }else if(b.coinSymbol === this.props.currentCoin){
                return 1;
            }
            else{
                return a.coinSymbol.localeCompare(b.coinSymbol);
            }
        })
        this.state.result.forEach((coin: any) => {
            coin.exchange.forEach((exchange: any) => {
                toRet.push(
                    <tr onClick={() => this.handleTableClick(coin.coinSymbol)}>
                        <td>{exchange.exchangeName}</td>
                        <td>{exchange.coinSymbol}</td>
                        <td>{exchange.pairs}</td>
                        <td>{exchange.isActive}</td>
                    </tr>)
            })
        });
        if (toRet.length === 0) {
            if(this.state.input.trim() === ""){
                const errorCase = <div><p>Sorry you need to still search</p></div>
                this.setState({body:errorCase})
            }else{
                const errorCase = <div><p>Sorry no results were returned for "{this.state.input}"</p></div>
                this.setState({body:errorCase})
            }
        }
        else{
            this.setState({body:toRet})
        }
    }

    public render() {
        return (
            <div className="caption-area">
                <div className="row">
                    <div className="col-2 justify-content-center align-self-center">
                        <h1><span className="red-heading">Search</span> Trading Pairs</h1>
                    </div>
                    <div className="col-10">
                        
                        <TextField
                            id="Search-Bar"
                            className="SearchBar"
                            placeholder="Search Captions"
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
                        <th>Trading Pairs</th>
                        <th>Active</th>
                    </tr>
                    <tbody className="captionTable">
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}