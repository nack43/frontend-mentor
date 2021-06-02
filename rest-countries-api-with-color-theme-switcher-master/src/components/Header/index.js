import styled from 'styled-components'

const Header = styled.div`
  height: 80px;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  padding: 23px 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header
