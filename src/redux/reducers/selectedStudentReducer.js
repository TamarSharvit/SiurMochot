import produce from 'immer';
import createReducer from "./reducerUtil";
const initialState = {
    selectedStudent: {}
}


const selectedStudentReducer = {
    loadStudent(state, action) {
        state.selectedStudent = action.payload;
    }


}
export default produce((state, action) => createReducer(state, action, selectedStudentReducer), initialState);