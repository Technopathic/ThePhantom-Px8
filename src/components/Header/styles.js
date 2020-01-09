import { css, keyframes } from '@emotion/core';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const scaleIn = keyframes`
    from { 
        opacity: 0;
        transform: scale(.9); 
    }
    to  { 
      opacity: 1;
      transform: scale(1);  
    }
`;

const header = css`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:fixed;
    height:135px;
    top:0;
    left:0;
    right:0;
    z-index:99;
`;

const headerWrapper = css`
    height:29px;
    width:862px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;

`;

const headerLeft = css`
    display:flex;
    flex-direction:row;
    align-items:center;
    animation: ${fadeIn} 1.5s both;
    animation-delay: 1.6s;
`;

const headerCenter = css`
    height: 29px;	
    width:300px;
    color: #FFFFFF;	
    font-family: "MonumentExtended-Regular";	
    font-size: 20px;	
    letter-spacing: 7.27px;	
    line-height: 29px;	
    text-transform:uppercase;
    animation: ${scaleIn} 1s both;
    animation-delay: 1.3s;

`;

const headerRight = css`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    width:170px;
    animation: ${fadeIn} 1.5s both;
    animation-delay: 1.6s;
`;

const headerItemLang = css`
    height:19px;	
    width:21px;	
    color:#FFFFFF;	
    font-family:'Montserrat-Regular';
    font-size:16px;	
    line-height:19px;	
    text-align:center;
    margin-left:56px;
    cursor:pointer;
    user-select:none;
`;

const headerItemLangInactive = css`
    opacity:0.3;	
    transition: all .1s ease-in;

    &:hover {
        opacity:1;
    }
`;

const headerItemFeatures = css`
    color:#ffffff;
    font-family:'Montserrat-Regular';
    font-size:16px;
    cursor:pointer;
    height:19px;
    line-height:19px;
    text-align:center;
    margin-right:56px;
    user-select:none;

`;

const headerItemController = css`
    color:#ffffff;
    font-family:'Montserrat-Regular';
    font-size:16px;
    cursor:pointer;
    line-height:19px;
    text-align:center;
    user-select:none;
`;

export default {
    header,
    headerWrapper,
    headerLeft,
    headerCenter,
    headerRight,
    headerItemLang,
    headerItemLangInactive,
    headerItemFeatures,
    headerItemController,

}