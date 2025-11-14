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
