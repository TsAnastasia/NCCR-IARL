export enum GitSections {
  RULES = "git-rules",
  HELP = "git-help",
}

export const gitSections: { [key in GitSections]: string } = {
  "git-rules": "Правила работы",
  "git-help": "Основные команды",
};
