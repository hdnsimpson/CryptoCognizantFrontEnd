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
                            <h2><span className="red-heading">Share </span>this site</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
