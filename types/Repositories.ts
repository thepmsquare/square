type SourceCodeLink = {
  value: string;
  isPrivate: boolean;
};
type LatestVersion = {
  version?: string;
  linkToFetchVersion: string;
  type: "pip" | "npm" | "empty";
  publicLink: string;
};
type Repository = {
  id: string;
  repoName: string;
  latestVersion: LatestVersion;
  sourceCodeLink: SourceCodeLink;
  previewLink: string | null;
  programmingLanguage: "Python" | "JavaScript" | "Docker";
};

type Repositories = Repository[];

export type { Repositories, Repository };
