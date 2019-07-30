import * as React from 'react';


export default class Header extends React.Component<{}> {
    public constructor(props:any){
        super(props);
    }

    public render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <h1><span className="red-heading">Share </span>this site</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
