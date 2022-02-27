import { FC, createElement } from 'react';
import { BasicForm } from './components/BasicForm';
import { SignupForm } from './components/SignupForm';
import { SimpleInput } from './components/SimpleInput';

import './index.css';

export const App: FC = () => {
  return (
    <div className="app">
      {/* <SimpleInput /> */}
      {/* <BasicForm /> */}
      <SignupForm />
    </div>
  )
}