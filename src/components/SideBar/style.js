import styled from "styled-components";

export const SideBarButton = styled.button`
  color: ${(props) => (props.active ? "green" : "black")};
  background-color: ${(props) => (props.active ? "#cdcdcd" : "#efead8")};
  margin: 3px 3px 5px;
  padding: 3px 8px;
  border-radius: 4px;
  width: 60%;

  :hover {
    background-color: black;
    color: #efead8;
`;

