import {combineReducers } from 'redux';
import selectedStudentReducer from './selectedStudentReducer';
import studentListReducer from './studentListReducer';

const appReducers= combineReducers({
    studentList:studentListReducer,
    selectedStudent:selectedStudentReducer
});

export default appReducers;