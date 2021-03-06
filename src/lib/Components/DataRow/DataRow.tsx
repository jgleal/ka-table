import React from 'react';

import { reorderRows } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IRowProps } from '../../props';
import { ChildAttributesItem } from '../../types';
import { addElementAttributes, getElementCustomization } from '../../Utils/ComponentUtils';
import { getDraggableProps } from '../../Utils/PropsUtils';
import DataRowContent from '../DataRowContent/DataRowContent';
import EmptyCells from '../EmptyCells/EmptyCells';

const DataRow: React.FunctionComponent<IRowProps> = (props) => {
  const {
    dispatch,
    columns,
    groupColumnsCount,
    isSelectedRow,
    rowKeyValue,
    rowReordering,
    trRef,
  } = props;
  let {
    childComponents : { dataRow },
  } = props;

  if (rowReordering){
    const reorderedRowProps: ChildAttributesItem<IRowProps> = getDraggableProps(rowKeyValue, dispatch, reorderRows, defaultOptions.css.draggedRow, defaultOptions.css.dragOverRow);
    dataRow = addElementAttributes(reorderedRowProps, props, dataRow);
  }

  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.row} ${isSelectedRow ? defaultOptions.css.rowSelected : ''}`
  }, props, dataRow);

  return (
    <tr {...elementAttributes} ref={trRef} >
      <EmptyCells count={groupColumnsCount}/>
      {content
        ? <td className={defaultOptions.css.cell} colSpan={columns.length - groupColumnsCount}>{content}</td>
        : <DataRowContent {...props}/>}
    </tr>
  );
};


export default DataRow;
