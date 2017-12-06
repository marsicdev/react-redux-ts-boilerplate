import * as React from 'react';

import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br /><br />
                    <h1 className="header center orange-text">Starter Template</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">
                            A modern responsive front-end framework based on Material Design
                        </h5>
                    </div>
                    <div className="row center">
                        <a
                            href="#"
                            id="download-button"
                            className="btn-large waves-effect waves-light orange"
                        >
                            Get Started
                        </a>
                    </div>
                    <br />
                    <br />

                </div>
            </div>
        );
    }
}

export default Main;
