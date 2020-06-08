import React, { useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  BacktoSignIn,
  BacktoSignInText,

} from './styles';
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef}
              onSubmit={(data) => {
                console.log(data);
              }}>
              <Input name="name" icon="user" placeholder="Usuario" />
              <Input name="Email" icon="mail" placeholder="E-mail" />
              <Input name="Password" icon="lock" placeholder="Senha" />

              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
          </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BacktoSignIn onPress={() => navigation.goBack('SignIn')} >
        <Icon name="arrow-left" size={20} color="#fff" />
        <BacktoSignInText>Voltar Para Logon</BacktoSignInText>
      </BacktoSignIn>
    </>
  );
};

export default SignUp;

