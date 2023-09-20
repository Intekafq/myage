import React, { useState } from 'react'

const Age = () => {
    const [birthDate, setBirthDate] = useState("");
    const [date, setDate] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)

    const calculateAge = (birthDate) => {
        if (!birthDate) return;

        const currentDate = new Date();
        if (new Date(birthDate) > currentDate) {
          setBirthDate("");
          setYear(null);
          setMonth(null);
          setDate(null);
          alert("Enter your correct DOB");
          return;
        }

        const diffTime = currentDate - new Date(birthDate);
        const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setYear(Math.floor(totalDays / 365.25));
        setMonth(Math.floor((totalDays % 365.25) / 30.4375));
        setDate(Math.floor((totalDays % 365.25) % 30.4375));
      };
    return (
        <>
            <div className='container'>
           
                  <p className='pp'><span className='TT'>E</span>nter <span className='TT'>Y</span>our <span className='TT'>D</span>ate <span className='TT'>o</span>f <span className='TT'>B</span>irth</p> 
             
                <div className="box-inp">
                   <input type="date" value={birthDate} placeholder='Date' onChange={(e) => {
                  setBirthDate(e.target.value);
                  calculateAge(e.target.value);
                }}  />
                  
                </div>
                <hr />
                {   birthDate &&(
                <div className="heading">
                    
                    <h1 className='ha'><span>{year} </span> Years</h1>
                    <h1 className='ha'><span>{month} </span> Months</h1>
                    <h1 className='ha'><span>{date} </span>Days</h1>
                       
                </div>
                 )}
            </div>
        </>
    )
}

export default Age