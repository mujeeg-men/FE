import { useNavigate } from "react-router";
import { HeaderContainer } from "./Header.style";

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <i onClick={()=>{navigate('/')}}>Share Book</i>
            <input type="text" />
            <span>메뉴1</span>
            <span>메뉴2</span>
        </HeaderContainer>
    )
};

export default Header;
