// import { useState } from 'react'

import Header from './components/Header'
import WordleSection from './components/WordleSection'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <WordleSection />
        <section>
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
        </section>
      </main>


    </>
  )
}

export default App
