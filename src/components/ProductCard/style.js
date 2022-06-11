import styled from "styled-components";

export const Card = styled.div`
    width: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    margin: 2px;
    padding: 2px;
`;

export const CardTitle = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
`;

export const CardCategory = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
margin: 0;
`;

export const CardPrice = styled.p`
text-align: center;
font-size: 1em;
font-weight: bold;
margin: 5px;
`;
