import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
    
    const [waves, setWaves] = useState(0);
    const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

    return (
        <button
            css={css`
                background: rebeccapurple;
                color: #fff;
                border: none;
                font-size: 1.2rem;
                width: 25vw;
            `}
            onClick={() => setWaves(waves + 1)}>
            {label}
        </button>
    )
}

export default Wave;