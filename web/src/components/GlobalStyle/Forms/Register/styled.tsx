import styled from 'styled-components';
import * as LS from '../Login/styled';
import * as GS from '../../../GlobalStyle';
import nameIcon from 'Assets/name.png';

export const RegisterButton = styled(LS.LoginButton)`
  margin-top: 10px;
  width: 100%;
`;

export const UserNameIcon = styled(GS.IconStyle)`
  background-image: url(${nameIcon});
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 0.8rem;
`;
