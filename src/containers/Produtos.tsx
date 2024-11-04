import { Game } from '../App' // Importa o tipo Game definido no App
import Produto from '../components/Produto' // Importa o componente Produto

import * as S from './styles' // Importa os estilos do arquivo styles, usando alias S

// Define o tipo das props, onde jogos é uma lista de objetos do tipo Game
type Props = {
  jogos: Game[]
}

// Componente Produtos que recebe a lista de jogos como prop
const Produtos = ({ jogos }: Props) => {
  return (
    <>
      <S.Produtos>
        {' '}
        {/* Componente de estilo para a lista de produtos */}
        {jogos.map((game) => (
          <Produto
            key={game.id}
            game={game}
          /> /* Renderiza um Produto para cada jogo, usando o id como key */
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos // Exporta o componente Produtos como padrão
