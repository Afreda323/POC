import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'

/**
 * Button Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
interface IButtonProps {
  /**
   * Event fired on click
   */
  onClick: () => void
  /**
   * Text displayed inside of the button
   */
  children: JSX.Element | string
  /**
   * Toggle button clickability
   */
  disabled?: boolean
}

const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${({ theme }: IProps) => theme.black};
  color: ${({ theme }: IProps) => theme.white};
`

interface IProps {
  theme: ITheme
}

export default Button
