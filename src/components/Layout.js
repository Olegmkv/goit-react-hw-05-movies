import { Suspense } from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.4;
`;

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Layout = () => {
    return (
      <Container>
         <header>
            <nav>
               <Link to="/">Home  </Link>
               <Link to="/movies">Movies</Link>
            </nav>
         </header>
          
        <Suspense fallback={'LOADING PAGE...'}>
          <Outlet />
        </Suspense>
      </Container>
    );
};
