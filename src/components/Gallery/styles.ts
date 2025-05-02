import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  margin-bottom: 32px;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;

  > img {
    position: relative;
    width: 150px;
    height: 150px;
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .overlay {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.73);
    opacity: 0;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;

  header {
    display: flex;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
