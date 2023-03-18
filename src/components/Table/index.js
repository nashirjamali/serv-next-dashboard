import React from 'react';

export default function Table({ headers, data, columns }) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="p-4 font-semibold text-sm text-neutral-600 text-left"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, indexColumn) => (
              <td
                key={indexColumn}
                className="border-none font-medium text-sm text-neutral-800 p-4 text-left"
              >
                {column.render(item[column.name], item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
