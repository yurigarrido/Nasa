import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Home } from './pages/Home'
import { Feed } from './pages/Feed'

export const Router = () => (
  <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
    </Route>
    <Route path="*" element={<Navigate to={'/home'} replace />} />
  </Routes>
)
