import { useEffect, useRef, useState } from "react";
import IconComponent from "../../../../components/genericIconComponent";
import { Button } from "../../../../components/ui/button";
import {
  CHAT_FIRST_INITIAL_TEXT,
  CHAT_SECOND_INITIAL_TEXT,
  EMPTY_INPUT_SEND_MESSAGE,
} from "../../../../constants/constants";
import { deleteFlowPool } from "../../../../controllers/API";
import useAlertStore from "../../../../stores/alertStore";
import useFlowStore from "../../../../stores/flowStore";
import useFlowsManagerStore from "../../../../stores/flowsManagerStore";
import { VertexBuildTypeAPI, sendAllProps } from "../../../../types/api";
import { ChatMessageType } from "../../../../types/chat";
import { FilePreviewType, chatViewProps } from "../../../../types/components";
import { classNames } from "../../../../utils/utils";
import ChatInput from "./chatInput";
import useDragAndDrop from "./chatInput/hooks/use-drag-and-drop";
import ChatMessage from "./chatMessage";
import { useTranslation } from "react-i18next";

export default function ChatView({
  sendMessage,
  chatValue,
  setChatValue,
  lockChat,
  setLockChat,
}: chatViewProps): JSX.Element {
  const { t } = useTranslation();

  const { flowPool, outputs, inputs, CleanFlowPool } = useFlowStore();
  const { setErrorData } = useAlertStore();
  const currentFlowId = useFlowsManagerStore((state) => state.currentFlowId);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);

  const inputTypes = inputs.map((obj) => obj.type);
  const inputIds = inputs.map((obj) => obj.id);
  const outputIds = outputs.map((obj) => obj.id);
  const outputTypes = outputs.map((obj) => obj.type);
  const updateFlowPool = useFlowStore((state) => state.updateFlowPool);

  //build chat history
  useEffect(() => {
    const chatOutputResponses: VertexBuildTypeAPI[] = [];
    outputIds.forEach((outputId) => {
      if (outputId.includes("ChatOutput")) {
        if (flowPool[outputId] && flowPool[outputId].length > 0) {
          chatOutputResponses.push(...flowPool[outputId]);
        }
      }
    });
    inputIds.forEach((inputId) => {
      if (inputId.includes("ChatInput")) {
        if (flowPool[inputId] && flowPool[inputId].length > 0) {
          chatOutputResponses.push(...flowPool[inputId]);
        }
      }
    });
    const chatMessages: ChatMessageType[] = chatOutputResponses
      .sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
      //
      .filter(
        (output) =>
          output.data.message || (!output.data.message && output.artifacts),
      )
      .map((output, index) => {
        try {
          const messageOutput = output.data.message;
          const hasMessageValue =
            messageOutput?.message ||
            messageOutput?.message === "" ||
            (messageOutput?.files ?? []).length > 0 ||
            messageOutput?.stream_url;

          const { sender, message, sender_name, stream_url, files } =
            hasMessageValue ? output.data.message : output.artifacts;

          const is_ai =
            sender === "Machine" || sender === null || sender === undefined;

          return {
            isSend: !is_ai,
            message,
            sender_name,
            componentId: output.id,
            stream_url: stream_url,
            files,
          };
        } catch (e) {
          console.error(e);
          return {
            isSend: false,
            message: t("Error parsing message"),
            sender_name: t("Error"),
            componentId: output.id,
          };
        }
      });
    setChatHistory(chatMessages);
  }, [flowPool]);
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  async function sendAll(data: sendAllProps): Promise<void> {}
  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  function clearChat(): void {
    setChatHistory([]);
    deleteFlowPool(currentFlowId).then((_) => {
      CleanFlowPool();
    });
    //TODO tell backend to clear chat session
    if (lockChat) setLockChat(false);
  }

  function handleSelectChange(event: string): void {
    switch (event) {
      case "builds":
        clearChat();
        break;
      case "buildsNSession":
        console.log("delete build and session");
        break;
    }
  }

  function updateChat(
    chat: ChatMessageType,
    message: string,
    stream_url?: string,
  ) {
    chat.message = message;
    updateFlowPool(chat.componentId, {
      message,
      sender_name: chat.sender_name ?? "Bot",
      sender: chat.isSend ? "User" : "Machine",
    });
  }
  const [files, setFiles] = useState<FilePreviewType[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const { dragOver, dragEnter, dragLeave, onDrop } = useDragAndDrop(
    setIsDragging,
    setFiles,
    currentFlowId,
    setErrorData,
  );

  return (
    <div
      className="eraser-column-arrangement"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={onDrop}
    >
      <div className="eraser-size">
        <div className="eraser-position">
          <Button
            className="flex gap-1"
            unstyled
            disabled={lockChat}
            onClick={() => handleSelectChange("builds")}
          >
            <IconComponent
              name="Eraser"
              className={classNames("h-5 w-5 text-primary")}
              aria-hidden="true"
            />
          </Button>
        </div>
        <div ref={messagesRef} className="chat-message-div">
          {chatHistory?.length > 0 ? (
            chatHistory.map((chat, index) => (
              <ChatMessage
                setLockChat={setLockChat}
                lockChat={lockChat}
                chat={chat}
                lastMessage={chatHistory.length - 1 === index ? true : false}
                key={`${chat.componentId}-${index}`}
                updateChat={updateChat}
              />
            ))
          ) : (
            <div className="chat-alert-box">
              <span>
                👋 <span className="langflow-chat-span">{t("Langflow Chat")}</span>
              </span>
              <br />
              <div className="langflow-chat-desc">
                <span className="langflow-chat-desc-span">
                  {t(CHAT_FIRST_INITIAL_TEXT)}{" "}
                  <span>
                    <IconComponent
                      name="MessageSquareMore"
                      className="mx-1 inline h-5 w-5 animate-bounce"
                    />
                  </span>{" "}
                  {t(CHAT_SECOND_INITIAL_TEXT)}
                </span>
              </div>
            </div>
          )}
          <div ref={ref}></div>
        </div>
        <div className="langflow-chat-input-div">
          <div className="langflow-chat-input">
            <ChatInput
              chatValue={chatValue}
              noInput={!inputTypes.includes("ChatInput")}
              lockChat={lockChat}
              sendMessage={({ repeat, files }) =>
                sendMessage({ repeat, files })
              }
              setChatValue={(value) => {
                setChatValue(value);
              }}
              inputRef={ref}
              files={files}
              setFiles={setFiles}
              isDragging={isDragging}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
