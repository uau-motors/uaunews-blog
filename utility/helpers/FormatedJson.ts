export function removeLastRecords(jsonArray: any[], count: number): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  return sortedArray.slice(-count);
}

export function removePartialRecords(jsonArray: any[], start: number, end: number): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  return sortedArray.slice(start, sortedArray.length - end);
}

export function limitCharacters(jsonArray: any[], field: string, maxLength: number): any[] {
  return jsonArray.map((record) => {
    if (record[field] && record[field].length > maxLength) {
      record[field] = record[field].substring(0, maxLength) + "...";
    }
    return record;
  });
}
