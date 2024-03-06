import React from "react";
import styled from "styled-components";
import loading from "../../assets/images/Loading.svg"

function Loading ({loading}) {

    return (
        <S.Loading loading={loading}/>
    )
}

export default Loading;

const S = {
    Loading:styled.div`
      display: ${(props) => props.loading ? 'flex' : 'none'};
      position: fixed;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      background-color: rgba(0, 0, 0, 0.2);
      background-image: url(${loading});
      background-position: center;
      background-repeat: no-repeat;
      background-size: initial;
      z-index: 9999;
    `
}