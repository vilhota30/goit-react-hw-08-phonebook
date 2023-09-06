import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
import { AppBarHeader } from "./AppBar.styled";

export const AppBar = () => {
    const {isLoggedIn} = useAuth();

    return(
        <AppBarHeader>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </AppBarHeader>
    );
};
