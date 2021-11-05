import * as React from 'react';
import { View } from "react-native";
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { DebounceButton } from 'react-native-simple-elements/components/Button';
import HomeIcon from "@mdi/svg/svg/home.svg";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexlayout = {
    viewport: {
        ...viewportParams,
        defaultViewport: "iphonex",
    },
};

const onPressFn = action("onPress");

const DefaultExample = () => {
    const title = text("title", "Text");

    return (
        <>
            <View>
                <Button
                    onPress={onPressFn}
                >
                    {title}
                </Button>
            </View>
            <View>
                <Button
                    mode="text"
                    onPress={onPressFn}
                >
                    {"Text"}
                </Button>
            </View>
            <View>
                <Button
                    mode="outlined"
                    onPress={onPressFn}
                >
                    {"Outlined"}
                </Button>
            </View>
            <View>
                <Button
                    mode="contained"
                    onPress={onPressFn}
                    hoveredStyle={[
                        { backgroundColor: "red", },
                    ]}
                >
                    {"Contained"}
                </Button>
            </View>
        </>
    )
}

const MobileViewExample = () => {

    const title = text("title", "Text");
    const mode = select('mode', ['text', 'outlined', 'contained'], "text");
    const dark = boolean('dark', false);

    return (
        <>
            <Button
                dark={dark}
                mode={mode}
                onPress={onPressFn}
            >
                {title}
            </Button>
            <Button
                dark={dark}
                mode={"outlined"}
                onPress={onPressFn}
            >
                {title}
            </Button>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Button
                    mode={"contained"}
                    onPress={onPressFn}
                >
                    {title}
                </Button>
            </View>
            <Button
                mode={"contained"}
                icon={HomeIcon}
                onPress={onPressFn}
            >
                {title}
            </Button>
        </>
    )
}

const PrimaryExample = () => {

    const title = text("title", "Text");
    const mode = select('mode', ['text', 'outlined', 'contained'], "text");
    const dark = boolean('dark', false);

    return (
        <Button
            dark={dark}
            mode={mode}
            onPress={onPressFn}
        >
            {title}
        </Button>
    )
}

const WithIconExample = () => {

    return (
        <Button
            icon={HomeIcon}
        >
            With Icon
        </Button>
    )
}

const WithLoadingExample = () => {

    return (
        <Button
            icon={HomeIcon}
            loading={true}
        >
            With Icon
        </Button>
    )
}

const WithDebounceExample = () => {
    const onPress = action("onPress");

    return (
        <>
            <Button
                icon={HomeIcon}
                loading={true}
                onPress={onPress}
            >
                With Icon
            </Button>
            <DebounceButton
                icon={HomeIcon}
                loading={true}
                onPress={onPress}
            >
                With Debounce
            </DebounceButton>
        </>
    )
}

const PlaygroundExample = () => {
    const title = text("title", "Text");
    const mode = select('mode', ['text', 'outlined', 'contained'], "text");
    const dark = boolean('dark', false);

    return (
        <Button
            dark={dark}
            mode={mode}
            onPress={onPressFn}
        >
            {title}
        </Button>
    )
}

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Default', () => <DefaultExample />)
    .add('Mobile View', () => <MobileViewExample />, iphonexlayout)
    .add('Primary', () => <PrimaryExample />)
    .add("with icon", () => <WithIconExample />)
    .add("with loading", () => <WithLoadingExample />)
    .add("with debounce", () => <WithDebounceExample />)
    .add('Playground', () => <PlaygroundExample />);
