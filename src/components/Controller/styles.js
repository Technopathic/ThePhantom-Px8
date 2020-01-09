import { css, keyframes } from '@emotion/core';

const fadeInUpStroke = keyframes`
    0% {
        transform: translate3d(0, 40px, 0);
        opacity:0;
        color: rgba(0, 0, 0, 1);	
    }

    25% {
        color: rgba(0, 0, 0, 1);	
    }

    50% {
        transform: translate3d(0, 0, 0);
    }

    75% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        color: rgba(255, 255, 255, 1);	
    }

    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        color: rgba(255, 255, 255, 1);	
    }
`;


const heroContainer = css`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:110vh;
`;

const heroText = css`
    text-transform:uppercase;
    height: 155px;	
    width: 751px;	
    color: rgba(0, 0, 0, 1);	
    font-family:'MonumentExtended-Regular';
    font-size: 74px;	
    letter-spacing: 7px;	
    line-height: 77px;	
    text-align: center;
    opacity:0;
    animation: ${fadeInUpStroke} 2s forwards;
    animation-delay: 1.3s;
    text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;
    user-select:none;
`;

const heroVideo = css`
    margin-top:28px;

    video {
        height: 388px;	
        width: 921px;
    }
`;

export default {
    heroContainer,
    heroText,
    heroVideo
}