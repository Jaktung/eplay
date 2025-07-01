import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import * as S from './styles'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalUrl extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
        <S.Items>
          {items.map((media, index) => (
            <S.Item
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
              <S.Action>
                <img
                  src={getDefaultIcon(media)}
                  alt="Clique para abri a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent>
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Clique para fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img className="image" src={modal.url} alt="Capa do jogo X" />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
