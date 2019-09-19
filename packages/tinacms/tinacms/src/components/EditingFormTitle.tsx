import * as React from 'react'
import styled from 'styled-components'

import { LeftArrowIcon } from '@tinacms/icons'

const EditingFormTitle = ({form, setEditingForm, isMultiform }: any) => {
    return (
        <StyledEditingFormTitle isMultiform={isMultiform} onClick={() => isMultiform && setEditingForm(null)}>
            {isMultiform && <LeftArrowIcon />}
            <h1>{form.label}</h1>
        </StyledEditingFormTitle>
)}

const StyledEditingFormTitle = styled.div<{isMultiform: Boolean}>`
    cursor: ${p => p.isMultiform && 'pointer'};
    background-color: ${p => p.theme.color.light};
    border-bottom: 1px solid rgba(51,51,51,0.04);
    display: flex;  
    align-items: center;
    padding:  ${p => p.theme.padding}rem;
    color: inherit;
    transition: color 250ms ease;
    svg {
        width: 15px;
        fill: #949494;
        height: 15px;
        transform: translate3d(-4px, 0, 0);
        transition: transform 250ms ease;
    }
    :hover {
        color: ${p => p.isMultiform && `${p.theme.color.primary}`};
        transition: color 250ms ease;
        svg {
        transform: translate3d(-7px, 0, 0);
        transition: transform 250ms ease;
        }
    }
`

export default EditingFormTitle;