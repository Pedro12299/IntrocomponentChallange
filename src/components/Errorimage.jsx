import React from 'react';

function Errorimage(props) {
  return (
    <span class= {props.top ? "glyphicon glyphicon-remove cross" : "top"}>
      <svg>
        <image href="../../images/icon-error.svg" height="22" width="20" />
      </svg>
    </span>
  );
}

export default Errorimage;