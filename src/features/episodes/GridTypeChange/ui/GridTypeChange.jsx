import { memo, useCallback } from "react";
import Button from "../../../../shared/ui/Button/ui/Button";
import GridIcon from "../../../../shared/ui/Icons/Grid";

const GridTypeChange = memo(({ setTypeList, typeList }) => {
  const onClick = useCallback(() => {
    setTypeList("grid");
  }, [setTypeList]);

  return (
    <Button
      onClick={onClick}
      type={"icon"}
      tooltip={"Плиткой"}
      isActive={typeList === "grid" && "isActive"}
    >
      <GridIcon />
    </Button>
  );
});

export default GridTypeChange;
