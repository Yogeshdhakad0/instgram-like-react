import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./dataservice";

 const dataapislice=createSlice({
    name:'data',
initialState:{
        data:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:''  
         
},
reducers:{
    Addcomment: (state, action) => {
        const { data, text } = action.payload;
console.log(data.comments)
        // ✅ सही से user खोजें
        const userIndex = state.data.findIndex((user) => user.id === data.id);

        if (userIndex !== -1) {
            // ✅ Immutable Update का पालन करें
            state.data[userIndex] = {
                ...state.data[userIndex],
                comments: [
                    ...state.data[userIndex].comments,
                    { id: crypto.randomUUID(), text ,user:data.name}, // ✅ नया comment ऐड करें
                ],
            };
        }}
},
extraReducers: builder=>{
builder
.addCase(Fechingdata.pending,(state,action)=>{
    state.isLoading=true
    state.isError=false
    state.isSuccess=false
})
.addCase(Fechingdata.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.isSuccess=true
    state.data=action.payload
})
.addCase(Fechingdata.rejected,(state,action)=>{
    state.isLoading=false
    state.isError=true
    state.isSuccess=false
    state.message=action.payload
})

// .addCase(Addcomment.pending,(state,action)=>{
//     state.isLoading=true
//     state.isError=false
//     state.isSuccess=false
// })
// .addCase(Addcomment.fulfilled,(state,action)=>{
//     state.isLoading=false
//     state.isError=false
//     state.isSuccess=true
//     state.data=action.payload
// })
// .addCase(Addcomment.rejected,(state,action)=>{
//     state.isLoading=false
//     state.isError=true
//     state.isSuccess=false
//     state.message=action.payload
// })



}

 })
 export const {Addcomment}=dataapislice.actions
 export default dataapislice.reducer



 export const Fechingdata=createAsyncThunk('FECHA/USER',async()=>{
    try {
        return await service.fetchindatauser()
    } catch (error) {
        console.log(error)
    }
 })


//  export const Addcomment=createAsyncThunk('FECHA/COMMENT',async(fromdata)=>{
//     try {
//         console.log(fromdata)
//         return await service.addcommentdata(fromdata)
//     } catch (error) {
//         console.log(error)
//     }
//  })


