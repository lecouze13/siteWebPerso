import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from './useTheme';
import { getFromLS } from './storage';

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
    height:200px;
    width:300px;
`;

const Container = styled.ul`
display: flex;
gap: 1rem;
/* grid-template-columns: repeat(4,1fr); */
margin-top: 3rem;
padding: 10px;
flex-wrap: wrap;
justify-content: center;
align-items: stretch;
flex-direction: row;
}
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

function ThemeSelector(props) {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const { setMode } = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);


    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = { ...data, [key]: theme[key] };
        setData(updated);
    }
    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])// eslint-disable-line react-hooks/exhaustive-deps

    const ThemeCard = props => {
        return (
            <Wrapper style={{
                backgroundColor: `${data[_.camelCase(props.theme.name)].colors.text}`,
                color: `${data[_.camelCase(props.theme.name)].colors.button.background}`,
                fontFamily: `${data[_.camelCase(props.theme.name)].font}`
            }}>
                <span>Cliquez sur le bouton pour changer de theme</span>
                <ThemedButton onClick={(theme) => themeSwitcher(props.theme)}
                    style={{

                        color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                        fontFamily: `${data[_.camelCase(props.theme.name)].font}`
                    }}>
                    {props.theme.name}
                </ThemedButton>
            </Wrapper>
        )
    }

    return (
        <div>
            <Header>Choisissez un theme  </Header>
            <Container>
                {
                    themes.length > 0 &&
                    themes.map(theme => (
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
                }
            </Container>
        </div>
    )
}
export default ThemeSelector