import React from 'react'
import MealsImage from '../../assets/nonveg.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
const Header = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h1>Lovely Cuisine</h1>
             <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage}  />
        </div>
        </>
    )
}

export default Header
