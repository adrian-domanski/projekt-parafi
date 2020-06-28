import gql from "graphql-tag";

// Get posts
export const getPostsQuery = gql`
  query($limit: Int, $start: Int) {
    posts(limit: $limit, start: $start, sort: "date:DESC") {
      id
      title
      short
      cover {
        formats
      }
    }
  }
`;

// Get galleries
export const getGalleriesQuery = gql`
  query($limit: Int, $start: Int) {
    galleries(limit: $limit, start: $start, sort: "date:DESC") {
      id
      title
      short
      images {
        formats
      }
    }
  }
`;

// Get posts count
export const getPostsCountQuery = gql`
  query {
    postsCount
  }
`;

// Get galleries count
export const getGalleriesCountQuery = gql`
  query {
    galleriesCount
  }
`;

// Get mass schedule
export const getMassScheduleQuery = gql`
  query {
    massSchedule {
      content
    }
  }
`;

// Get intentions
export const getIntentionsQuery = gql`
  query {
    intention {
      content
    }
  }
`;

// Get announcements
export const getAnnouncementsQuery = gql`
  query {
    announcement {
      content
    }
  }
`;

// Get contact informations
export const getContactQuery = gql`
  query {
    contact {
      content
    }
  }
`;

// Get history page data
export const getHistoryQuery = gql`
  query {
    history {
      content
    }
  }
`;

// Get important informations (home page)
export const getInformations = gql`
  query {
    importantInformation {
      content
    }
  }
`;

// Get single post (details)
export const getPostDetails = gql`
  query($postId: ID!) {
    post(id: $postId) {
      id
      title
      short
      content
      cover {
        formats
      }
      date
    }
  }
`;

// Get single gallery (details)
export const getGalleryDetails = gql`
  query($galleryId: ID!) {
    gallery(id: $galleryId) {
      id
      title
      date
      short
      content
      images {
        formats
      }
      date
    }
  }
`;

// Get downloades
export const getDownloadsQuery = gql`
  query {
    downloads {
      title
      files {
        url
        name
        ext
      }
    }
  }
`;
