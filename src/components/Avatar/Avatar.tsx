import { forwardRef, useState, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** URL da imagem do avatar. */
  src?: string
  /** Texto alternativo da imagem (obrigatório para acessibilidade). */
  alt: string
  /** Nome usado para gerar as iniciais quando não há imagem (ou ela falha ao carregar). */
  name?: string
  /** Tamanho do avatar. */
  size?: AvatarSize
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-xl',
}

function getInitials(name?: string): string {
  if (!name) return '?'

  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return initials || '?'
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, name, size = 'md', className, ...props }, ref) => {
    const [hasError, setHasError] = useState(false)
    const showImage = Boolean(src) && !hasError

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-100 font-sans font-medium text-indigo-700',
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <span role="img" aria-label={alt}>
            {getInitials(name)}
          </span>
        )}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
