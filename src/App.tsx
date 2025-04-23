import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface WasmModule {
  hello: () => void
}

function App() {
  const [count, setCount] = useState(0)
  const [wasmModule, setWasmModule] = useState<WasmModule | null>(null)

  useEffect(() => {
    import('../wasm-transpiled/wasm.js').then((module) => {
      setWasmModule(module)
    })
  }, [])

  const handleClick = () => {
    if (wasmModule) {
      const result = wasmModule.hello()
      console.log(result)
    }
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
