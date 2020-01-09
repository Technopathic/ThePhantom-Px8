/** @jsx jsx **/
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import * as Scroll from 'react-scroll';
import handleViewport from 'react-in-viewport';

import Styles from './styles.js';

import ControllerOne from '../../assets/videos/video_footage_1.mp4';

class Controller extends React.PureComponent {
    componentDidMount() {
        document.getElementById("controllerOne").muted = "true";
    }

    render() {
        return(
            <Scroll.Element id="heroContainer" name="controller" css={Styles.heroContainer}>
                <div css={this.props.inView.includes('controller') ? Styles.heroText : null}>Phantom Controller.</div>
                <div css={Styles.heroVideo}>
                    <video id="controllerOne" muted="muted" autoPlay playsInline>
                        <source src={ControllerOne} type="video/mp4" />
                    </video>
                </div>
            </Scroll.Element>
        )
    }
}

function mapStateToProps(state) {
    return {
        inView: state.getIn(['data', 'inView'], Immutable.List()),
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(handleViewport(Controller));