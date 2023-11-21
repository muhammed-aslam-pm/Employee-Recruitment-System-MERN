import React, { useReducer, useState } from "react";
import Axios from "axios";

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            email: '',
            phone_number: '',
            alternative_number: '',
            job_position: '',
            language: '',
            resume: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}


function JobApplication() {
    const [formData, setFormData] = useReducer(formReducer, {
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        console.log(formData);
        event.preventDefault();
        setSubmitting(true);

        Axios.post('http://localhost:8080/apply', {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            alternative_number: formData.alternative_number,
            job_position: formData.job_position,
            language: formData.language,
            resume: formData.resume
        })
        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000);
    }
    const handleChange = event => {
        const isCheckbox = event.target.type === 'file';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.value : event.target.value,
        })
    }
    return (
        <div className="quiz-container">
            <form onSubmit={handleSubmit} className="form-application">
                <fieldset disabled={submitting}>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" onChange={handleChange} value={formData.name || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" onChange={handleChange} value={formData.email || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Phone Number</p>
                        <input type="text" name="phone_number" onChange={handleChange} value={formData.phone_number || ''} />
                    </label>
                    <label>
                        <p>Alternative Number</p>
                        <input type="text" name="alternative_number" onChange={handleChange} value={formData.alternative_number || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Job Position</p>
                        <input type="text" name="job_position" onChange={handleChange} value={formData.job_position || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Language</p>
                        <select name="language" onChange={handleChange} value={formData.language || ''}>
                            <option value="">--Please choose an option--</option>
                            <option value="option_1">Java</option>
                            <option value="option_2">Python</option>
                            <option value="option_3">Angualar</option>
                            <option value="option_4">React</option>
                            <option value="option_4">C#</option>
                            <option value="option_4">NodeJS</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Upload Resume</p>
                        <input type="file" name="resume" onChange={handleChange} value={formData.resume || ''} />
                    </label>
                </fieldset>
                <button type="submit" onSubmit={() => this.handleSubmit(formData)} disabled={submitting}>Submit</button>
            </form>
        </div >
    )
}

export default JobApplication;