import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextInput2 from "react-native-simple-elements/components/TextInput2";
import { SvgIcon } from "react-native-simple-elements/components/Icon";
import EmailIcon from "@mdi/svg/svg/email.svg";

const WithIconExample = () => {
    return (
        <>
            <TextInput2
                leftIcon={
                    <SvgIcon
                        icon={EmailIcon}
                    />
                }
                rightIcon={
                    <SvgIcon
                        icon={EmailIcon}
                    />
                }
                containerStyle={{
                    backgroundColor: "#f2f3f4",
                }}
            />
        </>
    );
}

const Example = (props) => {

    return (
        <>
            <TextInput2
                label="Your label"
            />
        </>
    );
}

storiesOf("TextInput2", module)
    .add("Default", () => <Example />)
    .add("with icon", () => <WithIconExample />)
    .add("Playground", () => <Example />)
