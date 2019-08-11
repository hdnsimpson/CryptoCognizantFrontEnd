import * as React from 'react';

interface IProps{
    addCoin:any,
}

interface IState{
    input:string
}

export default class HeaderNoSearch extends React.Component<IProps,IState> {
    public constructor(props:any){
        super(props);
        this.state = {
            input:""
        }
    }

    public render() {
        return (
            <div className="headerNoSearch">
                <div className="container">
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <img className="logo" src="../CC.png" alt="Crypto Cognizant Logo"/>
                            <h1><span className="red-heading">Crypto </span>Cognizant</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
