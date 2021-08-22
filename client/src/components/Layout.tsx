import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CallOutline } from 'react-ionicons';
import { MailUnreadOutline } from 'react-ionicons';
import { BodyOutline } from 'react-ionicons';

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
            <Link to="/call">
              <CallOutline color={'#000'} height="25px" width="25px" />
              <p>7시</p>
            </Link>
          </NavigationList>
          <NavigationList>
            <Link to="/mailst">
              <MailUnreadOutline color={'#000'} height="25px" width="25px" />
              <p>쪽지함</p>
            </Link>
          </NavigationList>
          <NavigationList>
            <Link to="/my-page">
              <BodyOutline color={'#000'} height="25px" width="25px" />
              <p>마이페이지</p>
            </Link>
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

const NavigationList = styled.li`
  display: flex;
  padding: 24px;
  font-size: 10px;
  cursor: pointer;
  p,
  span {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const FooterNavigation = styled.ul`
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
