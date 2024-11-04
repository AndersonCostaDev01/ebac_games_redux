/** Importação do Redux */
import { useDispatch } from 'react-redux'
/** Importação dos estilos */
import * as S from './styles'
/** Importação do componente Game */
import { Game } from '../../App'
/** Importação da função adicionar */
import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  game: Game
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ game }: Props) => {
  const dispath = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>
      <S.Titulo>{game.titulo}</S.Titulo>
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispath(adicionar(game))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
