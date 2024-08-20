import { type FC, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormProps {}

interface Form {
  name: string,
  email: string,
  password: string
}

enum Field {
  Name = "name",
  Email = "email",
  Password = "password",
}

const formStyle =
  "flex flex-col gap-4 max-w-80 p-5 bg-white rounded-lg border border-solid border-slate-200 hover:shadow-lg cursor-pointer"

const inputStyle =
  "w-full px-3 py-2 bg-slate-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

const Form: FC<FormProps> = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: ""
  })

  function handleInputChange(e) {
    const data = {...form}
    data[e.target.name] = e.target.value
    setForm(data)

    console.log(data)
  }

  return (
    <div id="Form" className={formStyle}>
      <h2 className="text-2xl font-semibold">Form example</h2>

      <input
        type="text"
        name={Field.Name}
        id={Field.Name}
        value={form[Field.Name]}
        placeholder={Field.Name}
        onChange={handleInputChange}
        className={inputStyle}
        required
      />

      <input
        type="email"
        name={Field.Email}
        id={Field.Email}
        value={form[Field.Email]}
        placeholder={Field.Email}
        onChange={handleInputChange}
        className={inputStyle}
        required
      />

      <input
        type="password"
        name={Field.Password}
        id={Field.Password}
        value={form[Field.Password]}
        placeholder={Field.Password}
        onChange={handleInputChange}
        className={inputStyle}
        required
      />

      <button type="submit" className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>Submit</button>
    </div>
  )
}

export default Form;
