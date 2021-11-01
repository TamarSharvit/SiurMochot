import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState={
    studentsList:[]
}

const studentListReducer={
    loadList(state, action){
       state.studentsList=action.payload;
   
   
    }
    

}
export default produce((state, action)=>createReducer(state, action, studentListReducer),initialState);