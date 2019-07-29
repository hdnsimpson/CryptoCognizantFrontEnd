import { IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import AddCircle from '@material-ui/icons/AddCircle'
import * as React from 'react';

interface IProps{
    addCoin:any,
}

interface IState{
    input:string
}

export default class Header extends React.Component<IProps,IState> {
    public constructor(props:any){
        super(props);
        this.state = {
            input:""
        }
    }

    public addCoin = () =>{            
        this.props.addCoin(this.state.input)
    }

    public render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2 justify-content-center align-self-center">
                            <h1><span className="red-heading">Crypto </span>Cognizant</h1>
                        </div>
                        <div className="col-10">
                            <TextField
                            id= "Search-Bar"
                            className = "SearchBar"
                            placeholder="Add Coin Symbol"
                            margin="normal"
                            onChange = { (event: any ) => this.setState({input:event.target.value})}
                            value = {this.state.input}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={this.addCoin}>
                                        <AddCircle/>
                                    </IconButton>
                                </InputAdornment>,
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
