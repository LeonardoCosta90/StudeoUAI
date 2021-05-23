import { Flex,Input,Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserLine} from 'react-icons/ri'

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
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400'}}
        />
        
       <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>
      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
        >
        <Icon as={RiNotificationLine} fontSize="20"/>
        <Icon as={RiUserLine} fontSize="20"/>
        </HStack>
       
       <Flex align="center">
         <Box mr="4" textAlign="right">
           <Text>Leonardo Costa</Text>
           <Text color="gray.300" fontSize="small">leonardoeverton.tec@gmail.com</Text>          
         </Box>
         <Avatar size="md" name="Leonardo Costa" src="https://github.com/LeonardoCosta90.png"/>
       </Flex>
      </Flex>

    </Flex>
  )
}