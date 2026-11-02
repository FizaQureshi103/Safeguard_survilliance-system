import { useEffect, useState } from "react";

function AnimatedNumber({ value, duration = 600 }) {

    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {

        let start = displayValue;
        let end = value;

        if (start === end) return;

        const difference = end - start;
        const increment = difference / 20;

        let current = start;

        const timer = setInterval(() => {

            current += increment;

            if (
                (increment > 0 && current >= end) ||
                (increment < 0 && current <= end)
            ) {

                current = end;
                clearInterval(timer);

            }

            setDisplayValue(Math.round(current));

        }, duration / 20);

        return () => clearInterval(timer);

    }, [value]);

    return displayValue;

}

export default AnimatedNumber;