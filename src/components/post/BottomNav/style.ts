import styled from "styled-components";

export const Navigation = styled.nav`
    width:100%;
    max-width:500px;
    padding-top:16px;
    padding-bottom:32px;
    padding-left:36px;
    padding-right:36px;

    background-color:white;

    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    bottom:0px;
`

export const NavigationItem = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:6px;

    color: ${({theme}) => theme.gray};
    text-align: center;
    font-size: 13px;

    svg {
        width:24px;
        height:22px;
    }

    &:not(:first-child) svg {   
        path {
            fill: ${({theme}) => theme.gray};
        }
    }
`