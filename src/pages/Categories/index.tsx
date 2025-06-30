import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetEsportsGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesSimulacao && gamesRpg) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={gamesRpg}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
