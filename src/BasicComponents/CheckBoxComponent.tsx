import React, {ChangeEvent} from "react";


type props = {
    /*changeTaskStatus: (value: boolean) => void*/
}


export const CheckBoxComponent = ((props: props) => {


    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        /*props.changeTaskStatus(e.currentTarget.checked)*/
    }


    return (
        <div>
            <input
                type={'checkbox'} checked={true}
                onChange={changeTaskStatus}/>
        </div>
    )
})