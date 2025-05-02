import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import hogwarts from '../../assets/images/hogwarts_legacy.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'
import thumb from '../../assets/images/hogwarts_thumb.avif'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=oPqK7ipEhbx125Mt'
  },
  {
    type: 'image',
    url: hogwarts
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getDefaultThumb = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }

    return defaultCover
  }

  const getDefaultIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }

    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={`${media.url}-${index}`}>
              <img
                src={getDefaultThumb(media)}
                alt={`Mídia ${index + 1} de Nome do jogo`}
              />
              <Action>
                <img
                  src={getDefaultIcon(media)}
                  alt="Clique para abri a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Clique para fechar" />
          </header>
          <img src={thumb} alt="Capa do jogo X" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
