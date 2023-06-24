import styled from 'styled-components'

export const RegistrationBGContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 300px;
  height: 300px;
`

export const FormElement = styled.form`
  width: 250px;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 32px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelElement = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
`
export const InputElement = styled.input`
  padding: 5px 10px;
  outline: none;
  ::placeholder {
    font-size: 13px;
  }
  margin-bottom: 20px;
  margin-top: 10px;
`
export const SelectElement = styled.select`
  padding: 5px 10px;
  margin-bottom: 30px;
  margin-top: 10px;
`

export const OptionElement = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
`

export const RegisterNowButton = styled.button`
  background-color: #2563eb;
  border: none;
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 5px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
`
