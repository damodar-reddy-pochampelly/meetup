import {Link} from 'react-router-dom'

import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeBgContainer,
  NonRegisteredContainer,
  Heading,
  Description,
  RegisterButton,
  MeetupImage,
  Greeting,
  TopicDescription,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {registrationStatus, name, topic} = value

      return (
        <HomeBgContainer>
          <Header />
          {registrationStatus ? (
            <NonRegisteredContainer>
              <Greeting>{`Hello ${name}`}</Greeting>
              <TopicDescription>{`Welcome to ${topic}`}</TopicDescription>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </NonRegisteredContainer>
          ) : (
            <NonRegisteredContainer>
              <Heading>Welcome to Meetup</Heading>
              <Description>Please register for the topic</Description>
              <Link to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <MeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </NonRegisteredContainer>
          )}
        </HomeBgContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
