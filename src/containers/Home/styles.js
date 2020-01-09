import { css, keyframes } from '@emotion/core';

const loadAnim = keyframes`
    0% { width: 0px; }
    33% { width: 200px; }
    40% { width: 200px; }
    66% { width: 400px; }
    73% { width: 400px; }
    100% { width: 600px; }
`;

const fadeOut = keyframes`
    from { opacity:1; }
    to { opacity: 0; }
`;

const containerTransition = keyframes`
    0% { opacity:1; }
    30% { opacity: 0; }
    60% { opacity: 0; }
    100% { opacity:1; }
`;


const container = css`
    width:100%;
    max-width:1440px;
    min-height:100vh;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
`;

const main = css`
    display:flex;
    flex-direction:column;
`;

const loadContainer = css`
    background:#000000;
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    animation: ${fadeOut} 0.5s forwards;
    animation-delay: 5s;
`;

const loadBar = css`
    width:600px;
    height:5px;
    background:#303030;
`;

const loadBarFill = css`
    width:600px;
    height:3px;
    background:#FFFFFF;
    animation: ${loadAnim} 5s ease forwards;
`;

const containerExit = css`
    animation: ${containerTransition} 1s forwards;
`;

export default {
    container,
    main,
    loadContainer,
    loadBar,
    loadBarFill,
    containerExit
}