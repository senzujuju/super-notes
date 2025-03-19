import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className="bg-purple-200 h-screen p-4">
    <p className="text-center text-4xl text-cyan-500">Tailwind + Tanstack Router Test</p>
  </div>
  )
}
