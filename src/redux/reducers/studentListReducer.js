import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState={
    studentList:[]
}

const studentListReducer={
    loadList(state, action){
       state.studentList=action.payload;
   
   
    }
    

}
export default produce((state, action)=>createReducer(state, action, studentListReducer),initialState);