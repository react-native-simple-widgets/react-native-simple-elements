import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox, { CheckboxItem } from "react-native-simple-elements/components/Checkbox";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { View } from "react-native";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

storiesOf("Checkbox", module)
    .add("Default", () => {

        return (
            <>
                <Checkbox
                    status='unchecked'
                />
                <Checkbox
                    status='indeterminate'
                />
                <Checkbox
                    status='checked'
                />
            </>
        )
    })
    .add("Mobile View", () => {

        const [ checked, setChecked ] = React.useState<"checked" | "unchecked" | "indeterminate">("unchecked");
        const [ checked1, setChecked1 ] = React.useState<"checked" | "unchecked" | "indeterminate">("indeterminate");
        const [ checked2, setChecked2 ] = React.useState<"checked" | "unchecked" | "indeterminate">("checked");

        return (
            <>
                <View
                    // style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <CheckboxItem
                        testID="checkbox"
                        status={checked}
                        label={"Unchecked"}
                        onPress={() => {
                            setChecked(checked === "checked" ? "unchecked" : "checked");
                        }}
                    />
                </View>
                <CheckboxItem
                    status={checked1}
                    label={"Indeterminate"}
                    onPress={() => {
                        setChecked1(checked1 === "checked" ? "unchecked" : "checked");
                    }}
                />
                <CheckboxItem
                    status={checked2}
                    label={"Checked"}
                    onPress={() => {
                        setChecked2(checked2 === "checked" ? "unchecked" : "checked");
                    }}
                />
            </>
        )
    }, {
        viewport: {
            ...viewportParams,
            defaultViewport: "iphonex",
        },
    })
    .add("Playground", () => {

        return (
            <Checkbox
                status='checked'
            />
        )
    })
