# 部署到 GitHub Pages 指南

由于我无法直接访问您的 GitHub 账户创建仓库，请按照以下简单的步骤操作：

## 第一步：在 GitHub 上创建新仓库
1. 登录 [GitHub](https://github.com/new).
2. 创建一个新的 Repostory（仓库）。
3. 仓库名称建议填写：`health-ai-plan` (或者任何您喜欢的名字)。
4. **不要** 勾选 "Add a README file" 或其他初始化选项（创建一个空仓库）。

## 第二步：推送代码
在您的终端（Terminal）中，确保当前目录是 `/Users/guotongxue/Desktop/商业计划`，然后复制并运行以下命令（请将 `<YOUR_USERNAME>` 替换为您的 GitHub 用户名）：

```bash
# 1. 替换由于您的用户名 (例如: git remote add origin https://github.com/guotongxue/health-ai-plan.git)
git remote add origin https://github.com/<YOUR_USERNAME>/health-ai-plan.git

# 2. 将代码推送到 GitHub
git branch -M main
git push -u origin main
```

## 第三步：开启 GitHub Pages
1. 在 GitHub 仓库页面，点击上方的 **Settings** (设置) 标签。
2. 在左侧菜单找到 **Pages** (页面)。
3. 在 **Build and deployment** 下的 **Source** 选择 `Deploy from a branch`。
4. 在 **Branch** 下选择 `main` 分支，文件夹选择 `/ (root)`。
5. 点击 **Save** (保存)。

稍等片刻（约 1-2 分钟），刷新页面，您将在顶部看到发布的网址，例如：
`https://<YOUR_USERNAME>.github.io/health-ai-plan/`
