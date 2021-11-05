import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { AvatarIcon, AvatarImage, AvatarText } from "react-native-simple-elements/components/Avatar";
import AccountIcon from "@mdi/svg/svg/account.svg";
import { number, select, withKnobs } from "@storybook/addon-knobs";
import * as colornames from "color-name";
import Color from "color";

const DefaultExample = (props) => {

    return (
        <>
            <AvatarText
                label={"HN"}
            />
            <AvatarIcon
                icon={AccountIcon}
            />
            <AvatarImage
                source={{
                    uri: "https://via.placeholder.com/150x150"
                }}
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    const size = number("size", 24);
    const color = select("color", colornames, colornames.green);

    return (
        <>
            <AvatarText
                label={"HN"}
                size={size}
                color={Color.rgb(color).hex()}
            />
            <AvatarIcon
                icon={AccountIcon}
                size={size}
                color={Color.rgb(color).hex()}
            />
            <AvatarImage
                source={{
                    uri: "https://via.placeholder.com/150x150"
                }}
                size={size}
            />
        </>
    );
};

storiesOf("Avatar", module)
    .addDecorator(withKnobs)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
