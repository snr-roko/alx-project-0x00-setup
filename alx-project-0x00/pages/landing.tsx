import Card from "@/components/Card"
import Button from "@/components/Button"
import { StyleProps } from "@/interfaces"

const Landing: React.FC = () => {

  const smallButtonStyle: StyleProps = {
    size: 'sm',
    color: 'white-500',
    backgroundColor: 'blue-500',
    roundness: 'md'
  }

  const mediumButtonStyle: StyleProps = {
    size: 'md',
    color: 'green-500',
    backgroundColor: 'white',
    roundness: 'sm'
  }

  const largeButtonStyle: StyleProps = {
    size: 'lg',
    color: 'white',
    backgroundColor: 'red-500',
    roundness: 'full'
  }

  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-5 justify-center">
      <Button title="Small" styles={smallButtonStyle} />
      <Button title="Medium" styles={mediumButtonStyle} />
      <Button title="Large" styles={largeButtonStyle} />
      </div>
    </div>
  )
}

export default Landing