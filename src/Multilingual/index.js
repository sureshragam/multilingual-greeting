import {Component} from 'react'
import {
  MultilingualContainer,
  Heading,
  Languages,
  Language,
  CustomLanguageButton,
  Greeting,
  Image,
} from './styledComponents'

class Multilingual extends Component {
  state = {activeLanguage: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  changeLanguage = id => {
    this.setState({activeLanguage: id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguage} = this.state
    const index = languageGreetingsList.findIndex(
      specificLanguage => specificLanguage.id === activeLanguage,
    )

    return (
      <MultilingualContainer>
        <Heading>Multilingual Greetings</Heading>
        <Languages>
          {languageGreetingsList.map(eachLanguage => {
            const {id, buttonText} = eachLanguage
            const onClickButton = () => {
              this.changeLanguage(id)
            }
            const active = id === activeLanguage ? 'yes' : 'no'

            return (
              <Language key={id}>
                <CustomLanguageButton onClick={onClickButton} active={active}>
                  {buttonText}
                </CustomLanguageButton>
              </Language>
            )
          })}
        </Languages>
        <Greeting>
          <Image
            src={languageGreetingsList[index].imageUrl}
            alt={languageGreetingsList[index].imageAltText}
          />
        </Greeting>
      </MultilingualContainer>
    )
  }
}

export default Multilingual
