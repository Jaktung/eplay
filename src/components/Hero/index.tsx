import { Banner, Content } from './styles'
import { ButtonContainer } from '../Button/styles'

import Tag from '../Tag'
import { Game } from '../../pages/Home'

import { formataPreco } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Content>
          <h2>{game.name}</h2>
          <p>
            {game.prices.old && <span>De {formataPreco(game.prices.old)}</span>}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <ButtonContainer
              title="Clique para adicionar um jogo ao carrinho"
              type="button"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </ButtonContainer>
          )}
        </Content>
      </div>
    </Banner>
  )
}

export default Hero
