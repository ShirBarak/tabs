import './App.css';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

function App() {
  const methods = useForm();
  const [show, setShow] = useState(true);
  useEffect(() => console.log(methods.watch())
  )

  return (
    <div className="App">
      <FormProvider {...methods}>
        {show && <Controller name='a' render={({ field, fieldState }) => <input {...field}></input>} />}
        <Button variant='contained' onClick={() => setShow(p => !p)}></Button>
      </FormProvider>
    </div>
  );
}

export default App;
