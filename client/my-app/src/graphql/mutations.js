export const createAchievement = `
  mutation CreateAchievement($input: CreateAchievementInput!) {
    createAchievement(input: $input) {
      id
      content
      username
      createdAt
    }
  }
`;
