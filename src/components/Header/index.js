import React, {useContext} from 'react'
import Title from '../Title';

import Button from '../Button'
import PropTypes from 'prop-types'

import {ThemeContext} from '../../context/ThemeContext'



export default function Header( props ){
  const {onToggleTheme} = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>
  )
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};