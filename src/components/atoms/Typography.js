import React from 'react'
import {Typography as TypographyAD} from 'antd'

const Typography = (props)=> {

    const Type = {
        title: 
            <TypographyAD.Title 
                level={props.level} 
                style={{
                    color: props.color, 
                    textAlign: props.textAlign, marginTop: props.marginTop ? props.marginTop : 0, 
                    marginBottom: props.marginBottom ? props.marginBottom : 0,
                    fontSize: props.fontSize, fontWeight: props.bold ? 'bold' : 'normal'
                }}
            >{props.children}</TypographyAD.Title>,
        text: 
            <TypographyAD.Text 
                style={{
                    color: props.color, 
                    marginTop: props.marginTop ? props.marginTop : 0,
                    marginBottom: props.marginBottom ? props.marginBottom : 0
                }}
            >{props.children}</TypographyAD.Text>
    }

    return(
        <>
            {Type[props.type]}
        </>
    )
}

export default Typography