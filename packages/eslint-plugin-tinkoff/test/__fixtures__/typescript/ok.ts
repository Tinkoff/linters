export function bar(name): void {
  document.location(`/ds${name}`);
}

export class User {
  private name: string;

  private lastName: string;

  private test?: () => void;

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  getUser(): string {
    this.test?.();
    return this.name;
  }
}

export type SyncJsonFile = ({
  path,
  newContent,
}: {
  path: string;
  newContent: string[];
}) => Promise<void>;

export const runLintWithFixtures = (
  type: string,
  eslintConfig: Record<string, string>
): string => {
  return eslintConfig[type];
};
