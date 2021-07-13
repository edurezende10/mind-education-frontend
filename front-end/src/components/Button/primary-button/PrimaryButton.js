import React from 'react'
import './PrimaryButton.scss'

const Primarybutton = ({children, ...rest}) => {
    return (
        <button {...rest} className="primary-button" type="submit">{children}</button>
    )
}

export default Primarybutton
