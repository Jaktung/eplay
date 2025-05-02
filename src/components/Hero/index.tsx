import { Banner, Content } from './styles'

import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import { ButtonContainer } from '../Button/styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Content>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 290,90</span>
            Por R$ 190,90
          </p>
          <ButtonContainer
            title="Clique para adicionar um jogo ao carrinho"
            type="button"
            variant="primary"
          >
            Adicionar ao carrinho
          </ButtonContainer>
        </Content>
      </div>
    </Banner>
  )
}

export default Hero
