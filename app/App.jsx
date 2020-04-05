import React, { Fragment } from 'react';
import {
    flex, binds, JX, dvc, ut,
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
                        Content
                    </div>
                </AppFrame>
                <Debug/>
            </Fragment>
        );
    }

    render2() {
        return (
            <Fragment>

                <div className="container-fluid" style={{ ...flex('vert') }}>
                    <div className="row" id="panel">
                        <div className="col">
                            <div className="card text-white bg-dark ">
                                <div className="card-body">
                                    <button onClick={this.onPress} className="btn btn-secondary btn-sm"><i className="far fa-address-book"></i> press</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row content" style={{ ...flex('stretch') }}>
                        <div className="col">
                        place test content in this

                        </div>
                    </div>
                </div>
                <div className="btn btn-collapse btn-secondary" onClick={this.onCollapse}><i className="fas fa-angle-double-right"></i></div>
                <Debug/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxData: state,
});

export default connect(mapStateToProps)(App);
