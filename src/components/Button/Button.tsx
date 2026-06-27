import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual do botão. */
  variant?: ButtonVariant
  /** Tamanho do botão. */
  size?: ButtonSize
  /** Mostra um spinner e desabilita interação, mantendo o texto para leitores de tela. */
  loading?: boolean
  /** Renderiza apenas o ícone (children), em formato quadrado. Exige aria-label. */
  iconOnly?: boolean
}

const baseClasses =
  'cursor-pointer inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50',
  ghost: 'text-slate-900 hover:bg-slate-100',
  destructive: 'bg-error text-white hover:bg-error/90',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
}

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 w-8 p-0',
  md: 'h-10 w-10 p-0',
  lg: 'h-12 w-12 p-0',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', loading = false, iconOnly = false, disabled, className, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        className={cn(
          baseClasses,
          variantClasses[variant],
          iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
          className,
        )}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            data-testid="button-spinner"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
