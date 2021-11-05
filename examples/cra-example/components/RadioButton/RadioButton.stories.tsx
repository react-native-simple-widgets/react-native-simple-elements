import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import RadioButton, {
    RadioButtonGroup,
    RadioButtonItem,
} from 'react-native-simple-elements/components/RadioButton';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const RadioButtonExample = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
        </View>
    );
};

storiesOf("RadioButton", module)
    .add("Default", () => <RadioButtonExample />)
    .add("Mobile View", () => {
        const [ value, setValue ] = React.useState("first");

        return (
            <RadioButtonGroup
                value={value}
                onValueChange={(newValue) => {
                    setValue(newValue);
                }}
            >
                <RadioButtonItem
                    value="first"
                    label="first"
                />
                <RadioButtonItem
                    value="second"
                    label="second"
                />
            </RadioButtonGroup>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add("RadioButtonGroup", () => {
        const [ value, setValue ] = React.useState("first");

        return (
            <RadioButtonGroup
                value={value}
                onValueChange={(newValue) => {
                    setValue(newValue);
                }}
            >
                <RadioButton
                    value="first"
                />
                <RadioButton
                    value="second"
                />
                <RadioButtonItem
                    value="third"
                    label="third"
                    textAfterButton={true}
                />
            </RadioButtonGroup>
        )
    })
    .add("Playground", () => {
        return <RadioButtonExample />
    });
