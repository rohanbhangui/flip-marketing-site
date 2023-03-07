import Link from 'next/link'
import { MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'

type ButtonType = {
  href?: string
  label: string | ReactNode
  type?: 'primary' | 'secondary' | 'primary-alt' | 'secondary-alt' | 'link'
  children?: ReactNode
  className?: string
}

const ButtonStyles = css`
  border: none;
  background: none;
  border-radius: 5rem;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  display: inline-block;

  @media ${({ theme }) => theme.mediaQuery.smallTablet} {
    padding: 1rem 2rem;
  }

  &.primary {
    background: ${({ theme }) => theme.colors.yellow};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.background};
  }

  &.primary-alt {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    color: white;
  }

  &.secondary {
    background: white;
    border: white;
    color: ${({ theme }) => theme.colors.background};
  }

  &.secondary-alt {
    background: transparent;
    border: 2px solid white;
    color: white;
  }

  &.link {
    background: transparent;
    border: none;
    color: white;
  }

  &:not(.link):active {
    position: relative;
    top: 1px;
  }

  i {
    margin-right: 0.5rem;
  }
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
  const { href, label, type = 'primary', className, ...rest } = props
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
