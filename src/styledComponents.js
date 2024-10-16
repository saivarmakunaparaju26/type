import styled from 'styled-components'

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isbold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnder ? 'underline' : 'normal')};
`
export const Button = styled.button`
  color: ${props => (props.isbold ? '#faff00' : '#f1f5f9')};
`
export const Button1 = styled.button`
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const Button2 = styled.button`
  color: ${props => (props.isUnder ? '#faff00' : '#f1f5f9')};
`
