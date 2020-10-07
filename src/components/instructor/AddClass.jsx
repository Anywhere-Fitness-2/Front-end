import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addClass } from "../../store/actions.js";

const AddClass = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    // const classadd = useSelector(state => state.classes)
    const [newClass, setNewClass] = useState({
        name: '', // string
        type: '', // class_type
        start_time: '', // string (utc)
        duration: '', // number (minutes)
        intensity: '', // class_intensity
        location: '', // string: zip code
        attendees: '', // number (calculated)
        max_attendees: '', // number (specified by Instructor)
    });
    console.log(newClass, "newClass")

    const handleInput = e => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addClass(newClass));
        history.push('/instructor/classes')
    }

    return (
    <>
    <h2>Add a New Fitness Class</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">

            <label htmlFor="name">
                <input type="text" id='name' name="name" className='form-control' placeholder="Class Name" onChange={handleInput} />
            </label>
            <label htmlFor="type">
                <input type="text" id='type' name="type" className='form-control' placeholder="Type of Class" onChange={handleInput} />
            </label>
            <label htmlFor="start_date">Start Date
                <input type="date" id='start_date' className='form-control' name="start_date" onChange={handleInput} />
            </label>
            <label htmlFor="start_time">Start Time
                <input type="time" id='start_time' className='form-control' name="start_time" onChange={handleInput} />
            </label>
            <label htmlFor="duration">
                <input type="text" id='duration' name="duration" className='form-control' placeholder="Duration of Class" onChange={handleInput} />
            </label>
            <label htmlFor="location">
                <input type="text" id='location' name="location" className='form-control' placeholder="Zip Code of Class location" onChange={handleInput} />
            </label>
            <label htmlFor="max_attendees">
                <input type="number" id='max_attendees' name="max_attendees" className='form-control' placeholder="Max Attendees" onChange={handleInput} />
            </label>
        </div>
        <dir className="form-group">
            <button className="btn btn-success">Add</button>
        </dir>
    </form>
    </>
    )
}

export default AddClass;