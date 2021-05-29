import styled from 'styled-components'
import { Layout as LayoutAD } from 'antd'

export const Layout = styled(LayoutAD)`
    min-height: 100vh;
    background-color: ${props=> props.backgroundColor ? props.backgroundColor : ''};
`;

export const Header = styled(LayoutAD.Header)`
    background-color: ${props=> props.backgroundColor ? props.backgroundColor : ''};
`;

export const Content = styled(LayoutAD.Content)`
    margin: 0 16px;
`;