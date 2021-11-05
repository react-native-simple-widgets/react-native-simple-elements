import { storiesOf } from "@storybook/react";
import * as React from 'react';
import Switch from 'react-native-simple-elements/components/Switch';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { View } from "react-native";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const SwitchExample = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

storiesOf("Switch", module)
    .add("Default", () => {
        return (
            <SwitchExample />
        )
    })
    .add("Mobile View", () => {
        const [isSwitchOn, setIsSwitchOn] = React.useState(false);

        const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

        return (
            <View
                style={{
                    alignItems: "center",
                    flexDirection: 'row',
                }}
            >
                <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                />
            </View>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add("Playground", () => {
        return (
            <SwitchExample />
        )
    })
