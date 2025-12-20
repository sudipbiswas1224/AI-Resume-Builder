import React, { useState } from 'react'

const SkillsForm = ({data, onChange}) => {

    const [newSkill, setNewSkill] = useState("");
    /* adding a new skill */
    const addSkill = () => {
        if(newSkill.trim() && !data.includes(newSkill.trim())){
            onChange([...data, newSkill.trim()]);
        }
    }

    /* removing a skill */
    const removeSkill = (indToRemove)=> {
        const updatedSkills = data.filter((_, ind) => ind != indToRemove);
        onChange(updatedSkills);
    }

    /* Add skill on enter key press */
    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            addSkill();
        }
    }
  return (
    <div className='space-y-4'>
        <div>
            
        </div>

    </div>
  )
}

export default SkillsForm