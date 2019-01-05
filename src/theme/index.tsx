import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Reset from './reset'

/**
 * Theme Interface
 */
export interface ITheme {
  black: string
  white: string
}

/**
 * Theme object
 */
export const theme: ITheme = {
  black: '#000',
  white: '#fff',
}


interface IProviderProps {
  theme: ITheme
  children: JSX.Element[] | JSX.Element
}

/**
 * Theme Wrapper
 * Adds global css reset and themes all components
 */
const Themer = (props: IProviderProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <Fragment>
        <Reset />
        {props.children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Themer