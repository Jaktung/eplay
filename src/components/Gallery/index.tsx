import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import hogwarts from '../../assets/images/hogwarts_legacy.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

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

interface ModalUrl extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalUrl>({
    isVisible: false,
    type: 'image',
    url: ''
  })

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

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={`${media.url}-${index}`}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Clique para fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img className="image" src={modal.url} alt="Capa do jogo X" />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
