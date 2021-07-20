import { useStaticRendering } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Header, Segment } from 'semantic-ui-react'


export default function MessageSuccess() {
    return (
        <Segment>
            <Header>Success</Header>
        </Segment>
    )
}

