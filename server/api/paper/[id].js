// server/api/user/[id].js
export default defineEventHandler((event) => {
  const { id } = event.context.params;
  return { message: `User ID is ${id}` };
});
