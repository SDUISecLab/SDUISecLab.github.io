// server/api/index.js

export default defineEventHandler((event) => {
  const query = getQuery(event);
  return { message: `Hello, ${query.name || 'ISecLab User'}` };
});
