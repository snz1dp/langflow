import { updateMessageApi } from "../../../../../controllers/API";
import { useMessagesStore } from "../../../../../stores/messagesStore";
import { Message } from "../../../../../types/messages";
import { getI18n } from "react-i18next";

const useUpdateMessage = (
  setSuccessData: (data: { title: string; list?: string[] }) => void,
  setErrorData: (data: { title: string; list?: string[] }) => void,
) => {
  const updateMessage = useMessagesStore((state) => state.updateMessage);

  const { t } = getI18n();

  const handleUpdate = async (data: Message) => {
    try {
      await updateMessageApi(data);

      updateMessage(data);

      // Set success message
      setSuccessData({
        title: t("Messages updated successfully."),
      });
    } catch (error) {
      // Set error message
      setErrorData({
        title: t("Error updating messages."),
      });
      return Promise.reject(error);
    }
  };

  return { handleUpdate };
};

export default useUpdateMessage;
