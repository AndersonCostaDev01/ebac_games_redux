import { useEffect, useState } from 'react' // Importa hooks do React

import Header from './components/Header' // Importa o componente de cabeçalho
import Produtos from './containers/Produtos' // Importa o container de produtos

import { GlobalStyle } from './styles' // Importa os estilos globais
import { Provider } from 'react-redux' // Importa o Provider do Redux para fornecer a store
import { store } from './store' // Importa a store do Redux

// Define o tipo Game, que representa a estrutura de um jogo
export type Game = {
  id: number // ID único do jogo
  titulo: string // Título do jogo
  plataformas: string[] // Plataformas em que o jogo está disponível
  precoAntigo: number // Preço anterior do jogo
  preco: number // Preço atual do jogo
  categoria: string // Categoria do jogo
  imagem: string // URL da imagem do jogo
}

function App() {
  // Declara um estado para armazenar a lista de jogos
  const [games, setGames] = useState<Game[]>([])

  // useEffect para buscar dados da API ao montar o componente
  useEffect(() => {
    fetch('http://localhost:4000/produtos') // Faz uma requisição para a API local
      .then((res) => res.json()) // Converte a resposta para JSON
      .then((res) => setGames(res)) // Atualiza o estado com os dados recebidos
  }, [])

  return (
    <Provider store={store}>
      {' '}
      {/* Envolve a aplicação com o Provider do Redux */}
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <div className="container">
        <Header /> {/* Renderiza o cabeçalho */}
        <Produtos jogos={games} />{' '}
        {/* Renderiza o container de produtos com a lista de jogos */}
      </div>
    </Provider>
  )
}

export default App // Exporta o componente App como padrão
