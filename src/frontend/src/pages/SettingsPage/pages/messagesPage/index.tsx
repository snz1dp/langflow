import {
  CellEditRequestEvent,
  ColDef,
  ColGroupDef,
  SelectionChangedEvent,
} from "ag-grid-community";
import { cloneDeep } from "lodash";
import { useState } from "react";
import TableComponent from "../../../../components/tableComponent";
import useAlertStore from "../../../../stores/alertStore";
import { useMessagesStore } from "../../../../stores/messagesStore";
import { messagesSorter } from "../../../../utils/utils";
import HeaderMessagesComponent from "./components/headerMessages";
import useMessagesTable from "./hooks/use-messages-table";
import useRemoveMessages from "./hooks/use-remove-messages";
import useUpdateMessage from "./hooks/use-updateMessage";
import { useTranslation } from "react-i18next";

export default function MessagesPage() {
  const { t } = useTranslation();

  const [columns, setColumns] = useState<Array<ColDef | ColGroupDef>>([]);
  const messages = useMessagesStore((state) => state.messages);

  const setErrorData = useAlertStore((state) => state.setErrorData);
  const setSuccessData = useAlertStore((state) => state.setSuccessData);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const { handleRemoveMessages } = useRemoveMessages(
    setSelectedRows,
    setSuccessData,
    setErrorData,
    selectedRows,
  );

  const { handleUpdate } = useUpdateMessage(setSuccessData, setErrorData);

  useMessagesTable(setColumns);

  function handleUpdateMessage(event: CellEditRequestEvent<any, string>) {
    const newValue = event.newValue;
    const field = event.column.getColId();
    const row = cloneDeep(event.data);
    const data = {
      ...row,
      [field]: newValue,
    };
    handleUpdate(data);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6">
      <HeaderMessagesComponent />

      <div className="flex h-full w-full flex-col justify-between">
        <TableComponent
          key={"sessionView"}
          onDelete={handleRemoveMessages}
          readOnlyEdit
          onCellEditRequest={(event) => {
            handleUpdateMessage(event);
          }}
          editable={[
            {
              field: "text",
              onUpdate: handleUpdateMessage,
              editableCell: false,
            },
          ]}
          overlayNoRowsTemplate={t("No data available")}
          onSelectionChanged={(event: SelectionChangedEvent) => {
            setSelectedRows(event.api.getSelectedRows().map((row) => row.id));
          }}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          columnDefs={columns.sort(messagesSorter)}
          rowData={messages}
        />
      </div>
    </div>
  );
}
