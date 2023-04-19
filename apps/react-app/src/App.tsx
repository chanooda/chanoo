import { Text, globalStyles } from 'chanoo-ui';
import { useRef } from 'react';

function App() {
  globalStyles();
  const ref = useRef(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <Text fontType="header1" ref={ref}>
        김찬우asdasdasdasd
        <Text as="b" fontType="header3">
          asd
        </Text>
      </Text>
      <Text fontType="header2">김찬우asdasdasdasd</Text>
      <Text fontType="header3">김찬우asdasdasdasd</Text>
      <Text fontType="header4">김찬우asdasdasdasd</Text>
      <Text>김찬우asdasdasdasd</Text>
      <Text fontType="caption">김찬우asdasdasdasd</Text>
    </div>
  );
}

export default App;
