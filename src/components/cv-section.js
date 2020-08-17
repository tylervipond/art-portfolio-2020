import React from 'react';
import { css } from '@emotion/core';

export const CvSection = ({ items }) => (
    <>
        <ul css={css`
            margin: 0;
            padding: 0;
            list-style-type: none;
        `}>
            {
                items.map(({ title, venue, year, order, location }) =>
                    <li css={css`margin: 0`}>
                        <p css={css`margin: 0`}>{title}, {venue}, {year}, {location}</p>
                    </li>
                )
            }
        </ul>
    </>
);