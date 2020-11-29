import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currencyListRequest, currencyConvertRequest } from '../../store/ducks/currency/actions';

import CommonCurrency from '../../services/common_currency.json';

import {
    Loading,
    CardsContainer,
    CardOneContainer,
    CardOneLineOneContainer,
    SymbolNative,
    NameCurrency,
    CardOneLineTwoContainer,
    ValueInsertInput,
    ValueInsertResult,
    CardTwoContainer,
    CardTwoLineOneContainer,
    CardTwoLineTwoContainer,
    IconEvilIcons,
    IconRefreshContainer
} from './styles';

export default function Home() {
    const loadingConvert = useSelector(state => state.currency.loadingConvert);
    const valueConverted = useSelector(state => state.currency.valueConverted);

    const loading = useSelector(state => state.currency.loading);
    const dispatch = useDispatch();

    const [cardoneinputvalue, setCardOneInputValue] = useState('');

    const [basecurrencyone, setBaseCurrencyOne] = useState('CAD');
    const [basecurrencytwo, setBaseCurrencyTwo] = useState('USD');

    function loadDispatch(currencyBase) {
        dispatch(currencyListRequest(currencyBase))
    }

    function invertValues() {
        let tmp = basecurrencyone;
        setBaseCurrencyOne(basecurrencytwo);
        setBaseCurrencyTwo(tmp);

        tmp = cardoneinputvalue;
        setCardOneInputValue(String(valueConverted));
    }

    useEffect(() => {
        if (Number(cardoneinputvalue)) {
            dispatch(currencyConvertRequest(basecurrencyone, basecurrencytwo, cardoneinputvalue));
        };

    }, [cardoneinputvalue])

    return (
        <CardsContainer>
            <CardOneContainer style={{
                elevation: 1,
            }}>
                <CardOneLineOneContainer>
                    <SymbolNative isBold={true}>{CommonCurrency[basecurrencyone].symbol_native + " " + CommonCurrency[basecurrencyone].code}</SymbolNative>
                    <NameCurrency>{CommonCurrency[basecurrencyone].name}</NameCurrency>
                </CardOneLineOneContainer>

                <CardOneLineTwoContainer>
                    <SymbolNative
                        isBold={false}
                        isInValueInsertInput={true}
                    >
                        {CommonCurrency[basecurrencyone].symbol_native + " "}
                    </SymbolNative>
                    <ValueInsertInput
                        autoCapitalize='none'
                        autoCompleteType='off'
                        autoCorrect={false}
                        keyboardType='numeric'
                        placeholder='0'
                        placeholderTextColor='#000'
                        value={cardoneinputvalue}
                        onChangeText={value => setCardOneInputValue(value)}
                    />
                </CardOneLineTwoContainer>
            </CardOneContainer>

            <IconRefreshContainer
                onPress={() => invertValues()}
                activeOpacity={.8}
                style={{
                    elevation: 3,
                }}
            >
                <IconEvilIcons name='refresh' size={55} color='black' />
            </IconRefreshContainer>

            <CardTwoContainer style={{
                elevation: 1,
            }}>
                <CardTwoLineOneContainer>
                    <SymbolNative isInValueInsertInput={true}>{CommonCurrency[basecurrencytwo].symbol_native + " "}</SymbolNative>

                    {loadingConvert ? <Loading /> : (
                        <ValueInsertResult>
                            {valueConverted}
                        </ValueInsertResult>
                    )}
                </CardTwoLineOneContainer>

                <CardTwoLineTwoContainer>
                    <SymbolNative isBold={true}>{CommonCurrency[basecurrencytwo].symbol_native + " " + CommonCurrency[basecurrencytwo].code}</SymbolNative>
                    <NameCurrency>{CommonCurrency[basecurrencytwo].name}</NameCurrency>
                </CardTwoLineTwoContainer>
            </CardTwoContainer>
        </CardsContainer>
    )
}
