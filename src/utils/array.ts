/**
 * Remove the item at `from` position and then insert it into `to` position
 */
function removeInsert<T>(from: number, to: number, array: T[]) {
  const insertItem = array[from];
  const nextArray = [...array];
  nextArray.splice(from, 1);
  nextArray.splice(to, 0, insertItem);
  return nextArray;
}

/**
 * Map the order of the items, which satisfy `condition` in `origin`, to be the same as the order of `sorted`
 */
function mapToSorted<T>(origin: T[], sorted: T[], condition: (originItem: T) => boolean) {
  let count = -1;
  const mapResult = origin.map(originItem => {
    if (condition(originItem)) {
      count += 1;
      if (count >= sorted.length) throw new Error('The sorted length is too short');
      return sorted[count];
    }

    return originItem;
  });

  return mapResult;
}

export { removeInsert, mapToSorted };
