import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './invoices.css';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import ThemeSelector from '../theme/ThemeSelector';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import Header from '../header/header';
export default function Invoices() {
    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    const [newTheme,] = useState();





    useEffect(() => { setSelectedTheme(theme) }, [themeLoaded],);// eslint-disable-line react-hooks/exhaustive-deps

    // 4: Load all the fonts
    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        });
    });


    return (
        <main>
            <Header />
            <Outlet />

            {
                themeLoaded && <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles />


                    <div style={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}>
                        <ThemeSelector setter={setSelectedTheme} newTheme={newTheme} />
                    </div>

                </ThemeProvider>
            }
        </main >
    );
}