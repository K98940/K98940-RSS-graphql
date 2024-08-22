interface IRule {
  pattern?: RegExp;
  message: string;
}

export function rulesValidator(rules: IRule[], value: string): Promise<void> {
  if (!value) return Promise.reject();
  for (const rule of rules) {
    if (rule.pattern && !rule.pattern.test(value)) {
      return Promise.reject(rule.message);
    }
  }
  return Promise.resolve();
}