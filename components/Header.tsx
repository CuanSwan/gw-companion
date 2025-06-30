import React from 'react';
import { Text } from 'react-native';
interface MyComponentProps {

}
const Header = (props: {title: string; icon: any}) => {
  return (
        <Text>{props.title}</Text>
  )
}

export default Header