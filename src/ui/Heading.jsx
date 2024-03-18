import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      fontsize: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      fontsize: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      fontsize: 2rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      fontsize: 3rem;
      font-weight: 600;
    `}

    line-height:1.4
`;
export default Heading;
