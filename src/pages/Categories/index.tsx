import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetEsportsGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesSimulacao && gamesRpg) {
    return (
      <>
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={gamesLuta} title="Luta" background="black" />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={gamesRpg} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
