import styled from 'styled-components'

export const MultilingualContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto';

  padding: 20px 30px;
`
export const Heading = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #1e293b;
  margin-top: 0;
`
export const Languages = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: center;
  gap: 50px;
`
export const Language = styled.li`
  list-style-type: none;
`
export const CustomLanguageButton = styled.button`
  list-style-type: none;
  color: ${props => (props.active === 'yes' ? '#ffffff' : '#db1c48')};
  border-style: solid;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${props =>
    props.active === 'yes' ? '#db1c48' : 'transparent'};
  border-color: #db1c48;
`
export const Greeting = styled.div`
  padding: 10px 20px;
  margin-top: 80px;
  margin: auto;
  width: 500px;
  text-align: center;
  background-color: white;
`
export const Image = styled.img`
  width: 80%;
`
