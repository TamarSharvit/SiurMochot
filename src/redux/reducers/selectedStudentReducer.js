import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState={
    selectedStudent:""
}
    

const selectedStudentReducer={
    loadList(state, action){
        if(action.type==='SELECT_STUDENT') 
        return action.payload;
      return state.selectedStudent;
    }
    

}
export default produce((state, action)=>createReducer(state, action, selectedStudentReducer),initialState);