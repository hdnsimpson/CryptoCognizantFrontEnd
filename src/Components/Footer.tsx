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
                                url="https://cryptocognizant.azurewebsites.net/">
                                <FacebookIcon
                                    size={32}
                                    round={true} />
                            </FacebookShareButton>
                        </div>
                        <div className="sharable">
                            <TwitterShareButton
                                url="https://cryptocognizant.azurewebsites.net/">
                                <TwitterIcon
                                    size={32}
                                    round={true} />
                            </TwitterShareButton>
                        </div>
                        <div className="sharable">
                            <WhatsappShareButton
                                url="https://cryptocognizant.azurewebsites.net/">
                                <WhatsappIcon
                                    size={32}
                                    round={true} />
                            </WhatsappShareButton>
                        </div>
                        <div className="sharable">
                            <RedditShareButton
                                url="https://cryptocognizant.azurewebsites.net/">
                                <RedditIcon
                                    size={32}
                                    round={true} />
                            </RedditShareButton>
                        </div>
                        <div className="sharable">
                            <TumblrShareButton
                                url="https://cryptocognizant.azurewebsites.net/">
                                <TumblrIcon
                                    size={32}
                                    round={true} />
                            </TumblrShareButton>
                        </div>
                        <div className="sharable">
                            <EmailShareButton
                                url="https://cryptocognizant.azurewebsites.net/">
                                <EmailIcon
                                    size={32}
                                    round={true} />
                            </EmailShareButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
