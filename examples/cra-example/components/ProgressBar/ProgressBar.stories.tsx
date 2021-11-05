import * as React from "react";
import { storiesOf } from "@storybook/react";
// import { text } from "@storybook/addon-knobs";
import ProgressBar from "react-native-simple-elements/components/ProgressBar";

storiesOf("ProgressBar", module)
    .add("Default", () => {
        const [ searchKey, setSearchKey ] = React.useState(0.5);

        return (
            <>
                <ProgressBar
                    progress={searchKey}
                />
            </>
        )
    })
    .add("Playground", () => {
        const [ searchKey, setSearchKey ] = React.useState(0.5);

        return (
            <>
                <ProgressBar
                    progress={searchKey}
                />
            </>
        )
    });
