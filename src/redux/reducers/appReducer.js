import {combineReducers } from 'redux';
import selectedStudentReducer from './selectedStudentReducer';
import studentListReducer from './studentListReducer';
import educationProgramListReducer from './educationProgramListReducer';
const appReducers= combineReducers({
    studentList:studentListReducer,
    selectedStudent:selectedStudentReducer,
    educationProgramList:educationProgramListReducer,
});

export default appReducers;