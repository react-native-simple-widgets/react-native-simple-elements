import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { action } from "@storybook/addon-actions";
import {
    ListAccordion,
    ListAccordionGroup,
    ListSection,
    ListItem,
    ListIcon,
} from "react-native-simple-elements/components/List";
import FolderIcon from "@mdi/svg/svg/folder.svg";
import CalendarIcon from "@mdi/svg/svg/calendar.svg";
import StarIcon from "@mdi/svg/svg/star.svg";
import ChevronRightIcon from "@mdi/svg/svg/chevron-right.svg";
import Surface from "react-native-simple-elements/components/Surface";
import Text from "react-native-simple-elements/components/Text";

const viewportParams = {
    viewports: {
        ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "responsive",
};

const iphonexViewport = {
    viewport: { ...viewportParams, defaultViewport: "iphonex" }
};

const MobileExample = () => {
    return (
        <View>
            <ListItem
                title={"First item"}
                description={"First item description"}
            />
            <ListItem
                title={"Second item"}
                description={"Second item description"}
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
            />
            <ListItem
                title={"Third item"}
                description={"Third item description"}
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
                right={props => (
                    <ListIcon icon={StarIcon} />
                )}
            />
            <ListItem
                title={"Fourth item"}
                description={"Fourth item description"}
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
                right={props => (
                    <ListIcon icon={ChevronRightIcon} />
                )}
                onPress={action("onPress")}
            />
        </View>
    )
}

const ListItemExample = () => {
    return (
        <View>
            <ListItem
                title={"First item"}
                description={"First item description"}
            />
            <ListItem
                title={"Second item"}
                description={"Second item description"}
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
            />
            <ListItem
                title={"Third item"}
                description={"Third item description"}
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
                right={props => (
                    <ListIcon icon={StarIcon} />
                )}
            />
        </View>
    )
}

const WithRenderContentExample = () => {
    return (
        <View>
            <ListItem
                left={props => (
                    <ListIcon icon={CalendarIcon} />
                )}
                right={props => (
                    <ListIcon icon={StarIcon} />
                )}
                content={props => (
                    <View>
                        <Text>Title</Text>
                    </View>
                )}
            />
        </View>
    )
}

const ListExample = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <Surface>
            <ListSection title="Accordions">
                <ListAccordionGroup>
                    <ListAccordion
                        id={"0"}
                        title="Uncontrolled Accordion"
                        left={props => <ListIcon {...props} icon={FolderIcon} />}>
                        <ListItem title="First item" hoveredStyle={[{ backgroundColor: "red" }]} rowStyle={{
                            backgroundColor: "transparent" }}
                            onPress={() => {
                                // do something
                            }}/>
                        <ListItem title="Second item" />
                    </ListAccordion>

                    <ListAccordion
                        id={"1"}
                        title="Controlled Accordion"
                        left={props => <ListIcon {...props} icon={FolderIcon} />}
                        expanded={expanded}
                        onPress={handlePress}>
                        <ListItem title="First item" />
                        <ListItem title="Second item" />
                    </ListAccordion>
                </ListAccordionGroup>
            </ListSection>
        </Surface>
    );
};

storiesOf("List", module)
    .add("Default", () => {
        return (
            <ListExample />
        )
    })
    .add("Mobile View", () => <MobileExample />, iphonexViewport)
    .add("List.Item", () => <ListItemExample />)
    .add("with render content", () => <WithRenderContentExample />)
    .add("Playground", () => {
        return (
            <ListExample />
        )
    });
