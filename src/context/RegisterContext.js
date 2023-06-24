import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  addName: () => {},
  topic: '',
  addTopic: () => {},
  registrationStatus: false,
  changeRegistrationStatus: () => {},
})

export default RegisterContext
