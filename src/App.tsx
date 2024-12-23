import * as R from "./allFiles"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <R.Header />
      <Routes>
        <Route path="/" element={<R.Landing />} />
        <Route path="/login" element={<R.SignIn />} />
        <Route path="/signup/personal" element={<R.UserSignIn />} />
        <Route path="/signup/business" element={<R.BusinessSignIn />} />
        <Route path="/signup/business" element={<R.BusinessSignIn />} />
        <Route path="/buyer/diary" element={<R.Diary />} />
      </Routes>
    </Router>
  )
}

export default App
