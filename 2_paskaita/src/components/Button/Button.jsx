import React from 'react';
import "./Button.css"

const Button = ({ type, color, text}) => (
  <button type={type} className={color}>{text}</button>
)

export default Button