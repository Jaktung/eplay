import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingSports } =
    useGetEsportsGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
