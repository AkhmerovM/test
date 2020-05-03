import React from 'react';

export function useIncreaseClick () {
    return React.useCallback((setCount) => {
        setCount((prevCount) => prevCount + 1)})
}
