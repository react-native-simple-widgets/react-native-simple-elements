import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { ListItem } from "react-native-simple-elements/components/List";
import { SvgIcon } from "react-native-simple-elements/components/Icon";
import AccountIcon from "@mdi/svg/svg/account.svg";
import ChevronRight from "@mdi/svg/svg/chevron-right.svg";

const DefaultExample = (props) => {

    return (
        <>
            <ListItem
                title={"Title"}
            />
        </>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
            <ListItem
                title={"Title"}
                description={"Description"}
                left={() => (
                    <SvgIcon
                        icon={AccountIcon}
                    />
                )}
                right={() => (
                    <SvgIcon
                        icon={ChevronRight}
                    />
                )}
                rowStyle={{
                    alignItems: "center",
                }}
            />
        </>
    );
};

storiesOf("List", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
