import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Wrapper>
        {children}
        <FooterNavigation>
          <NavigationList>
            <Link to="/call">7시</Link>
          </NavigationList>
          <NavigationList>
            <Link to="/mailst">쪽지함</Link>
          </NavigationList>
          <NavigationList>
            <Link to="/my-page">마이페이지</Link>
          </NavigationList>
        </FooterNavigation>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

const NavigationList = styled.ul`
  position: relative;
  z-index: 2;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  padding: 24px;
  font-size: 10px;
`;

const FooterNavigation = styled.li`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #fff;
  border-top: solid 1px #e5e5e6;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  width: 100%;
  text-decoration: none;
`;
