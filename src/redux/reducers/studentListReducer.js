import produce from 'immer';
import createReducer from "./reducerUtil";
import {allStudentsFromServer} from '../../api/personalInformation'
const initialState={
    studentsList:[]
}

const studentListReducer={
    loadList(state, action){
       
       state.studentList=action.payload;
   
    }
    

}
export default produce((state, action)=>createReducer(state, action, studentListReducer),initialState);