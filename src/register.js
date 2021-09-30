import React from "react";

function RegForm(){
    return(
        <div id="regForm">
            <h2>Register</h2>
            <form>
                <input className='regInput' type='text' required placeholder='Name'/>
                <input className='regInput' type='email' required placeholder="Email Address"/>
                <select className='regInput'>
                    <optgroup label="Class 3 - 6">
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                    </optgroup>
                    <optgroup label="Class 7 - 9">
                        <option>Class 7</option>
                        <option>Class 8</option>
                        <option>Class 9</option>
                    </optgroup>
                    <optgroup label="Class 10 - 12">
                        <option>Class 10</option>
                        <option>Class 11</option>
                        <option>Class 12</option>
                    </optgroup>


                </select>

                <button id="formRegBtn" className='regInput'>Register</button>
            </form>
        </div>
    )
}

export default RegForm