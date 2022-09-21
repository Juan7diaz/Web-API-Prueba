import { useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const ModalLayout = ({ children, titleButton, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()

  return (
    <>
      <Button
        colorScheme='teal'
        variant='outline'
        color='white'
        onClick={onOpen}>
        +
      </Button>
      <Drawer
        size='sm'
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>{title}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
