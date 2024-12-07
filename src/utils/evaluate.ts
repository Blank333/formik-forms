export const evaluatePasswordStrength = (password: string): number => {
  let score = 0;
  if (!password) return 0;

  // Check length
  if (password.length > 12) score += 1;
  // Check lowercase
  if (/[a-z]/.test(password)) score += 1;
  // Check uppercase
  if (/[A-Z]/.test(password)) score += 1;
  // Check numbers
  if (/\d/.test(password)) score += 1;
  // Check special characters
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
};
