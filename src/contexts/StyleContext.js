import react from "react";

export const DEFAULT_STYLE = {
    aside: {
        backgroundColor: 'orange',
        color: 'green',
        fontSize: '1.25rem',
        paddingBlock: '2rem'
    },
     innerAside: {
        backgroundColor: 'aquamarine',
        fontFamily: 'Impact',
        paddingBlock: '1rem',
        color: 'white'
     }
}

const StyleContext = React.createContext(DEFAULT_STYLE);

export default StyleContext;