import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={cards:[{id:1,img:'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',discription:"this is a card"}]}

const cardSlice=createSlice({
    name:'cards',
    initialState,
    reducers:{
        addCard:(state,action)=>{
            const { img, discription } = action.payload
            const card=({
            id: nanoid(),
            img,
            discription,
            })
            state.cards.push(card);
        },
        removeCard:(state,action)=>{
            state.cards=state.cards.filter((card)=>card.id!=action.payload.id)
        }
    }
})

export const {addCard,removeCard}=cardSlice.actions

export default cardSlice.reducer