import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import { Navbar, LeftBar, RightBar, Home, Login, Register, Profile } from './components';
import { useAuthContextApi } from './context/authContextApi';

function App() {
  const {currentUser, dark} = useAuthContextApi();

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 7}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to = "/login" />;
    }
    return children;
  }
  
  const router = createBrowserRouter([
    {path: "/", element: <ProtectedRoute><Layout /></ProtectedRoute>, children: [
      {path: "/", element: <Home/>},
      {path: "/profile/:id", element: <Profile/>}
    ]},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>}
  ]);

  return (
    <div className={dark ? "darkTheme": ""}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
