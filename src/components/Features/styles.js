import { css, keyframes } from '@emotion/core';

const fadeInUp = keyframes`
    from {
        opacity:0;
        transform: translate3d(0, 40px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const fadeInUpItem = keyframes`
    0% {
        opacity:0;
        transform: translate3d(0, 10px, 0);
    }
    30% {
        opacity:1;
        transform: translate3d(0, 0px, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const verticalLoad = keyframes`
    0% {
        height:0px;
    }
    96% {
        height:112px;
    }
    100% {
        height:10px;
    }
`;

const featuresContainer = css`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    min-height:110vh;
`;

const featuresLeft = css`
    display:flex;
    flex-direction:column;
    min-height: 389px;	
    width: 406px;
    margin-right:177px;
    margin-top:150px;
`;

const featuresRight = css`
    margin-top:150px;
    video {
        height: 675px;	
        width: 659px;
    }
`;

const featuresLeftTitle = css`
    font-family:'MonumentExtended-Regular';
    margin-bottom:38px;
    height:100px;	
    width:406px;	
    color:#EDECEA;	
    font-size:38px;	
    line-height:50px;
    animation: ${fadeInUp} 0.6s both;
    animation-delay: 0.5s;
`;

const featuresLeftList = css`
    display:flex;
    flex-direction:column;
    width:100%;
`;

const featuresListItem = css`
    display:flex;
    flex-direction:row;
    margin-bottom:30px;
    width:375px;
    animation: ${fadeInUp} 1s both;
    animation-delay: 0.5s;
    cursor:pointer;
    height:120px;
    transition: all 0.4s ease-out;


    &:first-of-type {
        animation: ${fadeInUp} 0.8s both;
        animation-delay: 0.5s;
    }

    &:last-child {
        animation: ${fadeInUp} 1.2s both;
        animation-delay: 0.5s;
    }
    
`;

const featuresListItemInactive = css`
    height:35px;
    overflow:hidden;
`;  

const featuresListItemInfo = css`
    display:flex;
    flex-direction:column;
`;

const featuresListItemTitle = css`
    font-family:'MonumentExtended-Regular';
    font-size:24px;
    margin-bottom:7px;
    height: 35px;	
    width: 225px;	
    color: #EDECEA;	
    line-height: 35px;
    transition: all 0.3s ease-in;

`;

const featuresListItemTitleInactive = css`
    color: #303030;
    transition: all .2s ease-in;

    &:hover {
        color:#EDECEA;
    }
`;

const featuresListItemContent = css`
    font-family:'Montserrat-Regular';
    color:#EDECEA;
    font-size:16px;
    line-height:26px;
    letter-spacing: -0.36px;
    height: 78px;	
    width: 347px;

    animation: ${fadeInUpItem} 5s both infinite;
`;

const featuresListItemBar = css`
    width:30px;
`;

const itemBarContainer = css`
    height:112px;
    width:1px;
    background:#303030;
`;

const itemBarFill = css`
    height:112px;
    width:1px;
    background:#FFFFFF;
    animation: ${verticalLoad} 5s linear forwards infinite;
`;

export default {
    featuresContainer,
    featuresLeft,
    featuresRight,
    featuresLeftTitle,
    featuresLeftList,
    featuresListItem,
    featuresListItemInactive,
    featuresListItemInfo,
    featuresListItemTitle,
    featuresListItemTitleInactive,
    featuresListItemContent,
    featuresListItemBar,
    itemBarContainer,
    itemBarFill
}