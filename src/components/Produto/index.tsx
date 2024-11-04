/** Importação do Redux */
import { useDispatch } from 'react-redux'
/** Importação dos estilos */
import * as S from './styles'
/** Importação do tipo Game */
import { Game } from '../../App'
/** Importação da função adicionar do slice carrinho */
import { adicionar } from '../../store/reducers/carrinho'

// Define o tipo das props do componente, onde game é um objeto do tipo Game
type Props = {
  game: Game
}

// Função para formatar um valor numérico para o formato monetário em real (BRL)
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

// Componente Produto que exibe as informações do jogo e possui um botão de adicionar ao carrinho
const Produto = ({ game }: Props) => {
  const dispatch = useDispatch() // Hook para obter a função de dispatch do Redux

  return (
    <S.Produto>
      {/* Seção da capa do jogo com a categoria e a imagem */}
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>

      {/* Exibe o título do jogo */}
      <S.Titulo>{game.titulo}</S.Titulo>

      {/* Lista de plataformas do jogo */}
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li> // Mapeia cada plataforma e exibe em uma lista
        ))}
      </S.Plataformas>

      {/* Exibe os preços, com o preço antigo em menor destaque se houver */}
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>

      {/* Botão para adicionar o jogo ao carrinho */}
      <S.BtnComprar onClick={() => dispatch(adicionar(game))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto // Exporta o componente Produto como padrão
