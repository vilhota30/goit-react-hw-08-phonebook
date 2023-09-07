import { Outlet } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react"; 
import { LayoutWrapper } from "./Layout.styled";


export const Layout = () => {
    return(
        <LayoutWrapper>
            <AppBar/>
              <Suspense fullback={null}>
                  <Outlet/>
               </Suspense>
               <Toaster position="center" reverseOrder={false}/>
        </LayoutWrapper>
    );
};
