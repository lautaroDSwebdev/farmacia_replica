import React from 'react'

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = ({ children, ...props }: Button) => {

    // const dispatch = useDispatch();

    return (
        <button className='btn-shoppingCart' {...props}> {children}</button>
    )
}
