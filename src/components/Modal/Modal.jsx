import { Content, Overlay } from './Modal.styled';

export const Modal = ({ src, alt }) => (
  <Overlay>
    <Content>
      <img src={src} alt={alt} />
    </Content>
  </Overlay>
);
