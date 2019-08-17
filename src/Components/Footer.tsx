import * as React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    TumblrShareButton,
    TumblrIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';


export default class Header extends React.Component<{}> {
    public constructor(props: any) {
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
                    <div className="row">
                        <div className="sharable">
                            <FacebookShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                quote="I keep track of my trading pairs with Crypto Cognizant!"
                                hashtag="#Cryptocurrency">
                                <FacebookIcon
                                    size={32}
                                    round={true} />
                            </FacebookShareButton>
                        </div>
                        <div className="sharable">
                            <TwitterShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                title="Crypto Cognizant">
                                <TwitterIcon
                                    size={32}
                                    round={true} />
                            </TwitterShareButton>
                        </div>
                        <div className="sharable">
                            <WhatsappShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                title="Crypto Cognizant">
                                <WhatsappIcon
                                    size={32}
                                    round={true} />
                            </WhatsappShareButton>
                        </div>
                        <div className="sharable">
                            <RedditShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                title="Crypto Cognizant">
                                <RedditIcon
                                    size={32}
                                    round={true} />
                            </RedditShareButton>
                        </div>
                        <div className="sharable">
                            <TumblrShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                title="Crypto Cognizant"
                                caption="I keep track of my trading pairs with Crypto Cognizant!">
                                <TumblrIcon
                                    size={32}
                                    round={true} />
                            </TumblrShareButton>
                        </div>
                        <div className="sharable">
                            <EmailShareButton
                                url="https://cryptocognizant.azurewebsites.net/"
                                subject="Crypto Cognizant"
                                body="I keep track of my trading pairs with Crypto Cognizant!">
                                <EmailIcon
                                    size={32}
                                    round={true} />
                            </EmailShareButton>
                        </div>
                    </div>
                    <div className="spacer" />
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <h2><span className="red-heading">From </span>the creator</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <p className="links"><b><a href="https://github.com/hdnsimpson" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/hayden-simpson/" target="_blank">LinkedIn</a> | <a href="mailto: hdnsimpson@gmail.com" target="_blank">Email</a></b></p>
                        </div>
                    </div>
                    <div className="spacerSmall" />
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <h2><span className="red-heading">Other </span>information</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 justify-content-center align-self-center">
                            <p className="links"><b><a href="https://www.freeprivacypolicy.com/privacy/view/0e2e833bfc28ebf57793f76858c743f7" target="_blank">Privacy Policy</a> | <a href="https://cryptocognizantapidevops.azurewebsites.net/index.html" target="_blank">API Documentation</a></b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
