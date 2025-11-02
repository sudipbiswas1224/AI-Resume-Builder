import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeft, ArrowLeftIcon, Briefcase, FileText, FolderIcon, GraduationCap, Sparkle, Sparkles, User } from 'lucide-react';

const ResumeBuilder = () => {
  const {resumeId} = useParams();
  const [resumeData, setResumeData] = useState({
    _id:"",
    title:"",
    professional_info:{},
    professional_info:"",
    experience:[],
    project:[],
    skills:[],
    template:"classic",
    accent_color:"#3b82F6",
    public:false
  })

  const loadExistingResume = async () =>{
    const resume = dummyResumeData.find(resume =>  resume._id == resumeId);
    if(resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  }

  const sections = [
    { id:"personal", name: "Personal Info", icon: User},
    { id:"summary", name: "summary", icon: FileText},
    { id:"experience", name: "Experience", icon: Briefcase},
    { id:"education", name: "Education", icon: GraduationCap},
    { id:"projects", name: "Projects", icon: FolderIcon},
    { id:"skills", name: "Skills", icon: Sparkles},
  ]

  useEffect(()=>{
    loadExistingResume()
  },[])
  return (
    <div>
        <div className='max-w-7xl  mx-auto px-4 py-6'>
          {/* Back to Dash board */}
          <Link to='/app' className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all '>
            <ArrowLeftIcon className='size-4' /> Back to Dashboard
          </Link>
        </div>

        <div className='max-w-7xl mx-auto px-4 pb-8'>
          <div className='grid lg:grid-cols-2 gap-8' >
            {/* Left Panel -Form */}
            <div></div>

            {/* Right panel - Preview */}
            <div></div>

          </div>
        </div>


    </div>
  )
}

export default ResumeBuilder