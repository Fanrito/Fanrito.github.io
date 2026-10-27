# Zhouzhe Fan 的个人主页

为 GitHub Pages 准备的静态主页，无需安装依赖或执行构建。主页展示 Zhouzhe Fan、仿生机器人方向及联系邮箱 `fanzhouzhe@foxmail.com`。

网站根路径使用新主页；原博客首页保留在 `/blog/`，归档仍为 `/archives/`，`/2024/` 下的文章保留原地址。工作流同时发布旧博客所需的 `css/`、`images/` 和 `js/`。

## 本地预览

在此目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8000>。

## 发布到 GitHub Pages

此目录目前位于 `noetix_dialog` 项目内。发布时只使用 **`personal-homepage` 目录内的文件**，包括 `.github/workflows/pages.yml` 和 `.nojekyll`；不要上传上级项目。

1. 现有公开仓库为 **`Fanrito/Fanrito.github.io`**，默认分支 `main`。更新时保留原提交历史和博客文件；从零部署时先创建同名空仓库。
2. 将本目录文件放入仓库根目录，保留隐藏文件、`.github` 结构及原博客目录。已有仓库应在其现有分支提交更新；下方初始化命令只适用于新建空仓库。
3. 进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 进入 **Actions → Deploy personal homepage → Run workflow**，选择 `main`。首次上传触发的运行若因 Pages 尚未启用而失败，完成步骤 3 后重新运行即可。
5. 等待工作流成功，在 Pages 设置或部署记录中查看网址。预期地址为 <https://fanrito.github.io/>，以 GitHub 返回的地址为准。

创建好空仓库后，也可在当前项目根目录执行以下命令。需要本机已配置 GitHub 推送凭据；这些命令只初始化主页子目录。

```bash
git -C personal-homepage init -b main
git -C personal-homepage add index.html styles.css script.js assets .nojekyll .github README.md
git -C personal-homepage commit -m "Create Zhouzhe Fan personal homepage"
git -C personal-homepage remote add origin https://github.com/Fanrito/Fanrito.github.io.git
git -C personal-homepage push -u origin main
```

工作流只发布页面、样式、脚本、`assets` 和上述旧博客目录，不发布本说明或上级项目文件。之后推送到 `main` 会自动更新网站。

## 修改内容

- `index.html`：姓名、个人介绍、项目、邮箱和链接。
- `styles.css`：颜色、字体、布局和移动端适配。
- `script.js`：页面交互。
- `assets/`：网站图片或图标。

GitHub Pages 官方说明：[创建个人网站](https://docs.github.com/en/pages/quickstart)、[使用 Actions 部署](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。
