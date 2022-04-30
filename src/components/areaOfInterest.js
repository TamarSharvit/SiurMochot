import React, { useEffect, useState } from 'react';
import '../css/registersHomePage.css';
import '../css/newRegister.css'
import ValidateTextField from '../common/validateTextFields';
import Button from '@material-ui/core/Button';
import { addEducationProgram } from '../api/educationPrograming';
import { ControlledCheckbox } from './cheakBox.js';
import { statusFromServer } from '../api/statusMongoose';
import { coursesFromServer } from '../api/coursesMongoose';
import { branchFromServer } from '../api/branchApi';
import { DropDownCourse, DropDownUsers, DropDownStatus, DropDownBranch } from './dropDownBtn.js';
import { useDispatch, useSelector } from 'react-redux';


const AreaOfInterest = (props) => {
        //תחום התענינות
        const [arrStatus, setArrStatus] = useState([]);
        const [showStatus, setShowStatus] = useState(false);
        const [arrC, setArrC] = useState([]);
        const [showC, setShowC] = useState(false);
        const [arrBranch, setArrBranch] = useState([]);
        const [showB, setShowB] = useState(false);

        const [priceDiscount, setPriceDiscount] = useState('');
        const [discount, setDiscount] = useState('');
        const [price, setPrice] = useState('');
        const [branch, setBranch] = useState('');
        const [course, setCourse] = useState('');
        const [status, setStatus] = useState('');
        const [yearOfLearning, setYearOfLearning] = useState('');
        const [paidInSystem, setPaidInSystem] = useState('');
        const [contract, setContract] = useState(false);
        const [studentId, setStudentId] = useState("");
        // setStudentId(useSelector(state => state.selectedStudent.id));

        useEffect(() => {
                statusFromServer().then((res) => {
                        if (res.status === 200) {
                                setArrStatus(res.statuss)
                                setShowStatus(true)
                        }
                        else {
                                alert("לא קיימים נתונים לערך זה")
                        }
                }).catch(() => {

                })

                coursesFromServer().then((res) => {

                        if (res.status === 200) {

                                setArrC(res.coursess)
                                setShowC(true);

                        }
                        else {
                                alert("שם משתמש אינו קיים");
                        }
                }).catch(() => {
                        // debugger
                        //Handle error
                })
                branchFromServer().then((res) => {
                        if (res.status == 200) {
                                setArrBranch(res.branchs);
                                setShowB(true);

                        }
                        else {
                                alert("לא קיימים ערכים");

                        }
                }).catch(() => {
                        // debugger
                        //Handle error

                })
        }, [])

        const handleClick = () => {
                addEducationProgram(status, course, branch, yearOfLearning, price, discount, priceDiscount, paidInSystem, true, new Date().getDate(), "611e43860d635b4808203b7c", "6126c382da2915496c3973d3");
                props.setShowInterest(false);

        }

        return <div className="div1">
                <div className="div2">


                        <ValidateTextField value={priceDiscount}
                                onChange={(value) => setPriceDiscount(value)}
                                validate={() => { return priceDiscount === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"מחיר לאחר הנחה"} />

                        <ValidateTextField value={discount}
                                onChange={(value) => setDiscount(value)}
                                validate={() => { return discount === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"הנחה"} />

                        <ValidateTextField value={price}
                                onChange={(value) => setPrice(value)}
                                validate={() => { return price === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"מחיר"} />

                        {/* <ValidateTextField value={branch}
                                onChange={(value) => setBranch(value)}
                                validate={() => { return branch === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"סניף"} /> */}

                        {/* <ValidateTextField value={course}
                                onChange={(value) => setCourse(value)}
                                validate={() => { return course === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"שם הקורס"} /> */}


                        {/* <ValidateTextField value={status}
                                onChange={(value) => setStatus(value)}
                                validate={() => { return status === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"סטטוס"} /> */}
                        <ValidateTextField value={yearOfLearning}
                                onChange={(value) => setYearOfLearning(value)}
                                validate={() => { return yearOfLearning === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"שנת לימוד"} />
                        <ValidateTextField value={paidInSystem}
                                onChange={(value) => setPaidInSystem(value)}
                                validate={() => { return paidInSystem === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"שולם במערכת"} />
                        {/* <ValidateTextField value={studentId}
                                onChange={(value) => setPaidInSystem(value)}
                                validate={() => { return studentId === '' }}
                                errorMessage={'שדה חובה'}
                                lable={"תעודת זהות"} /> */}
                        <br /><br />
                        <lable>חוזה</lable>  <ControlledCheckbox />
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={handleClick}>הוספה למערכת</Button>
                </div>
                <br />
                {showStatus && <DropDownStatus res={arrStatus} />}
                {showC && <DropDownCourse res={arrC} />}
                {showB && <DropDownBranch res={arrBranch} />}


        </div>

}

export default AreaOfInterest;