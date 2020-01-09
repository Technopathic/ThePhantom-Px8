/** @jsx jsx **/
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as dataActionCreators from '../../actions/dataActions';

import * as Scroll from 'react-scroll';

import Styles from './styles.js';

class Header extends React.PureComponent {

    handleLang = (activeLang) => {
        this.props.dataActions.setLang(activeLang);
    }

    render() {
        return (
            <div css={Styles.header}>
                <div css={Styles.headerWrapper}>
                    <div css={Styles.headerLeft}>
                    <Scroll.Link to="features" smooth={true} duration={500} offset={50} css={Styles.headerItemFeatures} onClick={() => this.props.handleSetView('features')}>
                        Features
                    </Scroll.Link>
                    <Scroll.Link to="controller" smooth={true} duration={500} css={Styles.headerItemController} onClick={() => this.props.handleSetView('controller')}>
                        Controller
                    </Scroll.Link>
                    </div>
                    <div css={Styles.headerCenter}>
                    ThePhantom
                    </div>
                    <div css={Styles.headerRight}>
                    {this.props.activeLang === 'en' ?
                        <div css={Styles.headerItemLang}>EN</div>
                        : <div css={[Styles.headerItemLang, Styles.headerItemLangInactive]} onClick={() => this.handleLang('en')}>EN</div>
                    }
                    {this.props.activeLang === 'fi' ?
                        <div css={Styles.headerItemLang}>FI</div>
                        : <div css={[Styles.headerItemLang, Styles.headerItemLangInactive]} onClick={() => this.handleLang('fi')}>FI</div>
                    }
                    {this.props.activeLang === 'se' ?
                        <div css={Styles.headerItemLang}>SE</div>
                        : <div css={[Styles.headerItemLang, Styles.headerItemLangInactive]} onClick={() => this.handleLang('se')}>SE</div>
                    }
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        activeLang: state.getIn(['data', 'activeLang'], Immutable.List()),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataActions: bindActionCreators(dataActionCreators, dispatch)
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) (Header);