import React from 'react'

export default function SumOfTwo(props){
    return <React.Fragment>
        <p>{props.number1 + props.number2}</p>
    </React.Fragment>
}