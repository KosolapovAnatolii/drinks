export function useValidationRules() {

  function requireFielddRule(val) {
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

  return {
    requireFielddRule,
    validEmail,
  }
}
