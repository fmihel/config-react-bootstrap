import React from 'react';
import { flex } from 'fmihel-browser-lib';


export class App extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                       react
                    </div>
                    <div className="col">
                        bootstrap
                    </div>
                    <div className="col">
                        ok
                    </div>
                </div>
            </div>
        );
    }
}
