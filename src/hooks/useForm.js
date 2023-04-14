import { useState } from 'react';

export const useForm = (initialForm = {}) => {
   const [ formValues, setFormValues ] = useState(initialForm);

   const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormValues({
            ...formValues,
            [name]:value,
        });
   }

   const onResetForm = () => {
        setFormValues(initialForm);
   }

   return {
    ...formValues,
    onInputChange,
    onResetForm,
   }
}
