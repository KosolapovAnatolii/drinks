export function useValidationRules() {

  function requireFieldRule(val) {
    if (!val) {
      return 'This field is required'
    }
    return true;
  }

  function validEmail(val, rules) {
    if (!rules.email(val)) {
      return 'Please enter a valid email address';
    }
    return true;
  }

  function validRaitingMark(val) {
    if (val < 1 || val > 100) {
      return 'Please enter number from 1 to 100';
    }

    return true;
  }

  function validFileSize(file) {
    const maxSizeMb = 2;
    if (!file) return true;
    const files = Array.isArray(file) ? file : [file];
    const oversized = files.find(f => f.size > maxSizeMb * 1024 * 1024);
    return oversized ? `File must be smaller than ${maxSizeMb}MB` : true;
  };

  return {
    requireFieldRule,
    validEmail,
    validRaitingMark,
    validFileSize
  }
}
