import React from 'react';

import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField, toast} from "@heroui/react";
import { matchNextDataPathname } from 'next/dist/server/lib/match-next-data-pathname';
import { requestPasswordReset } from '@/lib/auth-client';



const ForgotPasswordPage = () => {
   
const handleForgotPassword = async(e) =>{
      e.preventDefault();
      const formData = new formData(e.currenTarget);
      const userData = Object.fromEntries(formData.entries());

      
     const redData = await requestPasswordReset({
        email: userData.email,
        redirectTo: '/reset-password'
     })

      toast.success("An email has sent check your inbox ");

}

  return (
    <div>
    <h2>Forgot Password</h2>
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
     

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
       
      </div>
    </Form>       
    </div>
    );
};

export default ForgotPasswordPage;