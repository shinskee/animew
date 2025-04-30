import styles from "./Sort.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import Button from "../../../../shared/ui/Button/ui/Button";
import SortIcon from "../../../../shared/ui/Icons/Sort";

const Sort = memo(({ cls, typeList, chunk, sort, setEpisodes, setSort, data = []}) => {

  useEffect(() => {
    if (typeList === 'list' && sort === 'old') {
      setEpisodes([...data]?.sort((a, b) => b.episode - a.episode).slice(0,chunk))
    }
    if (typeList === 'list' && sort === 'new') {
      setEpisodes([...data]?.sort((a, b) => a.episode - b.episode).slice(0,chunk))
    }
    if (typeList === 'grid' && sort === 'old') {
      setEpisodes([...data]?.sort((a, b) => b.episode - a.episode))
    } 
    if (typeList === 'grid' && sort === 'new') {
      setEpisodes([...data]?.sort((a, b) => a.episode - b.episode))
    }
  }, [chunk, data, setEpisodes, sort, typeList])

  const sortChange = useCallback(() => {
    if (sort === 'old') {
      setSort("new");
    } 
    if (sort === 'new') {
      setSort("old");
    }
  }, [setSort, sort]);

  return (
    <Button
      onClick={sortChange}
      type={'icon'}
      tooltip={sort === 'old' ? 'Сначала старые' : 'Сначала новые'}
    >
      <SortIcon cls={sort === 'old' ? styles.rotate180 : styles.rotate0} />
    </Button>
  );
});

export default Sort;
