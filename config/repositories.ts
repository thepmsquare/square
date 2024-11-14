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
    repoName: "square_authentication_helper",
    latestVersion: {
      linkToFetchVersion:
        "https://pypi.org/pypi/square_authentication_helper/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_authentication_helper/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_authentication_helper",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "square_common_bl",
    latestVersion: {
      linkToFetchVersion: "https://pypi.org/pypi/square_common_bl/json",
      type: "pip",
      publicLink: "https://pypi.org/pypi/square_common_bl/",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/square_common_bl",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "Python",
  },
  {
    id: uuid(),
    repoName: "squareCommonBLHelper",
    latestVersion: {
      linkToFetchVersion: "https://registry.npmjs.org/squarecommonblhelper/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squarecommonblhelper",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareCommonBLHelper",
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
    repoName: "squareCommons",
    latestVersion: {
      linkToFetchVersion: "https://registry.npmjs.org/squarecommons/",
      type: "npm",
      publicLink: "https://www.npmjs.com/package/squarecommons",
    },
    sourceCodeLink: {
      value: "https://github.com/thepmsquare/squareCommons/",
      isPrivate: false,
    },
    previewLink: null,
    programmingLanguage: "JavaScript",
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
