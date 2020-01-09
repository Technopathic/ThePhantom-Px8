/** @jsx jsx **/
import React from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as dataActionCreators from '../../actions/dataActions';
import * as Scroll from 'react-scroll';

import Styles from './styles.js';

const Header = React.lazy(() => import('../../components/Header'));
const Controller = React.lazy(() => import('../../components/Controller'));
const Features = React.lazy(() => import('../../components/Features'));

class Home extends React.PureComponent {
  state = {
    intervalID: null,
    activateTransition:""
  };

  componentDidMount() {
    if(!this.state.intervalID) { this.startTimer(); }

    setTimeout(() => {
        this.props.dataActions.initApp();
    }, 5500);


    window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    document.addEventListener('wheel', this.preventDefault, {passive: false});
    window.onwheel = this.preventDefault;
    window.ontouchmove  = this.preventDefault;
    document.onkeydown  = this.preventDefaultForScrollKeys;
  }

  preventDefault = (e) =>{
    e = e || window.event;
    if (e.preventDefault) {}
  }

  preventDefaultForScrollKeys = (e) => {
    let keys = [32, 33, 36, 34, 35, 37, 38, 39, 40];
    if (keys.includes(e.keyCode)) {
        e.preventDefault(e);
        if(e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 33 || e.keyCode === 36) {
          Scroll.animateScroll.scrollToTop();
        } else if(e.keyCode === 40 || e.keyCode === 32 || e.keyCode === 34 || e.keyCode === 35) {
          Scroll.animateScroll.scrollToBottom();
        }
        return false;
    }
}

  componentWillUnmount() {
    this.stopTimer();
  }

  handleSetView = (view) => {
    if(view === 'controller') {
      this.handleViewEnter('controller');
    } else if(view === 'features') {
      this.handleViewEnter('features');
    }
  }

  handleViewEnter = (view) => {
    let inView = this.props.inView;
    if(!inView.includes(view)) {
      inView.push(view);
    }

    this.props.dataActions.setView(inView).then(() => {
      if(view === 'controller') {
        this.setState({ activateTransition: 'features' }, () => {
            Scroll.animateScroll.scrollToTop();
            let video = document.getElementById("controllerOne");
            video.play();
        });
      } else if(view === 'features') {
        this.setState({ activateTransition: 'controller' }, () => {
            Scroll.animateScroll.scrollToBottom();
            let video = document.getElementById("controllerTwo");
            video.play();
        }); 
      }
    });
  }

  handleViewLeave = (view) => {
    let inView = this.props.inView;
    if(inView.includes(view)) {
      inView.splice(inView.indexOf(view), 1);
    }

    this.props.dataActions.setView(inView);
  }

  startTimer = () => {
    let intervalID = setInterval(() => {
        this.props.dataActions.setFeature(this.props.activeFeature + 1).then(() => {
            if(this.props.activeFeature === this.props.features.length) {
                this.props.dataActions.setFeature(0)
            }
        })
    }, 5000);

    this.setState({ intervalID });
  }

  stopTimer = () => {
    clearInterval(this.state.intervalID);
    this.setState({
      intervalID: null,
    })
    this.props.dataActions.setFeature(0)
  }

  render() {

    if(!this.props.appInit) {
      return (
        <div css={Styles.loadContainer}>
          <div css={Styles.loadBar}>
            <div css={Styles.loadBarFill}></div>
          </div>
        </div>
      )
    }
    return(
      <div css={Styles.container}>
        <React.Suspense fallback={`<div></div>`}>
            <Header handleSetView={this.handleSetView}/>
        </React.Suspense>
        <div css={this.state.activateTransition === 'controller' ? [Styles.main, Styles.containerExit] : Styles.main}>
          <React.Suspense fallback={`<div></div>`}>
            <Controller onEnterViewport={() => this.handleViewEnter('controller')} onLeaveViewport={() => this.handleViewLeave('controller')}/>
          </React.Suspense>
          <React.Suspense fallback={`<div></div>`}>
            <Features onEnterViewport={() => this.handleViewEnter('features')} onLeaveViewport={() => this.handleViewLeave('features')}/>
          </React.Suspense>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        appInit: state.getIn(['data', 'appInit'], Immutable.List()),
        inView: state.getIn(['data', 'inView'], Immutable.List()),
        features: state.getIn(['data', 'features'], Immutable.List()),
        activeFeature: state.getIn(['data', 'activeFeature'], Immutable.List()),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dataActions: bindActionCreators(dataActionCreators, dispatch)
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) (Home);