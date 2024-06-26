import styled from "styled-components";

export const Container = styled.li`
    width:100%;
    padding:10px;
    background-color:${({theme}) => theme.blue05};

    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    gap:13px;

    position:relative;
`

export const ThumbnailWrapper = styled.div`
    width:70px;
    height:70px;

    border-radius:6px;
    background-color:${({theme}) => theme.gray03};
`

export const Info = styled.div`
    padding-top:5px;
    padding-bottom:5px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:3px;
`

export const Name = styled.span`
    font-size:14px;
    font-weight:600;

    margin-bottom:3px;
`

export const Desc = styled.span`
    color:${({theme}) => theme.gray01};
    font-size:10px;
    font-weight:500;

    display:flex;
    align-items:center;
    gap:4px;

    svg {
        width:12px;
        height:12px;

        path {
            fill: ${({theme}) => theme.gray01};
        }
    }
`

export const OptionWrapper = styled.div`
    position:absolute;
    top:10px;
    right:14px;

    svg path {
        fill : ${({theme}) => theme.gray02};
    }
`