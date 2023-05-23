import { forwardRef } from 'react';
import { CgClose } from 'react-icons/cg';
import { PolymorphicPropsWithoutRef, PolymorphicRef, VariantProps, styled } from '../system';
import { StyledCol } from '../col/Col';
import Row from '../row/Row';
import Box from '../box/Box';

export const Overlay = styled('div', {
  position: 'fixed',
  zIndex: '$max',
  width: '$screenW',
  height: '$screenH',
  backgroundColor: 'rgba(0,0,0,0.5)'
});

export const StyledModal = styled(StyledCol, {
  bgColor: '$white',
  borderRadius: '$md',
  // boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)',
  left: '50%',
  p: '$6',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: '$max'
});

export type StyledModalProps = VariantProps<typeof StyledModal> & VariantProps<typeof StyledCol>;

export type ModalProps<T extends React.ElementType> = PolymorphicPropsWithoutRef<
  StyledModalProps,
  T
> & {
  closeButtonClickHandler?: () => void;
};

const Modal = forwardRef(
  <T extends React.ElementType = 'div'>(
    { closeButtonClickHandler, children, ...props }: ModalProps<T>,
    ref: PolymorphicRef<T>['ref']
  ) => {
    return (
      <Overlay>
        <StyledModal {...props} ref={ref}>
          {closeButtonClickHandler && (
            <Row mb="4" vertical="end" w="full">
              <Box
                css={{ cursor: 'pointer', fs: '$2xl' }}
                onClick={() => closeButtonClickHandler()}
              >
                <CgClose />
              </Box>
            </Row>
          )}
          {children}
        </StyledModal>
      </Overlay>
    );
  }
);

export default Modal;

Modal.displayName = 'Modal';
