import React from 'react';

export function useDecreaseClick () {
    return React.useCallback((setCount) => {
        setCount((prevCount) => prevCount - 1)})
}
