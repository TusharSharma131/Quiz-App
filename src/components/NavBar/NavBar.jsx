import { Box, Flex, Avatar, HStack, IconButton, useDisclosure, useColorMode, Stack } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from './../../Assets/logo.png'
import { Link as ReachLink } from 'react-router-dom'


export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={{ backgroundColor: 'grey' }} px={4}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        _hover={{
                            bg: '#2c2c2d',
                        }}
                        size="sm"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        bg={colorMode === 'dark' ? 'white' : '#2c2c2da8'}
                        color={colorMode === 'dark' ? 'black' : 'white'}
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Avatar
                            size={'sm'}
                            src={logo}
                            w={10}
                            h={10}
                        />
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <ReachLink px={2} py={1} rounded={'md'} style={{ fontWeight: 'bold', fontSize: 19, fontFamily: 'Nunito' }} _hover={{ textDecoration: 'none' }} to="/">Home
                            </ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} style={{ fontWeight: 'bold', fontSize: 19, fontFamily: 'Nunito' }} _hover={{ textDecoration: 'none' }} to="/about">About
                            </ReachLink>
                        </HStack>
                    </HStack>
                    <IconButton
                        size='sm'
                        fontWeight={'bold'}
                        aria-label="Toggle Theme"
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        bg={colorMode === 'dark' ? 'white' : '#2c2c2da8'}
                        color={colorMode === 'dark' ? 'black' : 'white'}
                        onClick={toggleColorMode}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {/* <ReachLink to="/">
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} key={'home'} to={'/about'}>Home</Link>
                            </ReachLink>

                            <ReachLink to="/about">
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} key={'about'} to={'/about'}>About</Link> 
                            </ReachLink> */}
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} to="/">Home
                            </ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} to="/about">About
                            </ReachLink>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

