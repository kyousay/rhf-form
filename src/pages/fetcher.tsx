import axios from 'axios'
import { Form, useForm } from 'react-hook-form'

type FormSchema = {
  username: string
  age: number
}

const App = () => {
  const { control, register } = useForm<FormSchema>()
  return (
    <Form
      action="/api/test"
      method="post"
      control={control}
      fetcher={(action, { values }) => {
        console.log(action, values)
        axios.post(action, values)
      }}
    >
      <fieldset>
        <label>
          名前:
          <input type="text" {...register('username')} />
        </label>
      </fieldset>
      <fieldset>
        <label>
          年齢:
          <input type="number" {...register('age')} />
        </label>
      </fieldset>
      <button type="submit">送信</button>
    </Form>
  )
}

export default App
