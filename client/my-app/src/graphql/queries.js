export const listAchievements = `
  query ListAchievements {
    listAchievements {
      items {
        id
        content
        username
        createdAt
      }
    }
  }
`;
