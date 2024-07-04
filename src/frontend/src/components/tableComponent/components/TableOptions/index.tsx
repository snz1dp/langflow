import { cn } from "../../../../utils/utils";
import IconComponent from "../../../genericIconComponent";
import ShadTooltip from "../../../shadTooltipComponent";
import { Button } from "../../../ui/button";
import { useTranslation } from "react-i18next";

export default function TableOptions({
  resetGrid,
  duplicateRow,
  deleteRow,
  hasSelection,
  stateChange,
}: {
  resetGrid: () => void;
  duplicateRow?: () => void;
  deleteRow?: () => void;
  hasSelection: boolean;
  stateChange: boolean;
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={cn("absolute bottom-3 left-6")}>
      <div className="flex items-center gap-3">
        <div>
          <ShadTooltip content={t("Reset Columns")}>
            <Button
              unstyled
              onClick={() => {
                resetGrid();
              }}
              disabled={!stateChange}
            >
              <IconComponent
                name="RotateCcw"
                strokeWidth={2}
                className={cn(
                  "h-5 w-5 text-primary transition-all hover:text-accent-foreground",
                )}
              />
            </Button>
          </ShadTooltip>
        </div>
        {duplicateRow && (
          <div>
            <ShadTooltip
              content={
                !hasSelection ? (
                  <span>{t("Select items to duplicate")}</span>
                ) : (
                  <span>{t("Duplicate selected items")}</span>
                )
              }
            >
              <Button unstyled onClick={duplicateRow} disabled={!hasSelection}>
                <IconComponent
                  name="Copy"
                  className={cn("h-5 w-5 text-primary transition-all")}
                />
              </Button>
            </ShadTooltip>
          </div>
        )}
        {deleteRow && (
          <div>
            <ShadTooltip
              content={
                !hasSelection ? (
                  <span>{t("Select items to delete")}</span>
                ) : (
                  <span>{t("Delete selected items")}</span>
                )
              }
            >
              <Button unstyled onClick={deleteRow} disabled={!hasSelection}>
                <IconComponent
                  name="Trash2"
                  className={cn(
                    "h-5 w-5 text-primary transition-all",
                    !hasSelection ? "" : "hover:text-status-red",
                  )}
                />
              </Button>
            </ShadTooltip>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
