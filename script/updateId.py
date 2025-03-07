import json

try:
    # 打开并读取 JSON 文件
    with open('members.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    # 检查 'member' 列表是否存在于数据中
    if 'member' in data and isinstance(data['member'], list):
        # 重新设置 id 为有序编号
        for index, member in enumerate(data['member'], start=1):
            member['id'] = index

    # 将修改后的数据写回到 JSON 文件
    with open('members.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

    print("处理完成，已更新 members.json 文件。")
except FileNotFoundError:
    print("未找到 members.json 文件。")
except json.JSONDecodeError:
    print("无法解析 members.json 文件，可能不是有效的 JSON 格式。")
except Exception as e:
    print(f"发生未知错误: {e}")