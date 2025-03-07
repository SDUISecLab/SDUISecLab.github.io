import os

def rename_files_and_dirs(root_dir):
    # 存储旧名称到新名称的映射
    name_mapping = {}

    # 第一步：收集所有需要重命名的目录和文件，并记录映射关系
    for root, dirs, files in os.walk(root_dir, topdown=False):
        # 处理目录
        for dir_name in dirs:
            if dir_name.startswith('_'):
                old_dir_path = os.path.join(root, dir_name)
                new_dir_name = dir_name[1:]
                new_dir_path = os.path.join(root, new_dir_name)
                name_mapping[old_dir_path] = new_dir_path

        # 处理文件
        for file_name in files:
            if file_name.startswith('_'):
                old_file_path = os.path.join(root, file_name)
                new_file_name = file_name[1:]
                new_file_path = os.path.join(root, new_file_name)
                name_mapping[old_file_path] = new_file_path

    # 第二步：在文件内容中替换旧名称为新名称
    for root, _, files in os.walk(root_dir):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                # 按路径长度降序排序，确保先替换长路径
                sorted_mapping = sorted(name_mapping.items(), key=lambda x: len(x[0]), reverse=True)
                for old_path, new_path in sorted_mapping:
                    relative_old_path = os.path.relpath(old_path, root_dir)
                    relative_new_path = os.path.relpath(new_path, root_dir)
                    # 处理以根目录开始的路径引用
                    root_relative_old_path = '/' + relative_old_path.replace(os.sep, '/')
                    root_relative_new_path = '/' + relative_new_path.replace(os.sep, '/')
                    content = content.replace(root_relative_old_path, root_relative_new_path)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
            except Exception as e:
                print(f"处理文件 {file_path} 时出错: {e}")

    # 第三步：重命名目录和文件
    for old_path, new_path in name_mapping.items():
        try:
            os.rename(old_path, new_path)
        except Exception as e:
            print(f"重命名 {old_path} 到 {new_path} 时出错: {e}")

if __name__ == "__main__":
    dist_dir = 'dist'
    if os.path.exists(dist_dir) and os.path.isdir(dist_dir):
        rename_files_and_dirs(dist_dir)
        print("重命名及内容替换完成。")
    else:
        print(f"指定的目录 {dist_dir} 不存在。")


# plugin-vue_export-helper.a1a6add7.js 没替换  _payload.js也没有