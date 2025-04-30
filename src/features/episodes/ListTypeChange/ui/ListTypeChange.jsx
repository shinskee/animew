import styles from "./ListTypeChange.module.scss";
import { memo, useCallback } from "react";
import Button from "../../../../shared/ui/Button/ui/Button";
import ListIcon from "../../../../shared/ui/Icons/List/ui/List";

const ListTypeChange = memo(({ cls, setTypeList, typeList }) => {
  const onClick = useCallback(() => {
    setTypeList("list");
  }, [setTypeList]);

  return (
    <Button
      onClick={onClick}
      type={"icon"}
      tooltip={"Списком"}
      isActive={typeList === "list" && "isActive"}
    >
      <ListIcon />
    </Button>
  );
});

export default ListTypeChange;
