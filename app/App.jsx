import React, { Fragment } from 'react';
import {
    binds, ut,
} from 'fmihel-browser-lib';
import { connect } from 'react-redux';
import Debug from 'COMPONENTS/Debug/Debug.jsx';
import redux from 'REDUX';
import AppFrame from 'COMPONENTS/AppFrame/AppFrame.jsx';

class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onPress');
    }

    onPress() {
        redux.actions.debug({
            test: ut.random_str(5),
            test2: ut.random_str(5),
        });
    }

    render() {
        return (
            <Fragment>
                <AppFrame>
                    <div>
                        <button onClick={this.onPress} className="btn btn-secondary btn-sm"><i className="far fa-address-book"></i> press</button>
                    </div>
                    <div>
                        {this.props.app.ContentText}
                    </div>
                </AppFrame>
                <Debug/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.app,
});

export default connect(mapStateToProps)(App);
