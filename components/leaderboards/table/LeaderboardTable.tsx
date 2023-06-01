import React, { useState } from "react";
import styles from "@/styles/table/Table.module.css";
import usePagedTable from "@/hooks/usePagedTable";
import TableFooter from "./TableFooter";
import Submission from "@/model/Submission";

type LeaderboardTableProps = {
  data: Submission[];
  rowsPerPage: number;
  type: number;
};

export default function LeaderboardTable({
  data,
  rowsPerPage,
  type,
}: LeaderboardTableProps) {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagedTable(data, page, rowsPerPage);

  const renderHeaders = () => {
    return (
      <tr data-cy="leaderboard-table-header-row">
        <th>#</th>
        <th>User</th>
        <th>{type === 1 ? `Gas` : `Size`} Score</th>
        <th>Type</th>
        <th>Submitted</th>
      </tr>
    );
  };

  const renderRows = (slice: any[]) => {
    return slice?.map((sub: Submission, index: number) => (
      <tr key={sub.id} data-cy={`leaderboard-table-row-${sub.id}`}>
        <td>
          <b>{index + 1}</b>
        </td>
        <td>
          <b>
            {sub.user_name} #{sub.discriminator}
          </b>
        </td>
        <td>
          <b>{type === 1 ? sub.gas : sub.size}</b>
        </td>
        <td>
          <b>{sub.type}</b>
        </td>
        <td>
          <b>{new Date(sub.submitted_at).toUTCString()}</b>
        </td>
      </tr>
    ));
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} data-cy="leaderboard-table">
        <thead>{renderHeaders()}</thead>
        <tbody>{renderRows(slice ?? [])}</tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}
