/**
 * Flattens an object to a depth of one
 * @author shubhamx - https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/
 * @param {Object} ob
 * @returns A flattened object
 */
export const flattenObj = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};
