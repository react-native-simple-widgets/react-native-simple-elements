import * as React from 'react';
import { Text } from "react-native";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TouchableRipple from 'react-native-simple-elements/components/TouchableRipple';

const onPress = action("onPress");

storiesOf('TouchableRipple', module)
    .add('Default', () => (
        <TouchableRipple
            onPress={onPress}
            rippleColor="rgba(0, 0, 0, .32)"
        >
            <Text>Text</Text>
        </TouchableRipple>
    ));
