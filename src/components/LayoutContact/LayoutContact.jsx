import { ContainerContact } from './LayoutContact.styled.js';

export function LayoutContact({ children }) {
  return (
    <ContainerContact>
      <main>{children}</main>
    </ContainerContact>
  );
}
