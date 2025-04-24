import Tag from '../Tag'
import produtoImg from '../../assets/images/resident.png'
import { Card, Titulo, Descricao } from './styles'

const Product = () => {
  return (
    <Card>
      <img src={produtoImg} alt="Resident evil" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        voluptas! Eum sint architecto alias? Amet eius at quod exercitationem
        repellat dolorum sequi officia necessitatibus mollitia commodi quae
        reiciendis, iure dolor.
      </Descricao>
    </Card>
  )
}

export default Product
