import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  padding: 20px 20px 20px;
  text-align: center;
  align-content: center;
  background-color: #d8d8d8;

  p {
    padding: 0 0 5px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: bold;
  }
`;

export const Load = styled.div`
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  height: 150px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #5f7161;
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  justify-content: center;
`;
