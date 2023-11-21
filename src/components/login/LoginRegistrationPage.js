import '../../css/login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/esm/Visibility';
import VisibilityOff from '@mui/icons-material/esm/VisibilityOff';
import CloudUpload from '@mui/icons-material/esm/CloudUpload';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



import axios from 'axios';

const LoginRegistrationPage = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [ctype, settype] = React.useState('');

  const handleChangectype = (e) => {
    settype(e.target.value);
  };




  // State for managing z-index values of boxes
  const [box1ZIndex, setBox1ZIndex] = useState(1);
  const [box2ZIndex, setBox2ZIndex] = useState(2);

  // State for managing login form data and errors
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errors, setErrors] = useState({});

  // State for managing candidate registration form data and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [candidate_errors, setcandidateErrors] = useState({});
  const [candidate_sucess, setcandidateSucess] = useState({});

  // State for managing HR registration form data and errors
  const [hr_cname, sethrcname] = useState('');
  const [hr_name, sethrName] = useState('');
  const [hr_email, sethrEmail] = useState('');
  const [hr_password, sethrPassword] = useState('');
  const [hr_ctype, sethrCtype] = useState('');
  const [hr_errors, sethrErrors] = useState({});
  const [hr_sucess, sethrSucess] = useState({});

  // State for managing password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword_candidate, setShowPassword_candidate] = useState(false);
  const [showPassword_hr, setShowPassword_hr] = useState(false);

  // Handler for toggling z-index values of boxes
  const handleButtonClick = () => {
    setBox1ZIndex(box1ZIndex === 1 ? 2 : 1);
    setBox2ZIndex(box2ZIndex === 1 ? 2 : 1);
  };







  // Handler for logging in user
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', {
        email: loginEmail,
        password: loginPassword,
      });

      console.log(response.data);

      // check if email is in HR collection
      const hr = await axios.get(`/api/Ai/HR?email=${loginEmail}`);
      if (hr.data.length) {
        // redirect to HR's account page
        navigate.push(`/hr/${loginEmail}`);
        return;
      }

      // check if email is in users collection
      const user = await axios.get(`/api/Ai/users?email=${loginEmail}`);
      if (user.data.length) {
        // redirect to user's account page
        navigate.push(`/user/${loginEmail}`);
        return;
      }

      // if email not found in HR or user collection, display error message
      console.log('User not found');
    } catch (error) {
      console.log(error);
      // display error message
    }




    const errors = {};
    if (!loginEmail) {
      errors.email = 'Email is required';
    }
    if (!loginPassword) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };


  // Handler for changing login form email input
  const handleEmailChange = async (e) => {
    setLoginEmail(e.target.value);
  };


  // Handler for changing login form password input
  const handlePasswordChange = async (e) => {
    setLoginPassword(e.target.value);
  };







  /* Handler for submitting candidate registration form */
  const handleSubmitcandidate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', registerEmail);
    formData.append('password', registerPassword);
    formData.append('resume', resumeFile);

    try {
      const response = await axios.post('/api/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setcandidateSucess('Registration Successful!');
      setFirstName('');
      setLastName('');
      setRegisterEmail('');
      setRegisterPassword('');
      setResumeFile(null);
    } catch (error) {
      console.log(error);
      setcandidateErrors('Registration failed. Please try again later.');
    }





    const candidate_errors = {};

    if (!firstName) {
      candidate_errors.firstName = 'First Name is required';
    }

    if (!lastName) {
      candidate_errors.lastName = 'Last Name is required';
    }

    if (!registerEmail) {
      candidate_errors.registerEmail = 'Email is required';
    }

    if (!registerPassword) {
      candidate_errors.registerPassword = 'Password is required';
    }

    if (Object.keys(candidate_errors).length > 0) {
      setcandidateErrors(candidate_errors);
      return;
    }

  };
  const handlefnameChange_candidate = async (e) => {
    setFirstName(e.target.value);
  };

  const handlelnameChange_candidate = async (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange_candidate = async (e) => {
    setRegisterEmail(e.target.value);
  };

  const handlePasswordChange_candidate = async (e) => {
    setRegisterPassword(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleClickShowPasswordcandidate = () => {
    setShowPassword_candidate(!showPassword_candidate);
  };




  /* HR registration */


  const handleSubmithr = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('companyName', hr_cname);
    formData.append('hrName', hr_name);
    formData.append('email', hr_email);
    formData.append('password', hr_password);
    formData.append('companyType', hr_ctype);


    try {
      const response = await axios.post('/api/hr/register', formData, {
        'Content-Type': 'multipart/form-data',
      });
      console.log(response.data);
      sethrSucess('Registration Successful!');
      sethrcname('');
      sethrName('');
      sethrEmail('');
      sethrPassword('');
      sethrCtype('');
    } catch (error) {
      console.log(error);
      sethrErrors('Registration failed. Please try again later.');
    }



    /* error message */

    const hr_errors = {};

    if (!hr_cname) {
      hr_errors.companyName = 'Company Name is required';
    }

    if (!hr_name) {
      hr_errors.hrName = 'HR Name is required';
    }

    if (!hr_email) {
      hr_errors.email = 'Email is required';
    }

    if (!hr_password) {
      hr_errors.password = 'Password is required';
    }

    if (Object.keys(hr_errors).length > 0) {
      sethrErrors(hr_errors);
      return;
    }

  };

  const handlecnameChange_hr = async (e) => {
    sethrcname(e.target.value);
  };

  const handlenameChange_hr = async (e) => {
    sethrName(e.target.value);
  };
  const handleEmailChange_hr = async (e) => {
    sethrEmail(e.target.value);
  };

  const handlePasswordChange_hr = async (e) => {
    sethrPassword(e.target.value);
  };

  const handleClickShowPassword_hr = () => {
    setShowPassword_hr(!showPassword_hr);
  };

  useEffect(() => {
    document.querySelector('#root').classList.add('login-page');

    return () => {
      document.querySelector('#root').classList.remove('login-page');
    };
  }, [])



  /* body */

  return (

    <div id='root'>
      <Box
        sx={{
          width: 500,
          height: 500,
          padding: '1rem',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          zIndex={box2ZIndex}
          sx={{
            width: 500,
            height: 500,
            backgroundColor: 'lavender',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            borderRadius: '1rem',
          }}
        >
          <Box
            sx={{
              width: 430,
              height: 400,
              backgroundColor: 'lavender',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '0.5rem',
            }}
          >
            <h1 style={{ fontWeight: 'bolder', fontSize: '2.5em', color: '#333' }}>Login</h1>


            {/* login form */}

            <form onSubmit={handleLogin} >
              <TextField
                id="outlined-email-input"
                label="Email ID"
                type="email"
                sx={{
                  width: 350,
                  margin: '0.5rem'
                }}
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />

              <br></br>

              <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword_candidate ? 'text' : 'password'}
                sx={{
                  width: 350,
                  margin: '0.5rem'
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClickShowPasswordcandidate} style={{ cursor: 'pointer' }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <br></br>
              <div style={{ color: '#ff0f7b', fontWeight: 'bolder', margin: '0.4rem', marginLeft: '1.2rem', cursor: 'pointer' }}>
                Forgot Password
              </div>

              <Button variant="contained" type="submit"
                sx={{
                  width: 350,
                  padding: 1,
                  margin: '0.5rem',
                  backgroundColor: '#f89b29'
                }}>Login</Button>

            </form>



            {/*sign up */}
            <h5 style={{ color: '#333' }}>Are You New To Here | <span onClick={handleButtonClick} style={{ color: '#ff0f7b', textDecoration: 'none', cursor: 'pointer', }}>Sign Up</span></h5>
          </Box>
        </Box>
        <Box
          zIndex={box1ZIndex}
          sx={{
            width: 500,
            height: 500,
            backgroundColor: 'Lavender',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'absolute',
            borderRadius: '1rem',
          }}
        >



          {/* registration */}

          <Tabs

            sx={{
              width: 500,
              backgroundColor: 'Lavender',
              borderRadius: '1rem',
              marginTop: '0.5rem'
            }}

            value={value}
            onChange={handleChange} centered>
            <Tab sx={{ color: '#ff0f7b', fontWeight: 'bolder', }} label="Candidate" />
            <Tab sx={{ color: '#ff0f7b', fontWeight: 'bolder' }} label="HR" />
          </Tabs>


          {value === 0 && <Box sx={{
            width: 500, height: 450,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '1rem',
          }} bgcolor="Lavender">




            {/* userRegister */}

            {candidate_errors && <p>{candidate_errors}</p>}
            <form onSubmit={handleSubmitcandidate}

              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>

              <div style={{
                width: 415,
                backgroundColor: 'Lavender',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '1rem',
              }}>



                <TextField
                  sx={{ margin: '0.3rem' }}

                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => handlefnameChange_candidate(e.target.value)}
                  error={!!candidate_errors.firstName}
                  helperText={candidate_errors.firstName}
                />


                <TextField

                  sx={{ margin: '0.3rem' }}

                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => handlelnameChange_candidate(e.target.value)}
                  error={!!candidate_errors.lastName}
                  helperText={candidate_errors.lastName}

                />
              </div>




              <TextField
                id="outlined-email-input"
                label="Email ID"
                type="email"

                sx={{
                  width: 400,
                  margin: '0.3rem'
                }}

                value={registerEmail}
                onChange={(e) => handleEmailChange_candidate(e.target.value)}
                error={!!candidate_errors.registerEmail}
                helperText={candidate_errors.registerEmail}

              />




              <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword_candidate ? 'text' : 'password'}

                sx={{
                  width: 400,
                  margin: '0.3rem'
                }}

                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClickShowPasswordcandidate} style={{ cursor: 'pointer' }}>
                      {showPassword_candidate ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}

                value={registerPassword}
                onChange={handlePasswordChange_candidate}
                error={!!candidate_errors.registerPassword}
                helperText={candidate_errors.registerPassword}
              />


              {/* upload resume */}

              <Button sx={{ width: 400, backgroundColor: '#202020', margin: '0.5rem' }} variant="contained" component="label">
                <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                  <CloudUpload sx={{ color: 'lavender' }} />&nbsp;&nbsp;
                </InputAdornment>
                Upload Your Resume
                <input hidden accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" type="file" onChange={handleResumeChange} />
              </Button>

              {/* signup button */}

              <Button variant="contained" type="submit"

                sx={{
                  width: 400,
                  padding: 1,
                  margin: '0.3rem',
                  backgroundColor: '#f89b29',
                }}>Sign Up

              </Button>


              {/* already have an account */}

              <h5 style={{ color: '#333' }}>Already Have An Account | <span onClick={handleButtonClick} style={{ color: '#ff0f7b', textDecoration: 'none', cursor: 'pointer', }}>Sign In</span></h5>
            </form>


          </Box>}
          {value === 1 && <Box sx={{ width: 500, height: 450, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '1rem', }} bgcolor="Lavender">


            <form onSubmit={handleSubmithr}

              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>

              <div style={{ width: 415, backgroundColor: 'Lavender', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '1rem', }}>

                <TextField sx={{ margin: '0.3rem' }} id="outlined-basic" label="Company Name" variant="outlined" value={hr_cname}
                  onChange={handlecnameChange_hr}
                  error={!!hr_errors.hr_cname}
                  helperText={hr_errors.hr_cname} />
                <TextField sx={{ margin: '0.3rem' }} id="outlined-basic" label="HR Name" variant="outlined" value={hr_name}
                  onChange={handlenameChange_hr}
                  error={!!hr_errors.hr_name}
                  helperText={hr_errors.hr_name} />
              </div>
              <TextField
                id="outlined-email-input"
                label="Company Email"
                type="email"
                sx={{
                  width: 400,
                  margin: '0.3rem'
                }}
                value={hr_email}
                onChange={handleEmailChange_hr}
                error={!!hr_errors.hr_email}
                helperText={hr_errors.hr_email}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword_hr ? 'text' : 'password'}
                sx={{
                  width: 400,
                  margin: '0.3rem'
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClickShowPassword_hr} style={{ cursor: 'pointer' }}>
                      {showPassword_hr ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
                value={hr_password}
                onChange={handlePasswordChange_hr}
                error={!!hr_errors.hr_password}
                helperText={hr_errors.hr_password}
              />
              <div style={{ width: 400, backgroundColor: 'lavender', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.2rem', }}>
                <FormControl sx={{ width: 200, }}>
                  <InputLabel id="demo-simple-select-label">Company Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hr_ctype}
                    label="Company Type"
                    onChange={handleChangectype}
                  >
                    <MenuItem value={'software'}>Software</MenuItem>
                    <MenuItem value={'telecom'}>Telecom</MenuItem>
                    <MenuItem value={'data analyst'}>Data Analyst</MenuItem>
                  </Select>
                </FormControl>&nbsp;&nbsp;

                <Button sx={{ width: 190, height: 54, backgroundColor: '#202020', }} variant="contained" component="label">
                  <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                    <CloudUpload sx={{ color: 'lavender' }} />&nbsp;&nbsp;
                  </InputAdornment>
                  Verification
                  <input hidden accept="image/*" multiple type="file" />
                </Button>

              </div>

              <Button variant="contained" type="submit"
                sx={{
                  width: 400,
                  padding: 1,
                  margin: '0.5rem',
                  backgroundColor: '#f89b29',
                }}>Sign Up</Button>


              <h5 style={{ color: '#333' }}>Already Have An Account | <span onClick={handleButtonClick} style={{ color: 'dodgerblue', textDecoration: 'none', cursor: 'pointer', }}>Sign In</span></h5>
            </form>
          </Box>}
        </Box>
      </Box>
    </div>
  );

};

export default LoginRegistrationPage;
