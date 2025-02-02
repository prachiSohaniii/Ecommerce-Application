import { createSlice } from "@reduxjs/toolkit"

const CartSlice=createSlice({
    name:'cartSlice',
    initialState:{
        data:[]
    },
    reducers:{
    addToCart(state,action){
        let temp= state.data
        let isItemExist= false
        temp.map((item)=>{
            if(item.id==action.payload.id){
                isItemExist=true
                item.qty=item.qty+1
            }
        })
        if(!isItemExist){
        temp.push(action.payload)
        }
        state.data=temp
    
    },
    reduceToCart(state,action){
        let temp= state.data
        temp.map((item)=>{
            if(item.id==action.payload.id){
                item.qty=item.qty-1
            }
        })

        state.data=temp
    
    },
    removeToCart(state,action){
        let temp= state.data
      
        temp.splice(action.payload,1)
        
        state.data=temp
    
    },
    emptycart(state,action){
        state.data=action.payload
    }
}
})
export const{addToCart,reduceToCart,removeToCart,emptycart}=CartSlice.actions
export default CartSlice.reducer