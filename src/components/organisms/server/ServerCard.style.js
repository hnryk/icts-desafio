import styled from 'styled-components'
import {Row as RowAD, Col as ColAD} from 'antd'

export const Legend = styled.div`
    width: 24px; 
    height: 24px; 
    border-radius: 20px; 
    background-color: ${props=> props.color ? props.color : ''}; 
    margin-right: 16px;
`;

export const Row = styled(RowAD)`
    margin-top: 24px;
`;

export const Col = styled(ColAD)`
    display: flex;
`;