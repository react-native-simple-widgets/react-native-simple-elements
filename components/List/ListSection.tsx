import * as React from "react";
import {
    View,
    ViewStyle,
    StyleSheet,
    StyleProp,
    TextStyle,
} from "react-native";
import ListSubheader from "./ListSubheader";
import { DefaultTheme } from "styled-components";

type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title text for the section.
     */
    title?: string;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme?: DefaultTheme;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
};

/**
 * A component used to group list items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/list-section.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ListItem } from 'react-native-simple-elements/components/List';
 *
 * const MyComponent = () => (
 *   <List.Section>
 *     <List.Subheader>Some title</List.Subheader>
 *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
 *     <List.Item
 *       title="Second Item"
 *       left={() => <List.Icon color="#000" icon="folder" />}
 *     />
 *   </List.Section>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListSection = ({
    children,
    title,
    titleStyle,
    style,
    ...rest
}: Props) => (
    <View {...rest} style={[styles.container, style]}>
        {title && <ListSubheader style={titleStyle}>{title}</ListSubheader>}
        {children}
    </View>
);

ListSection.displayName = "List.Section";

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
});

export default ListSection;
