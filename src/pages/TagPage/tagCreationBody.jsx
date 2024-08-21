import React, { useState } from 'react'
import InputText from '../../components/inputComponent/InputText'
import FormComponent from '../../components/FormComponent'
import { minWidth, style, width } from '@mui/system'

export default function TagCreationBody() {
  const [formData ,setFormData] = useState({})
  const formJson= [
    {
        id:0,
        type:"text",
    },
    {
        id: 1,
        type: "text",
        required: true,
        name:"tagName",
        label: "Tag Name",
        placeholder: "Enter tag name",
        disabled: false,
        fullWidth: true,
        style: {
          width: "300px",
          height: "50px",
          fontSize: "14px",
        },
      
    },{
        id: 2,
        type: "text",
        required: true,
        name:"tagDescription",
        label: "Tag Description",
        placeholder: "Enter tag description",
        disabled: false,
        fullWidth: true,
        minlength: 3,
        maxlength: 100,
        multiline: true,
        
         style: {
          width: "300px",
          height: "150px",
          
          fontSize: "14px",
        },
    }
    
  ]
  return (
    <div style={{marginTop:"5px"}}>
       {formJson.map((field,index)=>{
        return(
            <div style={{marginTop:"10px"}}>
               <FormComponent
                  fieldType={field.type}
                  key={field.id}
                  {...field}
               />
               </div>
           
        )
       })}
    </div>
  )
}
