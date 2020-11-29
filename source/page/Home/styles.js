import styled from 'styled-components/native';
import { EvilIcons } from '@expo/vector-icons';

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#000'
})``;

export const CardsContainer = styled.View`
    flex: 1;
    background-color: #FEFEFE;
    justify-content: center;
    align-items: center;
`;

export const CardOneContainer = styled.View`
    border-radius: 20px;
    padding: 20px;
`;

export const CardOneLineOneContainer = styled.View`
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
`;

export const SymbolNative = styled.Text`
    font-size: ${props => props.isInValueInsertInput ? 30 : 20}px;
    font-weight: ${props => props.isBold ? 'bold' : 'normal'};
    align-self: center;
`;

export const NameCurrency = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const CardOneLineTwoContainer = styled.View`
    flex-direction: row;
    margin-left: 20px;
    margin-top: 10px;
`;

export const ValueInsertInput = styled.TextInput`
    font-size: 50px;
    max-width: 255px;
`;

export const ValueInsertResult = styled.Text`
    font-size: 50px;
    max-width: 200px;
`;

export const CardTwoContainer = styled.View`
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;
`;

export const CardTwoLineOneContainer = styled.View`
    flex-direction: row;
    margin-left: 20px;
    margin-bottom: 30px;
`;

export const CardTwoLineTwoContainer = styled.View`
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
`;

export const IconEvilIcons = styled(EvilIcons)``;

export const IconRefreshContainer = styled.TouchableOpacity`
    border-radius: ${60 / 2}px;
    position: absolute;
    height: 60px;
    justify-content: center;
    background-color: white;
    z-index: 99;
    right: 50px;
`;
