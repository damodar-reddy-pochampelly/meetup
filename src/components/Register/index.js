import {Component} from 'react'

import {
  RegistrationBGContainer,
  BodyContainer,
  Image,
  FormElement,
  FormHeading,
  InputContainer,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {userName: '', userTopic: topicsList[0].id, errorMessage: ''}

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({userTopic: event.target.value})
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {addName, addTopic, changeRegistrationStatus} = value
          const {userName, userTopic, errorMessage} = this.state

          const onFormSubmit = event => {
            event.preventDefault()
            if (userName === '') {
              this.setState({errorMessage: 'Please enter your name'})
            } else {
              const currentTopic = topicsList.filter(
                eachTopic => eachTopic.id === userTopic,
              )
              addName(userName)
              addTopic(currentTopic[0].displayText)
              changeRegistrationStatus()
              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <RegistrationBGContainer>
              <Header />
              <BodyContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormElement onSubmit={onFormSubmit}>
                  <FormHeading>Let us join</FormHeading>
                  <InputContainer>
                    <LabelElement htmlFor="NAME">NAME</LabelElement>
                    <InputElement
                      type="text"
                      placeholder="Your name"
                      id="NAME"
                      onChange={this.onChangeName}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelElement htmlFor="TOPIC">TOPICS</LabelElement>
                    <SelectElement
                      id="TOPIC"
                      onChange={this.onChangeTopic}
                      value={userTopic}
                    >
                      {topicsList.map(eachTopic => (
                        <OptionElement key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </OptionElement>
                      ))}
                    </SelectElement>
                  </InputContainer>
                  <RegisterNowButton type="submit">
                    Register Now
                  </RegisterNowButton>
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                </FormElement>
              </BodyContainer>
            </RegistrationBGContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
