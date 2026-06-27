import { forwardRef, useState } from 'react'
import { Input, type InputProps } from './Input'

export type PasswordInputProps = Omit<InputProps, 'type' | 'action' | 'icon'>

const EyeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M6.6 6.6C4 8.2 2.5 12 2.5 12s3.5 7 9.5 7c1.8 0 3.4-.5 4.7-1.3M9.9 4.2A10 10 0 0 1 12 5c6 0 9.5 7 9.5 7-.5 1-1.3 2.3-2.4 3.5" />
  </svg>
)

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const [visible, setVisible] = useState(false)

  return (
    <Input
      ref={ref}
      type={visible ? 'text' : 'password'}
      action={
        <button
          type="button"
          aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
      {...props}
    />
  )
})

PasswordInput.displayName = 'PasswordInput'
