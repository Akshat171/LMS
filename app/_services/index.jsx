import request, { gql } from "graphql-request";

const master_url =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPG_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        free
        id
        banner {
          url
        }
        totalChapters
        tags
      }
    }
  `;
  const result = await request(master_url, query);
  return result;
};

export const getCourseById = async (id) => {
  const query =
    gql`
    query CourseList {
      courseList(where: { id: "` +
    id +
    `" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            youtubeUrl
          }
        }
        description
        name
        id
        free
        totalChapters
      }
    }
  `;
  const result = await request(master_url, query);
  return result;
};
