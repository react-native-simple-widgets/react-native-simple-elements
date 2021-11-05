import * as React from "react";
import styled from "styled-components/native";

import Button from "../../Button/Button";

const LeftArrowView = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    z-index: 1;
`;

const LeftArrowButton = styled(Button)`
    background-color: transparent;
`;

type Props = {
    title?: string,
    CenterComponent?: React.ReactNode,
    onPress?: (evt?) => void,
}

class LeftArrow extends React.Component<Props> {

    static defaultProps = {
        title: "Left",
    };

    render() {
        const { CenterComponent, onPress } = this.props;

        const comps = CenterComponent ? (
            CenterComponent
        ) : (
            <LeftArrowButton
                onPress={onPress}
            >
                    Left
            </LeftArrowButton>
        );

        return (
            <LeftArrowView pointerEvents="box-none">
                {comps}
            </LeftArrowView>
        );
    }
}

export default LeftArrow;
