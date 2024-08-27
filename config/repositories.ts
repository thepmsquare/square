import type { Repositories } from "../types/Repositories";
import { v4 as uuid } from "uuid";

const repositories: Repositories = [
  {
    id: uuid(),
    repoName: "square",
    latestVersion: {
      linkToFetchVersion: "",
      type: "empty",
      publicLink: "",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square",
      isPrivate: false,
    },
    previewLink: "https://thepmsquare.github.io/square",
    programmingLanguage: "JavaScript",
  },
  {
    id: uuid(),
    repoName: "square_database",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_database/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_database/",
    },

    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_database",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "square_database_structure",
    latestVersion: {
      linkToFetchVersion:
        "https://pypi.org/pypi/square_database_structure/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_database_structure/",
    },

    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_database_structure",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "square_database_helper",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_database_helper/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_database_helper/",
    },

    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_database_helper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "squareDatabaseHelper",
    latestVersion: {
      linkToFetchVersion: "https://registry.npmjs.org/squaredatabasehelper/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squaredatabasehelper",
    },

    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareDatabaseHelper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "JavaScript",
  },
  {
    id: uuid(),
    repoName: "square_file_store",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_file_store/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_file_store/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_file_store",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "square_file_store_helper",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_file_store_helper/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_file_store_helper/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_file_store_helper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "squareFileStoreHelper",
    latestVersion: {
      linkToFetchVersion: "https://registry.npmjs.org/squarefilestorehelper/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squarefilestorehelper/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareFileStoreHelper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "JavaScript",
  },
  {
    id: uuid(),
    repoName: "square_authentication",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_authentication/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_authentication/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_authentication",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "squareAuthenticationHelper",
    latestVersion: {
      linkToFetchVersion:
        "https://registry.npmjs.org/squareauthenticationhelper/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squareauthenticationhelper",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareAuthenticationHelper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "JavaScript",
  },
  {
    id: uuid(),
    repoName: "square_deployment",
    latestVersion: {
      linkToFetchVersion: "",
      type: "empty",
      publicLink: "",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_deployment",
      isPrivate: true,
    },
    previewLink: "https://hub.docker.com/repositories/thepmsquared",
    programmingLanguage: "Docker",
  },
  {
    id: uuid(),
    repoName: "square_commons",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_commons/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_commons/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_commons/",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "square_logger",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_logger/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_logger/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_logger",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "squareComponents",
    latestVersion: {
      linkToFetchVersion: "https://registry.npmjs.org/squarecomponents/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squarecomponents",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareComponents",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "JavaScript",
  },
];

export default repositories;
