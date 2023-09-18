import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Error from './routes/Error.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';
import InserirProdutos from './routes/InserirProdutos.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produtos" , element: <Produtos/>},
      {path: "/editar/produtos/:id" , element: <EditarProdutos/>},
      {path: "/excluir/produtos/:id" , element: <ExcluirProdutos/>},
      {path: "/inserir/produtos/:id" , element: <InserirProdutos/>},
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <RouterProvider router={router}/>
  ,
)
