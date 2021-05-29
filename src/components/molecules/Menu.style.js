import styled from 'styled-components'

import { Menu as MenuAD } from 'antd'

export const Menu = styled(MenuAD)`
    background-color: ${props=> props.backgroundColor ? props.backgroundColor : null};
`