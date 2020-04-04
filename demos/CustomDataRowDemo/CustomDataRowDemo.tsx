import React, { useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, SortDirection, SortingMode } from 'ka-table/enums';
import { DataRowFuncPropsWithChildren, DispatchFunc } from 'ka-table/types';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
  { id: 2, name: 'Billi Bob', score: 55, passed: false },
  { id: 3, name: 'Tom Williams', score: 45, passed: false },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false },
];

const DataRow: React.FC<DataRowFuncPropsWithChildren> = ({rowData}) => {
  return (
    <div>
      {rowData.name}: {rowData.score} ({rowData.passed ? 'Passed' : 'Failed'})
    </div>
  );
};

const tablePropsInit: ITableProps = {
  columns: [
    {
      dataType: DataType.String,
      key: 'name',
      sortDirection: SortDirection.Descend,
      style: { width: 60 },
      title: 'Student',
    },
    { key: 'score', title: 'Score', dataType: DataType.Number },
  ],
  data: dataArray,
  dataRow: (props) => <DataRow {...props}/>,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};

const CustomDataRowDemo: React.FC = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch: DispatchFunc = (action) => {
    changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));
  };
  return (
    <Table
      {...tableProps}
      dispatch={dispatch}
    />
  );
};

export default CustomDataRowDemo;