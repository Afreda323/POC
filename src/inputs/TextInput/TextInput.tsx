import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'

/**
 * Input Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Input = (props: IProps) => {
  return <StyledInput {...props} />
}

/**
 * The prop types of an input element component
 */
interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Form name of component
   */
  name: string
  /**
   * Function called with event
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>
  /**
   * Value of ionput
   */
  value?: string
  /**
   * Type of text input
   */
  type?: string
  /**
   * Can the value be empty?
   */
  required?: boolean
  /**
   * Input placeholder text
   */
  placeholder?: string
}

interface IStyledProps {
  theme: ITheme
}
const StyledInput = styled.input`
  background: ${({ theme }: IStyledProps) => theme.black};
  color: ${({ theme }: IStyledProps) => theme.white};
`

export default Input
