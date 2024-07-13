import Loading from "@/components/ui/loading";
import { useGetMessagesQuery } from "@/controllers/API/queries/messages";
import { useIsFetching } from "@tanstack/react-query";
import {
  CellEditRequestEvent,
  NewValueParams,
  SelectionChangedEvent,
  ColDef, ColGroupDef,
} from "ag-grid-community";
import cloneDeep from "lodash/cloneDeep";
import { useMemo, useState } from "react";
import TableComponent from "../../../../components/tableComponent";
import useRemoveMessages from "../../../../pages/SettingsPage/pages/messagesPage/hooks/use-remove-messages";
import useUpdateMessage from "../../../../pages/SettingsPage/pages/messagesPage/hooks/use-updateMessage";
import useAlertStore from "../../../../stores/alertStore";
import { useMessagesStore } from "../../../../stores/messagesStore";
import { messagesSorter } from "../../../../utils/utils";
import { useTranslation } from "react-i18next";

export default function SessionView({
  session,
  id,
}: {
  session?: string;
  id?: string;
}) {
  const columns = useMessagesStore((state) => state.columns);
  const messages = useMessagesStore((state) => state.messages);
  const setErrorData = useAlertStore((state) => state.setErrorData);
  const setSuccessData = useAlertStore((state) => state.setSuccessData);

  const isFetching = useIsFetching({
    queryKey: ["useGetMessagesQuery"],
    exact: false,
  });
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const { handleRemoveMessages } = useRemoveMessages(
    setSelectedRows,
    setSuccessData,
    setErrorData,
    selectedRows,
  );

  const { handleUpdate } = useUpdateMessage(setSuccessData, setErrorData);

  function handleUpdateMessage(event: NewValueParams<any, string>) {
    const newValue = event.newValue;
    const field = event.column.getColId();
    const row = cloneDeep(event.data);
    const data = {
      ...row,
      [field]: newValue,
    };
    handleUpdate(data).catch((error) => {
      event.data[field] = event.oldValue;
      event.api.refreshCells();
    });
  }
  const { t } = useTranslation();

  const columnDefs = columns.map((col, idx) => ({
    ...col,
    headerName: t(col.field),
    resizable: true,
  })) as (ColDef<any> | ColGroupDef<any>)[];


  const filteredMessages = useMemo(() => {
    let filteredMessages = session
      ? messages.filter((message) => message.session_id === session)
      : messages;
    filteredMessages = id
      ? filteredMessages.filter((message) => message.flow_id === id)
      : filteredMessages;
    return filteredMessages;
  }, [session, id, messages]);

  return isFetching > 0 ? (
    <div className="flex h-full w-full items-center justify-center align-middle">
      <Loading></Loading>
    </div>
  ) : (
    <TableComponent
      key={"sessionView"}
      onDelete={handleRemoveMessages}
      readOnlyEdit
      editable={[
        { field: "text", onUpdate: handleUpdateMessage, editableCell: false },
      ]}
      overlayNoRowsTemplate={t("No data available")}
      onSelectionChanged={(event: SelectionChangedEvent) => {
        setSelectedRows(event.api.getSelectedRows().map((row) => row.id));
      }}
      rowSelection="multiple"
      suppressRowClickSelection={true}
      pagination={true}
      columnDefs={columnDefs.sort(messagesSorter)}
      rowData={filteredMessages}
    />
  );
}
