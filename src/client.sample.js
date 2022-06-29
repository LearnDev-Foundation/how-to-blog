import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "Sanity project ID",
    dataset: "Sanity project dataset",
    useCdn: true,
});