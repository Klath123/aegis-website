import { Layout } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-6">
        <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-blue-500/20">
          <Layout className="w-8 h-8 text-blue-400" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">College Club</h1>
          <p className="text-zinc-400">Welcome to your new club website platform. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-sm">
            <span className="block font-semibold text-blue-400">Frontend</span>
            React + Vite
          </div>
          <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 text-sm">
            <span className="block font-semibold text-purple-400">Backend</span>
            Node.js + Express
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
