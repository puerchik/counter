import React from "react";

type ButtonPropsType = {
    disabled: boolean,
    name: string,
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} className={`button ${props.disabled}`} onClick={onClickHandler}>{props.name}</button>
    )
}