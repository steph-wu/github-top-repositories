import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

type HeadingProps = {
  primary?: boolean
  underline?: boolean
  cursor?: string
}

export const Heading1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 150%;
  margin: 0;
`

export const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 150%;
  margin: 0;
`

export const Heading3 = styled.h3<HeadingProps>`
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  margin: 0;

  ${props => props.primary && css`
    color: ${theme.primary};
  `}

  ${props => props.underline && css`
    border-bottom: 2px solid ${theme.primary};
  `}

  ${props => props.cursor && css`
    cursor: ${(props: any) => props.cursor}
  `}
`

type ParagraphProps = {
  bold?: boolean
  large?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 14px;
  letter-spacing: -0.5px;
  margin: 0;

  ${props => props.bold && css`
    font-weight: bold;
  `}
`

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.primary};
  margin: 0;
`
