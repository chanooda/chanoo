import { Box } from 'chanoo-ui';
import dynamic from 'next/dynamic';

export default function Web() {
  const DynamicEditor = dynamic(() => import('../components/Editor'));
  return (
    <Box h="screen">
      <DynamicEditor />
    </Box>
  );
}
