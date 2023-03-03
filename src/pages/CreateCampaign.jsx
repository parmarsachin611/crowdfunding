import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCampaign = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [Form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      { isLoading && "Loading..." }
      <div className="">
        
      </div>
    </div>
  )
}

export default CreateCampaign