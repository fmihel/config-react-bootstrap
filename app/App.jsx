import React, { Fragment } from 'react';
import {
    flex, binds, JX, dvc,
} from 'fmihel-browser-lib';


export class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onCollapse', 'updateHeightBtnCollapse');
        this.jq = {};
        JX.window.on('resize', () => { this.updateHeightBtnCollapse(); });
    }

    $get(name) {
        if ((!(name in this.jq)) || (!this.jq[name].length)) {
            this.jq[name] = $(name);
        }
        return this.jq[name];
    }

    onCollapse() {
        /** смещение кнопки по горизонтали, если присутствует скролинг */
        let css = { right: '0px' };
        const c = this.$get('.content');
        if ((b.hasClass('fa-flip-horizontal')) && (!dvc.mobile)) {
            if (c[0].scrollHeight > c[0].clientHeight) css = { right: '0.95rem' };
        }
        b.css(css);
    }

    componentDidMount() {
        this.updateHeightBtnCollapse();
    }

    updateHeightBtnCollapse() {
        const h = this.$get('#panel').height();
        this.$get('.btn-collapse').css({ height: `${h}px`, lineHeight: `${h}px` });
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid" style={{ ...flex('vert') }}>
                    <div className="row" id="panel">
                        <div className="col">
                            <div className="card text-white bg-dark ">
                                <div className="card-body">
                                    <button className="btn btn-secondary btn-sm"><i className="far fa-address-book"></i> press</button>
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
            </Fragment>
        );
    }
}
