import { HomeWrapper, HomeContainer, Title, HomeList, HomeListTitle, HomeTitleEnd, HomeText, Text } from "./HomePage.styled";
import coffee from '../../components/media/coffee-2242218_1280.jpg';

export default function Home () {
    return(
        <HomeWrapper>
                <HomeContainer style={{ backgroundImage: `url(${coffee})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "550px"}}>
             <Title>The "Contact Book" is a convenient application for storing phone numbers (e.g. colleagues, friends, acquaintances and relatives, etc.) 
                 <HomeListTitle>With our application, you will be able to:</HomeListTitle>
                    <HomeList> 
                        <li>Adding new contacts to your contact list</li>
                        <li>Sorting existing contacts</li>
                        <li>Search through the contacts list</li>
                        <li>Delete or edit outdated information</li>
                        </HomeList>
                    
                    <Text>The user-friendly interface will familiarise you with the main features quickly.</Text> 
                    <HomeText>Please follow the <a href="goit-react-hw-08-phonebook/register">Registration</a> or <a href="goit-react-hw-08-phonebook/login">Log in</a> if you already have an account.</HomeText>
                    
                    <HomeTitleEnd>We hope you will enjoy working with the application.</HomeTitleEnd>
                    </Title>   
            </HomeContainer>  
        </HomeWrapper>
    );
};
