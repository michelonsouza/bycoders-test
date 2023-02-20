import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
} from '@mui/material';

import youtubeIcon from '@/assets/you-tube-icon.svg';

import { useBloc, linkOptions } from './bloc';
import { StyledImage, StyledSearchButton } from './styles';

export function AppLayout(): JSX.Element {
  const { loading, inputRef, handleSearchVideos } = useBloc();

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
        }}
        py={2}
      >
        <Box display="flex" alignItems="start" gap={4}>
          <StyledImage src={youtubeIcon} alt="YouTube Icon" />
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <TextField
                variant="outlined"
                size="small"
                label="Search"
                inputRef={inputRef}
                disabled={loading}
                InputProps={{
                  endAdornment: loading ? (
                    <InputAdornment position="end">
                      <CircularProgress size={24} color="primary" />
                    </InputAdornment>
                  ) : undefined,
                }}
              />
              <StyledSearchButton
                variant="contained"
                color="primary"
                onClick={handleSearchVideos}
              >
                Search
              </StyledSearchButton>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {linkOptions.map(link => (
                <Button
                  key={link.id}
                  size="small"
                  variant="text"
                  color="success"
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button
              variant="text"
              color="primary"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Create account
            </Button>{' '}
            <Typography>or</Typography>
            <Button
              variant="text"
              color="primary"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Sign-in
            </Button>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
              Subscriptions
            </Button>
            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
              History
            </Button>
            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
              Upload
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
