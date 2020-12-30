import React from 'react';
import logo from '../logo2.png';

export default function RegisterForm() {

    const [semester, setSemester] = React.useState([]);

    const [dept, setDept] = React.useState(
        [
            {
                name: 'IT Training & Solution',
                active: true,
            },
            {
                name: 'Digital Marketing\nTraining & Solution',
                active: false,
            },
            {
                name: 'Sophomore',
                active: false,
            },
        ]
    );


    const chActive = (index) => {
        let temps = [...dept];
        let temp = { ...temps[index] };

        temps.map(temp => temp.active = false);

        temps[index].active = true;
        setDept(temps);
    }

    const onYearChange = (e) => {
        console.log(e.target.value);
        let val = e.target.value;
        if (val) {
            if (val == 1) {
                setSemester([{ name: '1st', value: 1 }, { name: '2nd', value: 2 }]);
            } else if (val == 2) {
                setSemester([{ name: '3rd', value: 3 }, { name: '4th', value: 4 }]);
            } else if (val == 3) {
                setSemester([{ name: '5th', value: 5 }, { name: '6th', value: 6 }]);
            } else if (val == 4) {
                setSemester([{ name: '7th', value: 7 }, { name: '8th', value: 8 }]);
            }
        }

        console.log(semester);
    }

    const onFieldChange = () => {

    }

    const onCourseChange = () => {

    }

    const onSemesterChange = () => {

    }

    const styles = {
        btn_style: {
            marginLeft: 'auto',
            display: 'block',
            padding: '0.5rem 1rem',
            backgroundImage: 'linear-gradient(to bottom, #3670fe, #1d2cb4)',
            border: '2px solid #0c1347',
            color: 'white',
            fontFamily: 'Montserrat',
            ':hover': {
                backgroundImage: 'linear-gradient(to bottom, #1d2cb4, #1d2cb4)',
            }
        }
    }

    return (
        <div className="col-md-10 mx-auto mb-5">
            <div className="card mt-5 col-md card-dec" style={{ borderRadius: '0.5rem', border: 'none', boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.2), -2px -2px 3px -1px rgba(0, 0, 0, 0.2)' }}>
                <div className="row">
                    <div className="col-md-3 mx-auto text-center bg-dark text-white" style={{ borderRadius: '0.3rem 0 0 0.3rem' }}>
                        <div className="card-body">
                            <img style={{ width: '70%', marginTop: '50px' }} src={logo} alt="Logo" />
                            <hr />
                            <div className="my-list-group">
                                {dept.map((d, index) => {
                                    return (
                                        <div key={index}>
                                            <div onClick={() => chActive(index)} className={d.active ? 'my-list-group-item active-item' : 'my-list-group-item'}>
                                                <p className="h4">{d.name}</p>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <p style={{ fontSize: '1.3rem', padding: '0.6rem', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', margin: '1rem 0' }}>Registration Form</p>
                        <div className="card-body">
                            <div className="container">
                                <form action="" method="POST">

                                    <div className="row">
                                        <div className="col-md-2 mt-3">
                                            <p className="h5">Student Details</p>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="grouped">

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="first" name="fname" placeholder="Name" />
                                                                <label htmlFor="first">First Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="last" name="lname" placeholder="Name" />
                                                                <label htmlFor="last">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="email" name="email" placeholder="Email" />
                                                                <label htmlFor="email">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" type="number" id="contact" name="contact" placeholder="Contact" />
                                                                <label htmlFor="contact">Personal Contact</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" type="number" id="pcontact" name="pcontact" placeholder="Contact" />
                                                                <label htmlFor="pcontact">Parent's/Guardian's Contact</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" type="number" id="whatsapp" name="whatsapp" placeholder="Contact" />
                                                                <label htmlFor="whatsapp">WhatsApp Contact for Batch</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-group">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="college" name="college" placeholder="College" />
                                                                <label htmlFor="college">School/College/Office Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <select onChange={v => onFieldChange()} className="form-select" id="pursuing" name="pursuing"
                                                                aria-label="Floating label select example">
                                                                <option value="0">Select</option>
                                                                <option value="1">B.Tech</option>
                                                                <option value="2">B.C.A.</option>
                                                                <option value="3">M.C.A</option>
                                                                <option value="4">M.B.A.</option>
                                                                <option value="5">B.Voc</option>
                                                                <option value="6">B.Com</option>
                                                            </select>
                                                            <label htmlFor="pursuing">Pursuing</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <select onChange={onYearChange} className="form-select" id="year" name="year" aria-label="Floating label select example">
                                                                <option value="0">Select</option>
                                                                <option value="1">First</option>
                                                                <option value="2">Second</option>
                                                                <option value="3">Third</option>
                                                                <option value="4">Fourth</option>
                                                            </select>
                                                            <label htmlFor="year">Year</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <select onChange={v => onSemesterChange()} className="form-select" id="semester" name="semester"
                                                                aria-label="Floating label select example">
                                                                <option value="0">Select</option>
                                                                {semester.map(sem => {
                                                                    return (
                                                                        <option key={sem.value} value={sem.value}>{sem.name}</option>
                                                                    )
                                                                })}
                                                            </select>
                                                            <label htmlFor="semester">Semester</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-2">
                                            <p className="h5">Course Details</p>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="grouped">
                                                <div className="row">
                                                    <div className="col-md">
                                                        <div className="form-floating">
                                                            <select onChange={v => onCourseChange()} className="form-select" value={"0"} id="course" name="course" aria-label="Floating label select example">
                                                                <option value="0">Selected Course</option>
                                                                <option value="1">Angular 10</option>
                                                                <option value="2">Python 3</option>
                                                                <option value="3">Java 15</option>
                                                                <option value="4">Machine Learning</option>
                                                                <option value="5">Data Analytics</option>
                                                                <option value="6">Sophomore</option>
                                                            </select>
                                                            <label htmlFor="course">Selected Course</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="duration" name="duration" placeholder="Duration" disabled
                                                                value="1.5 Months" />
                                                            <label htmlFor="duration">Duration</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="total-fee" name="total-fee" placeholder="Total Fee" disabled
                                                                value="1.5 Months" />
                                                            <label htmlFor="total-fee">Total Fee</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-2">
                                            <p className="h5">Transaction Details</p>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="grouped">
                                                <div className="row">
                                                    <div className="col-md">

                                                        <div className="form-floating">
                                                            <input type="number" className="form-control" id="reg-amt" name="reg-amt" placeholder="Registration Amount" disabled
                                                                value="1000" />
                                                            <label htmlFor="reg-amt">Registration Amount</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input type="date" className="form-control" id="date" name="date" placeholder="Transaction Date" min={new Date().toDateString()} />
                                                            <label htmlFor="date">Transaction Date</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input type="time" className="form-control" id="time" name="time" placeholder="Transaction Time" />
                                                            <label htmlFor="time">Transaction Time</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="bank" name="bank" placeholder="Bank Name" />
                                                            <label htmlFor="bank">Bank Name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="trns-id" name="trns-id" placeholder="Transaction ID" />
                                                            <label htmlFor="trns-id">Transaction ID</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md mt-3">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="location" name="location" placeholder="Location" />
                                                            <label htmlFor="location">Location</label>
                                                        </div>
                                                    </div></div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="mt-5 mb-4">
                                        <button style={styles.btn_style} className="col-3 mybtn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ display: 'relative', left: '10rem' }}>Registration</p>
        </div>
    )
}