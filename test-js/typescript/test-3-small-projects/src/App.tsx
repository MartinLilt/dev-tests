import React from 'react';
import CounterClass from './components/CounterClass';
import CounterFn from './components/CounterFn';
import ColorPicker from './components/ColorPicker';
import Form from './components/Form';

const colorPickerOps = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
    <>
      {/* <ColorPicker options={colorPickerOps} /> */}
      <Form onSubmit={(cred) => console.log(cred)} />
    </>
  );
}

export default App;
