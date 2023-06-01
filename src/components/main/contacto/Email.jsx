import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';



export function Email(props) {
  const { url } = props;

  return (
    
    <Button href={url}>Click me</Button>
    
  );
}
