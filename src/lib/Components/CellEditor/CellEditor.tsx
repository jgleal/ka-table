import * as React from 'react';

import { Column } from '../../Models/Column';
import { ActionExecuteFunc } from '../../types';
import CellEditorState from '../CellEditorState/CellEditorState';

export interface IFilterRowEditorProps {
  column: Column;
  dispatch: ActionExecuteFunc;
}

export interface ICellEditorProps extends IFilterRowEditorProps {
  field: string;
  isSelectedRow: boolean;
  rowData: any;
  rowKeyField: string;
}

const CellEditor: React.FunctionComponent<ICellEditorProps> = (props) => {
  const { editor } = props.column;
  return editor ? editor(props) :  <CellEditorState {...props}/>;
};

export default CellEditor;
