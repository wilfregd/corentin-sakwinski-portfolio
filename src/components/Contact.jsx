import React, { useState } from 'react'
import FormInput from './form/FormInput';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from "@emailjs/browser";

function Contact() {
    const [inputErrors, setInputErrors] = useState({});
    const [validation, setValidation] = useState();

    const [fields, setFields] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    function updateField(e, field){
        let copy = {...fields};
        copy[field] = e.target.value;

        setFields(fields => ({
            ...copy
        }));
    }

    function sendForm(){
        let curr = {};

        const cName = fields["name"];
        const cEmail = fields["email"];
        const cMessage = fields["message"];

        //Name
        if(cName.length == 0){
            curr["name"] = "Ce champ ne peut pas être vide";
        }

        //Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(cEmail.length == 0){
            curr["email"] = "Ce champ ne peut pas être vide";
        }
        else if(!emailRegex.test(cEmail)){
            curr["email"] = "Adresse email invalide";
        }

        //Message
        if(cMessage.length == 0){
            curr["message"] = "Ce champ ne peut pas être vide";
        }

        //Errors, don't validate
        if(!(Object.keys(curr).length === 0)){
            setErrors(curr);
            return;
        }

        setErrors({});
        setFields({
            name: "",
            email: "",
            message: ""
        });

        setValidation("Message envoyé");
        executeSendMail();
    }

    async function executeSendMail(){
        try{            
            const values = {
                name: fields.name,
                email: fields.email,
                message: fields.message,
            }
            emailjs.send("service_eupenwo", "template_gp38q3o", values, "eF59L91d5WthEM4XG");
        }
        catch(e){
            console.error("Error sending message: " + e);
        }
    }

  return (
    <section id="contact" className='mb-8 md:max-w-xl lg:max-w-2xl m-auto'>
      <h1 className='text-[1.5rem] my-4 py-8 tracking-widest uppercase font-thin text-gray-400'>Contact</h1>
        {
            validation ?
            (
                <div className='flex flex-row space-x-2 justify-center items-center py-32'>
                    <img src="./img/checked.png" className='w-4' />
                    <h1 className="text-green-300 font-thin">{validation}</h1>
                </div>
            )
            :
            (
                <div className='w-full p-4 flex flex-col space-y-6'>
                    <FormInput type="text" errors={errors} label="name" placeholder="Nom" updateField={updateField} />
                    <FormInput type="text" errors={errors} label="email" placeholder="Email" updateField={updateField} />
                    <FormInput area type="text" errors={errors} label="message" placeholder="Message" updateField={updateField} />
                    <button className='w-40 bg-purple-600 py-2 px-4 text-white rounded-md' onClick={sendForm}>Envoyer</button>
                </div>
            )
        }
      </section>
  )
}

export default Contact