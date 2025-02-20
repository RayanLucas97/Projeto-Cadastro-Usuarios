import  React  from 'react'
import  ReactDom  from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import router from './routes.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
