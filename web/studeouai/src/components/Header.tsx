import { Flex,Input,Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserLine} from 'react-icons/ri'
import { Profile } from '../components/Header/Profile'
import { NotificationsNav } from './Header/NotificationsNav'
import { SearchBox } from './Header/SearchBox'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color="purple.500"
      >
        STUDEO
        <Text as="span"color="green.500" >UAI</Text>
      </Text>
     <SearchBox/>
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav/>
       <Profile/>
        </Flex>

    </Flex>
  )
}