//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  let trimmed = string.replace(/[^a-z]/gi, '').toLowerCase();
  let set  = new Set(trimmed);
  return set.size === 26
};