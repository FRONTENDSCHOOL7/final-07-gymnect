import React from 'react';
import { Background, Section, Container } from './LoginModalStyle';
import LoginForm from '../../../../pages/Login/LoginForm';

export default function Modal() {

  return (
    <>
        <Background />
        <Section>
            <Container>
              <LoginForm />
            </Container>
        </Section>
    </>
  )
}