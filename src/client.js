import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: REACT_ENV_PROJECT_ID,
    dataset: REACT_ENV_PROJECT_DATASET,
    useCdn: true,
});