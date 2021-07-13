import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '../../../../routes';
import { getNivel } from '../../../../services/auth';
import ButtonList from '../ButtonList/ButtonList';
import { Container, ContainerSide, Menu, Title } from './style';


function Sidebar({ ativado }) {
  const history = useHistory();
  const nivel = getNivel(); 

  return (
    <Container>
      <ContainerSide>
        <Title>Mind Education</Title>
        <h4>NAVEGAÇÃO</h4>
        <Menu>
          {routes.protected.map(
            (route, index) =>
              route?.role?.find((elemento) => elemento == nivel) && (
                <ButtonList
                  isActive={ativado == route.title}
                  icon={route.icon}
                  title={route.title}
                  onClick={() => history.push(route.path)}
                />
              ),
          )}
        </Menu>
      </ContainerSide>
    </Container>
  );
}

export default Sidebar;
