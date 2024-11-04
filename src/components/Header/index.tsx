/* Importação do Redux para pegar os dados do carrinho */
import { useSelector } from 'react-redux'

/* Importação dos estilos */
import * as S from './styles'

/* Importação de Componentes para o header */
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

/* Importação da tipagem para o reducer */
import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
