import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({title, styles}) => {

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg'
  }

  const buttonRoundness = `rounded-${styles.roundness}`

  const buttonStyle = [
    sizeStyles[styles.size],
    `bg-${styles.backgroundColor}`,
    `text-${styles.color}`,
    buttonRoundness
  ].join(' ')
  

  return (
    <button className={buttonStyle}>
      {title}
    </button>
  )
}

export default Button;