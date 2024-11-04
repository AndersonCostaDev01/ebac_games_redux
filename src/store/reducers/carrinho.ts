/** Importação do Redux */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** Importação da tipagem para o reducer */
import { Game } from '../../App'

// Define o tipo de estado para o carrinho, que contém uma lista de itens do tipo Game
type CarrinhoState = {
  itens: Game[]
}

// Estado inicial do carrinho, começando com a lista de itens vazia
const initialState: CarrinhoState = {
  itens: []
}

// Cria o slice do Redux para o carrinho de compras
const carrinhoSlice = createSlice({
  name: 'carrinho', // Nome do slice
  initialState, // Estado inicial definido anteriormente
  reducers: {
    // Função para adicionar um jogo ao carrinho
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload // Recebe o jogo a ser adicionado

      // Verifica se o jogo já existe no carrinho pelo id
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado') // Alerta caso o item já esteja no carrinho
      } else {
        state.itens.push(jogo) // Adiciona o jogo ao carrinho se ele ainda não estiver presente
      }
    }
  }
})

// Exporta a ação adicionar e o reducer do slice do carrinho
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
