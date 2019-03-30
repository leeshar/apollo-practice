import React from "react";
import "css/components/loading/Loading.css";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="loading">
      <RingLoader
        css={override}
        sizeUnit={"px"}
        size={100}
        color={"#BD10E0"}
        loading={true}
      />
    </div>
  );
};

export default Loading;
