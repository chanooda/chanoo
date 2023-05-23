import { Col } from 'chanoo-ui';

interface UploadModalProps {
  markdown: string;
}

export default function UploadModal({ markdown }: UploadModalProps) {
  console.log(markdown);
  return <Col>UploadModal</Col>;
}
