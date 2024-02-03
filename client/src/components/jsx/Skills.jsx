import React,{useState, useEffect} from "react";
import "../css/Skills.css"

function Skills() {
    const [skills, setSkill] = useState(["gardening", "plumbing", "vacuuming"]);
    const [show, setShow] = useState(false);
    const [addedSkill, setAddedSkill] = useState('');

    const newSkill = (e) => {
        // if(e.key==='Enter'){
        //     console.log("skill inputted");
        // } else {
            setAddedSkill(e.target.value);
        // }
        // console.log(e.key);
    }

    const submitNew = (e) => {
        if (e.key==='Enter'){
            setSkill(skills=>[...skills,addedSkill]);
            setAddedSkill('');
            setShow(false);
        }
    }
    return (
        <>
            <h1>Your Skills</h1>
            <p>These skills will be how people filter you when searching</p>
            <button onClick={() => setShow(!show)}>&#43;</button>

            {show && (
                <div className="input-container">
                    <input type="text" placeholder="Enter new skill" onChange={newSkill} onKeyDown={submitNew}/>
                </div>
            )}

            
            <ul >
                {skills.map((skill, index) => (
                <li className="skill-map" key={index}>{index+1}. {skill}</li>
                ))}
            </ul>
        </>
    );
}

export default Skills