import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    height: 80px;
    align-items: center;
    justify-content: center;
`;

export const GitHubButton = styled.TouchableOpacity`
    border-radius: ${80 / 2}px;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

export const GitHubIcon = styled(Feather)``;
