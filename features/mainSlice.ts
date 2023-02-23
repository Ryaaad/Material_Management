import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  Started:false,
  Logged:false
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
       
    //   ChangeRouter:(state,action:PayloadAction<String>)=>{
    //     if(action.payload=='Products' ) state.Home= false
    //     else if(action.payload=='Home' ) state.Home= true
    //   },
    //   ClickerPannier:(state)=>{  
    //     state.PannierClicked=!state.PannierClicked
    //   },
    //   ChangeLang:(state,action: PayloadAction<String>)=>{  
    //     if(action.payload=='En'){
    //       state.Lang=translationEn
    //       state.Language='EN'
    //       state.dir=true
    //     }
    //     if(action.payload=='Ar'){
    //       state.Lang=translationAr
    //         state.Language='AR'
    //       state.dir=false
    //     }
    //     if(action.payload=='Fr'){
    //       state.Lang=translationFr
    //        state.Language='FR'
    //       state.dir=true
    //     }
    //   },
    }
});



// export const {ClickerPannier,ChangeLang,ChangeRouter}= mainSlice.actions
export default mainSlice.reducer;
