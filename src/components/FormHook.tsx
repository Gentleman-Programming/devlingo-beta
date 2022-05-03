import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { useYupValidationResolver } from '@/hooks';

interface IFormInputs {
  name: string;
  surname: string;
  repeatSurname: string;
}

const schema = yup
  .object({
    name: yup.string().min(4).max(10).required(),
    surname: yup.string().min(4).max(10).required(),
    repeatSurname: yup.string().min(4).max(10).required().oneOf([yup.ref("surname")], "Repeat you Surname please")
  })
  .required();

export default function FormHook() {
  const [user, setUser] = useState<IFormInputs[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInputs>({ resolver: useYupValidationResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = (data, event) => {
    if (data.surname !== data.repeatSurname) return;
    setUser([...user, { ...data }]);
    event?.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>
        <input 
          id="name"
          type="text"
          autoComplete="off"
          placeholder="Type your name"
          {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <label htmlFor="surname">Surname: </label>
        <input
          id="surname"
          type="text"
          autoComplete="off"
          placeholder="Type your surname"
          {...register('surname')}
        />
        {errors.surname && <p>{errors.surname.message}</p>}
        <br />

        <label htmlFor="repeatSurname">Repeat Surname: </label>
        <input
          id="repeatSurname"
          type="text"
          autoComplete="off"
          placeholder="Repeat your surname"
          {...register('repeatSurname')}
        />
        {errors.repeatSurname && <p> {errors.repeatSurname.message} </p>}
        <br />
        <br />

        <input type="submit" value="enviar" />
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.surname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
