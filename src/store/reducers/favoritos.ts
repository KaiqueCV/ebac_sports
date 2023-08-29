import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      // Verificar se o produto já está nos favoritos
      const produtoIndex = state.itens.findIndex((p) => p.id === produto.id)
      if (produtoIndex !== -1) {
        // Se já estiver nos favoritos essa linha que vao remover
        state.itens.splice(produtoIndex, 1)
      } else {
        // Caso contrário, aqui que adiciona mais um id
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
