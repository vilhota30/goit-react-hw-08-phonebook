import {Toaster} from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux";
import Loader from "./Loader/Loader";

import { selectError, selectIsLoading } from 'redux/Selectors/selectors';

import {Container} from "./App.styled";
import PhoneBook from './PhoneBook/PhoneBook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import notebook from '../components/media/notebook-3820634_1280.jpg';

  export default function App() {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

     return (
      <>
         <Container style={{ backgroundImage: `url(${notebook})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "500px" }}>
          <h1 style={{color: "chocolate"}}>-Phonebook-</h1>
            <PhoneBook />  
          <h2 style={{color: "chocolate"}}>-Contacts-</h2>
            <Filter />
            {isLoading && !error && <Loader/>}
            <ContactList/>
            <Toaster
               toastOptions={{
               duration: 3000,
              }}
            />
         </Container>
      </>
     );

};










































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
