import { Box, Row, globalStyles } from 'chanoo-ui';

function App() {
  globalStyles();

  return (
    <Box css={{ bgColor: '$black', size: '$10' }}>
      <Row />
    </Box>
  );
}

export default App;
