import React, { useState } from 'react'
import styles from './Form.module.css'
import validator from './validation'

function Form(props) {
    const {login} = props;
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    })

    const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        setErrors(validator({...userData, [e.target.name]: e.target.value}))
        setUserData({...userData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    
  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Email</label>
            <input 
            type="text" 
            value={userData.email} 
            name = 'email'
            onChange={handleChange}
            className={errors.E1 || errors.E2 || errors.E3 ? styles.error : styles.success}
            />
                { errors.E1 ? (<p>{errors.E1}</p>
                ): errors.E2 ?(<p>{errors.E1}</p>
                ): (<p>{errors.E3}</p>
                ) }
        
            </div>
            <div>
                <label>Password</label>
                <input type = "text" 
                    value={userData.password} 
                    name = 'password'
                    onChange={handleChange}
                    className={errors.P1 || errors.P2 ? styles.error : styles.success}
                    />
                    {errors.P1 ? (<p>{errors.P1}</p>
                    ): (<p>{errors.P2}</p>
                    )}
            </div>
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Form