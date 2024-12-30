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
        <Route path="/personal" element={<R.PersonalHome />} />
        <Route path="/personal/mypage" element={<R.PersonalMypage />} />

        <Route path="/signup/business" element={<R.BusinessSignIn />} />
        <Route path="/business/diary" element={<R.Diary />} />
        <Route path="/business/mypage" element={<R.BusinessMypage />} />
      </Routes>
    </Router>
  )
}

export default App
