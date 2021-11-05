import * as React from 'react';
import { ThemeProvider } from "styled-components";
import LightTheme from "react-native-simple-elements/components/theme/LightTheme";
import ToastProvider from 'react-native-simple-elements/components/Toast';
import { Viewport } from "react-native-simple-elements/components/Container";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/home/HomePage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { SettingPage } from './pages/setting/SettingPage';

function SplashScreen() {
    return (
        <div>
            Loading...
        </div>
    )
}

const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
        screens: {
            Home: '',
            Profile: ':id/profile',
            Setting: ':id/blog',
        }
    },
};

function App() {

    return (
        <ThemeProvider theme={LightTheme}>
            <ToastProvider>
                <Viewport>
                    <Switch>
                        <Route path="/" component={HomePage} exact={true}/>
                        <Route path="/home" component={HomePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/setting" component={SettingPage} />
                    </Switch>
                </Viewport>
            </ToastProvider>
        </ThemeProvider>
    );
}

export default App;
