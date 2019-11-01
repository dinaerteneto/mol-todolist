import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { List } from 'semantic-ui-react';

const SortableList = SortableContainer(({children}) => {
    return <List celled>{children}</List>
});

export default SortableList;