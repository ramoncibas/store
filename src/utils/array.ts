export interface StateType {
  [key: string]: number[];
}

/**
 * Retrieves the current array of objects associated with a given key from the state.
 * Initializes the array as empty if the key is not present in the state.
 *
 * @param state - The current state of type `ProductAspects`.
 * @param key - The key corresponding to the array in the state.
 * @returns The array of objects associated with the key, or an empty array if the key is not present.
 */
const getCurrentArray = (state: any, key: string): number[] => {
  return state[key] || [];
};

/**
 * Updates an array of IDs by adding or removing a specific ID.
 * If the ID already exists in the array, it will be removed.
 * If it does not exist, the ID will be added to the array.
 *
 * @param array - The current array of IDs to be updated.
 * @param id - The ID to be added or removed from the array.
 * @returns A new array of IDs with the specified ID added or removed.
 */
const updateArray = (array: number[], id: number): number[] => {
  return array.includes(id)
    ? array.filter(item => item !== id) // Remove ID if it exists
    : [...array, id]; // Add ID if it does not exist
};

export {
  updateArray,
  getCurrentArray
}
