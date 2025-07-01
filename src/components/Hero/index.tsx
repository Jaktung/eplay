import * as S from './styles'
import { ButtonContainer } from '../Button/styles'

import Tag from '../Tag'
import { Game } from '../../pages/Home'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

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
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Content>
          <h2>{game.name}</h2>
          <p>
            {game.prices.old && <span>De {parseToBrl(game.prices.old)}</span>}
            {game.prices.current && (
              <p>Por {parseToBrl(game.prices.current)}</p>
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
        </S.Content>
      </div>
    </S.Banner>
  )
}

export default Hero
