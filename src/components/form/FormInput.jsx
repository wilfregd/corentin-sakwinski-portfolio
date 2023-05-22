import React from 'react'

function FormInput({ errors, type, label, placeholder, updateField, area }) {
    return (
    <div className='w-full text-left'>
        {
            (errors && errors[label]) &&
            (
                <div className='flex flex-row space-x-2 items-center'>
                    <img src="./img/error.png" className='w-4' />
                    <p className="font-thin text-red-500">{errors[label]}</p>
                </div>
            )
        }
        {
            !area ?
            (
                <input className={("contact-input w-full " + (errors && errors[label] ? "border-b-red-500" : ""))} type={type} placeholder={placeholder} onChange={(e) => updateField(e, label)} />
            )
            :
            (
                <textarea className={("contact-input w-full h-32 " + (errors && errors[label] ? "border-b-red-500" : ""))} placeholder={placeholder} onChange={(e) => updateField(e, label)} />
            )
        }
    </div>
  )
}

export default FormInput