import Section from '../Section'

import zelda from '../../assets/images/zelda.png'
import { Items, Item } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={zelda} alt="" />
        </Item>
        <Item>
          <img src={zelda} alt="" />
        </Item>
        <Item>
          <img src={zelda} alt="" />
        </Item>
        <Item>
          <img src={zelda} alt="" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
