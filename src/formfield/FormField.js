import React from 'react';


const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label} </label>
        <div class="control">
        <input class="input" type="{props.type}" placeholder="{props.placeholder}"></input>
        </div>
      </div>
    );
  };
  


export default FormField;