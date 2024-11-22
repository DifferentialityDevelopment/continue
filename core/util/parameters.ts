import { TabAutocompleteOptions } from "../index.js";

export const DEFAULT_AUTOCOMPLETE_OPTS: TabAutocompleteOptions = {
  disable: false,
  useFileSuffix: true,
  maxPromptTokens: 1024,
  prefixPercentage: 0.85,
  maxSuffixPercentage: 0.25,
  debounceDelay: 350,
  multilineCompletions: "auto",
  slidingWindowPrefixPercentage: 0.75,
  slidingWindowSize: 500,
  maxSnippetPercentage: 0.5,
  maxDiffPercentage: 0.5,
  maxClipboardPercentage: 0.5, // yes the percentages do not add up
  useCache: true,
  onlyMyCode: true,
  useRecentlyEdited: true,
  disableInFiles: undefined,
  useImports: true,
  transform: true,
  showWhateverWeHaveAtXMs: 300,
};

export const COUNT_COMPLETION_REJECTED_AFTER = 10_000;
export const DO_NOT_COUNT_REJECTED_BEFORE = 250;

export const RETRIEVAL_PARAMS = {
  rerankThreshold: 0.3,
  nFinal: 20,
  nRetrieve: 50,
  bm25Threshold: -2.5,
  nResultsToExpandWithEmbeddings: 5,
  nEmbeddingsExpandTo: 5,
};
