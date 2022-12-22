import React from 'react';

const DataTable = ({ data }) => {
  const Counting = data.reduce((counts, item) => {
    if (item.name in counts) {
      counts[item.name] += 1;
    } else {
      counts[item.name] = 1;
    }
    return counts;
  }, {});

  const names = Object.keys(Counting);
  const counts = Object.values(Counting);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Duplicates</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => (
          <tr key={name} style={{ backgroundColor: RowColor(counts[index]) }}>
            <td>{name}</td>
            <td>{counts[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const RowColor = (count) => {
  if (count > 10) {
    return 'green';
  } else if (count > 2) {
    return 'yellow';
  } else if (count > 0) {
    return 'red';
  }
  return 'white';
};

export default DataTable;
