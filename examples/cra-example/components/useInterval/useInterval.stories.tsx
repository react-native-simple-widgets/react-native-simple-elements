import * as React from "react";
import { storiesOf } from "@storybook/react";
import { useInterval } from "react-native-simple-elements/components/hooks/useInterval";

export function UseIntervalExample() {
    const [delay, setDelay] = React.useState(1000);
    const [count, setCount] = React.useState(0);

    // Increment the counter.
    useInterval(() => {
        setCount(count + 1);
    }, delay);

    // Make it faster every second!
    useInterval(() => {
        if (delay > 10) {
            setDelay(delay / 2);
        }
    }, 1000);

    function handleReset() {
        setDelay(1000);
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <h4>Delay: {delay}</h4>
            <button onClick={handleReset}>
                Reset delay
            </button>
        </>
    );
}

storiesOf("hooks/useInterval", module)
    .add("useInterval", () => {
        return (
            <UseIntervalExample
            />
        )
    })
