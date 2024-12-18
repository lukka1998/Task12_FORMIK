import React from 'react'
import Leftside from '../../atoms/Leftside/Leftside'
import RightSide from '../../atoms/Rightside/Rightside'
function FormCard() {
    return (
        <div className='flex flex-col  h-full justify-center items-center gap-8 md:flex-row'>
            <Leftside/>
            <RightSide/>
        </div>
    )
}

export default FormCard
