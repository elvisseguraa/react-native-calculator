import { useState } from 'react';

export const useCounter = (initialNum: number) => {
    
    const [ counter, setCounter ] = useState(initialNum = 10);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const reset = () => {
        setCounter( 0 );
    }

    return {
        counter,
        increment,
        reset,
    }

}
