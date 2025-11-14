// GraphQL 스키마 정의

// GitHub Discussion 삭제 Mutation
export const DELETE_DISCUSSION_MUTATION = `
  mutation DeleteDiscussion($id: ID!) {
    deleteDiscussion(input: {
      id: $id
    }) {
      discussion {
        id
      }
    }
  }
`;

// GitHub Discussion title update Mutation
export const UPDATE_DISCUSSION_TITLE_MUTATION = `
  mutation UpdateDiscussionTitle($discussionId: ID!, $title: String!, $body: String!) {
    updateDiscussion(input: {
      discussionId: $discussionId,
      title: $title
      body: $body
    }) {
      discussion {
        id
        title
      }
    }
  }
`;
