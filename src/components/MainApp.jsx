import {useEffect, lazy} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './Layout/Layout';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';
import {RestrictedRoute} from './RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../Pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../Pages/Register/Register'));
const LoginPage = lazy(() => import('../Pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('./App'));

export const MainApp = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b style={{display: "flex", justifyContent: "center", color: "darkslateblue"}}>Refreshing user...</b>
    ) : (
    <Routes>
        <Route path="/" element={<Layout/>} >
           <Route index element={<HomePage/>} />
              <Route 
                   path="/register"
                    element={
                    <RestrictedRoute redirectTo="/App" component={<RegisterPage/>} />
                    }
                />
               <Route
                   path="/login"
                   element={
                   <RestrictedRoute redirectTo="/App" component={<LoginPage/>} />
                    }
                />
                <Route 
                   path="/App"
                   element={
                   <PrivateRoute redirectTo="/login" component={<ContactsPage/>} />
                    }
                />
        </Route>
    </Routes>









    )

}