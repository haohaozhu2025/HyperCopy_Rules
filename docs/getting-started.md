# 快速上手

HyperCopy 是一款安卓通用**复制直达**增强模块，支持免 Root 和 Root 两种方案，内置云端规则仓库，并支持小米超级岛（澎湃 OS3）实时通知展示。

:::: warning 前置要求

请选择你的使用方案：

**1.Root 方案**
- 设备已获取 **Root** 权限
- 已安装 **LSPosed** 框架

**2.免 Root 方案**
- 已安装 **Shizuku** 并授予权限

::::

::: tip 资源获取 & 讨论解答
- GitHub：<https://github.com/1812z/HyperCopy>
- 规则仓库：<https://github.com/1812z/HyperCopy_Rules>
- QQ 群：**1045114341**

:::

## 第一步：安装 HyperCopy

1. 从 [GitHub Releases](https://github.com/1812z/HyperCopy/releases) 下载最新版本的 APK
2. 安装 APK 到你的设备

## 第二步：激活模块

**1.Root 方案**

1. 打开 **LSPosed** 管理器，进入「模块」列表
2. 找到 **HyperCopy** 并启用开关
3. 保存后重启手机使 Hook 生效

**2.免 Root 方案**

1. 打开 **Shizuku** 确保服务正在运行
2. 打开 **HyperCopy**，在设置中授权 Shizuku 权限
3. 按照应用内提示完成模块激活
:::

## 第三步：配置云端规则

HyperCopy 内置云端规则仓库，支持一键下载导入。

1. 打开 **HyperCopy** 应用，进入**规则管理**页面
2. 点击**下载云端规则**，应用会自动从 [HyperCopy_Rules](https://github.com/1812z/HyperCopy_Rules) 仓库获取最新规则
3. 根据需要启用对应规则的开关

::: tip 规则类型说明
- **链接跳转**（`link`）：复制链接后自动解析并跳转到对应应用。例如复制抖音分享链接后直接打开抖音
- **口令配置**（`text`）：复制口令/文本后自动识别并跳转。例如复制高德地图地址后自动打开高德导航
:::

::: info 自定义规则
你也可以参考规则仓库的 JSON 格式自行编写规则并提交PR。规则命名格式为 `配置名称_应用包名.json`。
:::

## 第四步：小米超级岛集成（澎湃 OS3）

> 💡 仅限澎湃 OS3 用户，用于将复制直达的结果以超级岛 + 焦点通知样式展示。


