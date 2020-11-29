import React from 'react';

import { Linking } from 'react-native';

import {
    Container,
    GitHubButton,
    GitHubIcon
} from './styles';

const Footer = () => {
    return (
        <Container>
            <GitHubButton
                onPress={() => Linking.openURL('https://linktr.ee/lucasz.dev')}
                style={{ elevation: 1 }}
                activeOpacity={.9}
            >
                <GitHubIcon
                    name='code'
                    size={40}
                    color='#000'
                />
            </GitHubButton>
        </Container>
    );
}

export default Footer;