import Button from '../Button'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>Preco</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>Preco</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 381,80 <span>em até 6x sem juros</span>
        </Prices>
        <Button
          type="button"
          title="Clique para continuar com a compra"
          variant={'primary'}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
