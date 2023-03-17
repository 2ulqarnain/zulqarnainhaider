type Props = {
    children?: React.ReactNode,
    text:String
}

function Button({text,children}: Props) {
  return <button className='button-primary'>{text}</button>
}

export default Button