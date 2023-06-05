import React, { Dispatch, SetStateAction, useEffect } from "react";
import styles from "@/styles/table/TableFooter.module.css";

type TableFooterProps = {
  range: number[] | undefined;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  slice: any[] | undefined;
  type: string;
};

export default function TableFooter({
  range,
  setPage,
  page,
  slice,
  type,
}: TableFooterProps) {
  useEffect(() => {
    if ((slice?.length ?? 0) < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.tableFooter} data-cy={`${type}-table-footer`}>
      {range?.map((el, index) => (
        <button
          key={index}
          data-cy={`${type}-page-button-${index}`}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
