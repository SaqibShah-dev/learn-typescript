import type { ReactElement } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

function Table<T extends { id: number | string }>({
  data,
  columns
}: TableProps<T>): ReactElement {
  if (data.length === 0) {
    return <p>No data to display.</p>;
  }

  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={String(col.key)}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;