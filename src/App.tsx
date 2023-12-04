import { FC } from 'react';
import BareComponent from './BareComponent';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h2>Single Rendered Component </h2>
      <BareComponent/>
      <hr/>
      <h2>Multiple Rendered Component of the same Child </h2>
      <BareComponent/>
      <BareComponent/>
      <BareComponent/>
    </div>
  );
};
