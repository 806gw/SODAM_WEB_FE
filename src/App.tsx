import * as R from "./allFiles"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <R.Header />
      <Routes>
        <Route path="/" element={<R.Landing />} />
      </Routes>
    </Router>
  )
}

export default App
