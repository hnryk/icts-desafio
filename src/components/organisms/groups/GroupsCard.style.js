import styled from 'styled-components'

export const Layout = styled.div`
    margin-top: 24px;
`;

export const Content = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    display: ${props => props.display ? props.display : "grid"};
`;