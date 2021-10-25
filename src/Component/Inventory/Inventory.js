import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Inventory = (props) => {
    const ornaments = useContext(RingContext);
    return (
        <div>
            <h1>This is Inventory</h1>
            {ornaments}

        </div>
    );
};

export default Inventory;