import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { default as PaperProvider } from "./theme/Provider";
// import { ThemeProvider } from 'my-ui-lib'
// import { TranslationProvider } from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({ children }) => {
    return (
        <PaperProvider>
            {/* <PaperProvider theme="light"> */}
            {/* <TranslationProvider messages={defaultStrings}> */}
            {children}
            {/* </TranslationProvider> */}
        </PaperProvider>
    );
};

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
