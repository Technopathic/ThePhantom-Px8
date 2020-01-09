/** @jsx jsx **/
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import * as Scroll from 'react-scroll';
import handleViewport from 'react-in-viewport';

import ControllerTwo from '../../assets/videos/video_footage_2.mp4';

import Styles from './styles.js';

class Features extends React.PureComponent {

    componentDidMount() {
        document.getElementById("controllerTwo").muted = "true";
    }

    renderFeatures = (feature, i) => {
        if(i === this.props.activeFeature) {
            return (
                <div css={this.props.inView.includes('features') ? Styles.featuresListItem : null } key={i}>
                    <div css={Styles.featuresListItemBar}>
                        <div css={Styles.itemBarContainer}>
                            <div css={Styles.itemBarFill}></div>
                        </div>
                    </div>
                    <div css={Styles.featuresListItemInfo}>
                        <div css={Styles.featuresListItemTitle}>{feature.title}</div>
                        <div css={this.props.inView.includes('features') ? Styles.featuresListItemContent : null}>{feature.content}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div css={this.props.inView.includes('features') ? [Styles.featuresListItem, Styles.featuresListItemInactive] : null} key={i}>
                    <div css={Styles.featuresListItemBar}>
                        <div css={Styles.itemBarContainer}></div>
                    </div>
                    <div css={Styles.featuresListItemInfo}>
                        <div css={this.props.inView.includes('features') ? [Styles.featuresListItemTitle, Styles.featuresListItemTitleInactive]: null}>{feature.title}</div>
                        <div css={this.props.inView.includes('features') ? Styles.featuresListItemContent : null}></div>
                    </div>
                </div>
            )  
        }
    }

    render() {
        return (
            <Scroll.Element id="featuresContainer" name="features" css={Styles.featuresContainer}>
                <div css={Styles.featuresLeft}>
                    <div css={this.props.inView.includes('features') ? Styles.featuresLeftTitle : null}>The all<br/> new controller</div>
                    <div css={this.props.inView.includes('features') ? Styles.featuresLeftList : null}>
                        {this.props.features.map((feature, i) => (
                            this.renderFeatures(feature, i)
                        ))}
                    </div>
                </div>
                <div css={Styles.featuresRight}>
                    <video id="controllerTwo" muted="muted" autoPlay playsInline>
                        <source src={ControllerTwo} type="video/mp4" />
                    </video>
                </div>
            </Scroll.Element>
        )
    }
}


function mapStateToProps(state) {
    return {
        features: state.getIn(['data', 'features'], Immutable.List()),
        activeFeature: state.getIn(['data', 'activeFeature'], Immutable.List()),
        inView: state.getIn(['data', 'inView'], Immutable.List()),
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(handleViewport(Features));