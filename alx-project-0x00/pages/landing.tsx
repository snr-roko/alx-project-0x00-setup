import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-wrap gap-5 justify-center">
        <Button title="Small" styles="px-2 py-1 text-sm bg-blue-500 text-white rounded-sm" />
        <Button title="Medium" styles="px-4 py-2 text-md bg-green-500 text-white rounded-md" />
        <Button title="Large" styles="px-6 py-3 text-lg bg-red-500 text-white rounded-lg" />
        <Button title="Rounded Small" styles="px-2 py-1 text-sm bg-yellow-500 text-white rounded-full" />
        <Button title="Rounded Medium" styles="px-4 py-2 text-md bg-purple-500 text-white rounded-full" />
        <Button title="Rounded Large" styles="px-6 py-3 text-lg bg-orange-500 text-white rounded-full" />
        <Button title="Small Outline" styles="px-2 py-1 text-sm border border-blue-500 text-blue-500 rounded-sm" />
        <Button title="Medium Outline" styles="px-4 py-2 text-md border border-green-500 text-green-500 rounded-md" />
        <Button title="Large Outline" styles="px-6 py-3 text-lg border border-red-500 text-red-500 rounded-lg" />
        <Button title="Rounded Small Outline" styles="px-2 py-1 text-sm border border-yellow-500 text-yellow-500 rounded-full" />
        <Button title="Rounded Medium Outline" styles="px-4 py-2 text-md border border-purple-500 text-purple-500 rounded-full" />
        <Button title="Rounded Large Outline" styles="px-6 py-3 text-lg border border-orange-500 text-orange-500 rounded-full" />
      </div>
    </div>
  )
}

export default Landing