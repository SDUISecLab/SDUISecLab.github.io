// server/api/user/[id].js
import { readFileSync } from 'fs';
import { join } from 'path';


// server/api/user/[id].js
export default defineEventHandler((event) => {
  const { id } = event.context.params;
  // 读取 JSON 文件
  const usersPath = join(process.cwd(), '/public/members.json');
  const usersData = JSON.parse(readFileSync(usersPath, 'utf-8'));
  let userList = usersData.member;
  // 查找对应的用户数据
  const user = userList.find((u) => parseInt(u.id) === parseInt(id));

  // 如果用户不存在，返回 404 错误
  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' });
  }

  // 返回找到的用户数据
  return user;
});
