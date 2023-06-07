import { Row } from 'chanoo-ui';
import dynamic from 'next/dynamic';
import SideFolders from '../../components/admin/SideFolders';

export default function Index() {
  const DynamicEditor = dynamic(() => import('../../components/admin/Editor'));
  return (
    <Row h="full" w="full">
      <SideFolders />
      <DynamicEditor />
    </Row>
  );
}
