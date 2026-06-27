import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Rótulo exibido acima do input e associado via htmlFor/id. */
  label?: string
  /** Texto de apoio exibido abaixo do input quando não há erro. */
  helperText?: string
  /** Mensagem de erro. Quando presente, marca aria-invalid e estiliza a borda. */
  errorMessage?: string
  /** Tamanho do input. */
  size?: InputSize
  /** Ícone decorativo exibido à direita do input (não interativo, ex: busca). */
  icon?: ReactNode
  /** Elemento interativo exibido à direita do input (ex: botão de mostrar senha). Tem precedência sobre `icon`. */
  action?: ReactNode
}

const baseClasses =
  'w-full rounded-md border bg-white font-sans text-slate-900 placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-50'

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-3 text-base',
  lg: 'h-12 px-4 text-lg',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorMessage, size = 'md', icon, action, id, className, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const descriptionId = `${inputId}-description`
    const hasError = Boolean(errorMessage)
    const endContent = action ?? icon

    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <div className="relative flex w-full items-center">
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError || undefined}
            aria-describedby={helperText || errorMessage ? descriptionId : undefined}
            className={cn(
              baseClasses,
              sizeClasses[size],
              hasError ? 'border-error focus-visible:ring-error' : 'border-slate-300',
              endContent && 'pr-9',
              className,
            )}
            {...props}
          />
          {endContent && (
            <span
              className="absolute right-3 flex items-center text-slate-400"
              {...(action ? {} : { 'aria-hidden': true })}
            >
              {endContent}
            </span>
          )}
        </div>
        {(helperText || errorMessage) && (
          <p
            id={descriptionId}
            role={hasError ? 'alert' : undefined}
            className={cn('text-sm', hasError ? 'text-error' : 'text-slate-500')}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
