import * as React from "react";
import { storiesOf } from "@storybook/react";
// import { text } from "@storybook/addon-knobs";
import Searchbar from "react-native-simple-elements/components/Searchbar";
import { action } from "@storybook/addon-actions";

storiesOf("Searchbar", module)
    .add("Default", () => {
        const [ searchKey, setSearchKey ] = React.useState("");

        return (
            <>
                <Searchbar
                    value={searchKey}
                    onChangeText={(text) => {
                        setSearchKey(text);
                    }}
                    onIconPress={action("onIconPress")}
                />
            </>
        )
    })
    .add("Playground", () => {
        const [ searchKey, setSearchKey ] = React.useState("");

        return (
            <>
                <Searchbar
                    value={searchKey}
                    onChangeText={(text) => {
                        setSearchKey(text);
                    }}
                />
            </>
        )
    });
