import { useCallback } from "react";
import { getI18n } from "react-i18next";

const useDeleteMultipleFlows = (
  selectedFlowsComponentsCards: string[],
  removeFlow: (selectedFlowsComponentsCards: string[]) => Promise<void>,
  resetFilter: () => void,
  getFoldersApi: (refetch?: boolean) => Promise<void>,
  folderId: string | undefined,
  myCollectionId: string,
  getFolderById: (id: string) => void,
  setSuccessData: (data: { title: string }) => void,
  setErrorData: (data: { title: string; list: string[] }) => void,
) => {
  const { t } = getI18n();
  const handleDeleteMultiple = useCallback(() => {
    removeFlow(selectedFlowsComponentsCards)
      .then(() => {
        resetFilter();
        getFoldersApi(true);
        if (!folderId || folderId === myCollectionId) {
          getFolderById(folderId ? folderId : myCollectionId);
        }
        setSuccessData({
          title: t("Selected items deleted successfully"),
        });
      })
      .catch(() => {
        setErrorData({
          title: t("Error deleting items"),
          list: [t("Please try again")],
        });
      });
  }, [
    selectedFlowsComponentsCards,
    removeFlow,
    resetFilter,
    getFoldersApi,
    folderId,
    myCollectionId,
    getFolderById,
    setSuccessData,
    setErrorData,
  ]);

  return { handleDeleteMultiple };
};

export default useDeleteMultipleFlows;
