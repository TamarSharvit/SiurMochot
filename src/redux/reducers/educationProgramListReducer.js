import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState={
    educationProgramList:[]
}

const educationProgramReducer={
    loadList2(state, action){
       state.educationProgramList=action.payload;
   
   
    }
    

}
export default produce((state, action)=>createReducer(state, action, educationProgramReducer),initialState);