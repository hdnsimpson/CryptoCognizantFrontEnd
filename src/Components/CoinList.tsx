import Close from '@material-ui/icons/Close'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import * as React from 'react'

interface IState{
    coinList: any
}

interface IProps{
    mount:any
    play:any
}

export default class CoinList extends React.Component<IProps,IState>{
    public constructor(props:any){
        super(props);
        this.state = {
            coinList: []
        }
        this.updateList();
    }

    public deleteCoin = (id:any) => {
        fetch("https://scriberapi.azurewebsites.net/api/Videos/"+id,{
            method:'DELETE'
        }).then(() => {
            this.updateList()
        })
    }

    public playCoin = (coinSymbol:string) => {
        this.props.play(coinSymbol)
    }

    public updateList = () => {
        fetch('https://cryptocognizantapidevops.azurewebsites.net/api/Coins',{
            method:'GET'
        }).then((ret:any) => {
            return ret.json();
        }).then((result:any) => {
            const output:any[] = []
            result.forEach((coin:any) => {
                const row = (<tr>
                    <td className="align-middle" onClick={() => this.handleLike(coin)}>{coin.isFavourite === true?<Star/>:<StarBorder/>}</td>
                    <td className="align-middle" onClick={() => this.playCoin(coin.coinSymbol)}><img src={"https://www.cryptocompare.com" + coin.imageUrl} width="40px" alt="Coin Image"/></td>
                    <td className="align-middle" onClick={() => this.playCoin(coin.coinSymbol)}><b>{coin.coinSymbol}</b></td>
                    <td className="align-middle video-list-close"><button onClick={() => this.deleteCoin(coin.coinId)}><Close/></button></td>
                </tr>)
                if(coin.isFavourite){
                    output.unshift(row);
                }else{
                    output.push(row);
                }
            });
            this.setState({coinList:output})
        })
    }

    public handleLike = (coin:any) => {
        const toSend = [{
            "from":"",
            "op":"replace",
            "path":"/isFavourite",
            "value":!coin.isFavourite,
        }]
        fetch("https://scriberapi.azurewebsites.net/api/Videos/update/"+coin.coinId, {
            body:JSON.stringify(toSend),
            headers: {
              Accept: "text/plain",
              "Content-Type": "application/json-patch+json"
            },
            method: "PATCH"
          }).then(() => {
              this.updateList();
          })
    }
    
    public componentDidMount = () => {
        this.props.mount(this.updateList)
        this.updateList()
    }



    public render() {
        return (
            <div className="video-list">
                <h1 className="play-heading"><span className="red-heading">Select </span>Coin</h1>
                <table className="table">
                    {this.state.coinList}
                </table>
            </div>
        )
    }
}