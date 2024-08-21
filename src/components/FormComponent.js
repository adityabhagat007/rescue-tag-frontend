import React from 'react'
import InputText from './inputComponent/InputText'
import CustomAutoComplete from './inputComponent/CustomAutoComplete'

export default function FormComponent(props) {
  const FORM_JSON = {
    text : <InputText {...props} />,
    autoComplete : <CustomAutoComplete {...props} />
  }
  
  return (
    <>{FORM_JSON[props.fieldType]}</>
  )
}
