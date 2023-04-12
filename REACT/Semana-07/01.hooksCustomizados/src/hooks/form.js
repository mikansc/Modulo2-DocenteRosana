import { useState } from "react";

export const useFormulario = (valorInicial) => {
  const [formValues, setFormValues] = useState(valorInicial);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    setFormValues(valorInicial);
  };

  const changeForm = (event) => {
    const { name, value } = event.target;
    console.log(formValues);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return [formValues, handleSubmit, changeForm];
}















export const useForm = (initialValue = {}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const resetForm = () => setFormValue(initialValue);

  return [formValue, onChange, resetForm];
};
