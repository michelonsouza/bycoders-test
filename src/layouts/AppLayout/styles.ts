import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImage = styled('img')`
  width: 150px;
  height: auto;
`;

export const StyledSearchButton = styled(Button)`
  min-height: ${({ theme }) => theme.spacing(5)};
`;
