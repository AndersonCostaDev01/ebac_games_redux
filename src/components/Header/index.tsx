/* Importação do Redux para acessar os dados do carrinho */
import { useSelector } from 'react-redux'

/* Importação dos estilos */
import * as S from './styles'

/* Importação de componentes e recursos para o cabeçalho */
import cesta from '../../assets/cesta.png' // Imagem de ícone de cesta
import { paraReal } from '../Produto' // Função para formatar valores em Real

/* Importação da tipagem do estado da store */
import { RootReducer } from '../../store'

// Componente Header, que exibe o título e o resumo do carrinho
const Header = () => {
  // Usa o useSelector para obter os itens do carrinho do estado global
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  // Calcula o valor total dos itens no carrinho
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco // Soma o preço de cada item ao acumulador
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1> {/* Título do site */}
      <div>
        <img src={cesta} alt="Ícone da cesta" /> {/* Ícone da cesta */}
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}{' '}
          {/* Exibe a quantidade de itens e o valor total formatado */}
        </span>
      </div>
    </S.Header>
  )
}

export default Header // Exporta o componente Header como padrão
