import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  margin-bottom: 32px;
`

export const Item = styled.ul`
  img {
    width: 150px;
    height: 150px;
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    margin-right: 16px;
    object-fit: cover;
  }
`
