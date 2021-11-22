import * as React from "react";
import { Text } from "react-native";
import { storiesOf } from "@storybook/react";
import BottomNavigation from "react-native-simple-elements/components/BottomNavigation";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonelayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
};

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNavigationExample = () => {
    const [index, setIndex] = React.useState(0);
    const [routes]: any[] = React.useState([
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

const PlaygroundExample = () => {
    const [index, setIndex] = React.useState(0);
    const [routes]: any[] = React.useState([
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

storiesOf("BottomNavigation", module)
    .add("Default", () => {
        return (
            <BottomNavigationExample />
        )
    })
    .add("MobileView", () => <BottomNavigationExample />, iphonelayout)
    .add("Playground", () => <PlaygroundExample />);
