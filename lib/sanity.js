import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "2768c85b",
  dataset: "production",
  apiVersion: "2021-10-21",
  token:
    "skLsZOeEbmrSGmHFyWar1fYVmsax9IgMfqLt6OeoturCxdJ24Wz78dUgObg2F0qZZ4QtCLRh4oCz6ly4cJhDDOlxKbbudFXtNgv9OnnkXeuDPL5h1oVGVVt6jeD4zfnj43wI5gKNfJB40281p8C6s3D8rPYpoCdnco5YxnDoFD4p0DLuKgO1",
  useCdn: false,
});
