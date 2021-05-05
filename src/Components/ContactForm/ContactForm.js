import React from 'react';
import emailjs from 'emailjs-com';
import {
  Container,
  FormWrap,
  FormContent,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInputText,
  FormInputEmail,
  FormButton,
  Text
} from './ContactElements';

export default function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_77o1jl7', 'template_os18hri', e.target, 'user_SLeXDZT6Bp4GxEHvU9Bbl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('Merci pour votre message!')
  }

  return (
    <Container>
      <FormWrap>
        <Icon to='/'>CSPDD</Icon>
        <FormContent>
          <Form className="contact-form" onSubmit={sendEmail}>
            <FormH1>Nous Contacter</FormH1>
            <FormLabel htmlFor='for'>Nom et Prénom</FormLabel>
              <FormInputEmail type="text" name="user_name"  required/>
            <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInputEmail type="email" name="user_email" required/>
            <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInputText name="message" required/>
            <FormButton type="submit" value="Send">Envoyer</FormButton>  
          </Form>
        </FormContent>
      </FormWrap>
   </Container>
  );
}