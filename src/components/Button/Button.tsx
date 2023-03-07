import Link from 'next/link'
import { MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'

type ButtonType = {
  href?: string
  label: string | ReactNode
  type: 'primary' | 'secondary' | 'primary-alt' | 'secondary-alt'
  children?: ReactNode
  className?: string
}

const ButtonStyles = css`
  border: none;
  background: none;
  border-radius: 5rem;
`

const ClickButton = styled.button<
  Omit<ButtonType, 'label' | 'type' | 'className'> & {
    onClick?: MouseEventHandler<HTMLButtonElement>
  }
>`
  ${ButtonStyles}
`

const LinkButton = styled(Link)<
  Omit<ButtonType, 'label' | 'type' | 'className'> & {
    onClick?: MouseEventHandler<HTMLAnchorElement>
  }
>`
  ${ButtonStyles}
`

const Button = (props: ButtonType) => {
  const { href, label, type, className, ...rest } = props
  if (href) {
    return (
      <LinkButton className={`${className} ${type}`} href={href} {...rest}>
        {label}
      </LinkButton>
    )
  }

  return (
    <ClickButton className={`${className} ${type}`} {...rest}>
      {label}
    </ClickButton>
  )
}

export default Button
