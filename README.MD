<!--suppress HtmlDeprecatedAttribute -->
<p align="center">
  <a href="https://github.com/whyour/qinglong">
    <img width="150" src="https://z3.ax1x.com/2021/11/18/I7MpAe.png" alt="Img">
  </a>
</p>

<h1 align="center">青龙Tools</h1>
<p><a href="https://github.com/nuanxinqing123/QLTools#%E6%BC%94%E7%A4%BA%E5%9B%BE">查看演示图</a></p>

## 🍭功能介绍
- 理论支持青龙全版本
- 自定义变量名称 & 数量
- 支持多容器上传管控
- 容器独享变量限额
- 自选服务器和变量组上传
- 支持变量黑名单 & IP提交次数限制
- 支持容器相互迁移 & 复制 & 备份 & 恢复
- 插件模式（可将自行编写插件绑定到变量上使用）
- 程序热更新（快速更新版本）

## 🍳技术栈
- 语言：Golang
- Web框架：Gin框架
- 配置文件：Viper库
- 日志：Zap库
- 数据库：GORM - SQLite
- API文档：https://console-docs.apipost.cn/preview/0fdb4c815ed24ab2/e2057f0e0b8dc545
- 文档密码：609889

## 🧸配置文件
```yaml
app:
  # 运行模式：生产环境留空(开发模式：debug)
  mode: ""
  # 运行端口
  port: 15000
```

## 🔍安装教程
Tips: 
- 测试版不提供Docker镜像 
- 删除config目录里面的app.db文件就相当于重装青龙Tools

安装方式一：Supervisord & PM2 & nohup 启动守护
```shell
# 创建目录并进入
mkdir QLTools && cd QLTools

# 给予权限
chmod 755 程序名称

# 启动程序排查启动错误
./程序名称

# 程序无误后点击下方教程查看程序后台守护教程
```

教程地址：[青龙Tools的后台进程守护教程（附反代域名）](https://6b7.org/460.html)

安装方式二、Docker启动
```shell
# 创建QLTools目录并进入
mkdir qltools && cd qltools

# Docker版本提供架构：amd64、arm64、arm-7
docker run --restart=always -itd --name QLTools -v $PWD/config:/QLTools/config -v $PWD/plugin:/QLTools/plugin -p 15000:15000 nuanxinqing123/qltools:latest

# 更新步骤：后台点击更新，稍等5分钟左右。手动重启容器即可完成更新（如果更新失败，请删除容器和镜像，然后重新拉取镜像启动）
# 重启命令：docker restart QLTools
```

## 🎯开发计划

开发计划 & 进度：[点击查看](https://web.banlikanban.com/kanban/626f9b4c6ade1220282ac551)

招募一位热心愿意一起开发的前端小伙伴，嘿嘿。我前端太差了

TG：[https://t.me/Nuanxinqing](https://t.me/Nuanxinqing)

Email：nuanxinqing@gmail.com

## 🧩当前版本日志
- 修复 面板失联时导致前端页面空白错误
- 修复 变量限额为0时，更新模式无法正常判断变量状态
- 修复 青龙面板为旧版本时，更新模式更新后无法自动启用
- 修复 JWT签名密钥修改为随机生成，避免管理员账号被渗透爆破
- 更新 变量管理模块新增CDK绑定
- 更新 前端：修改后台部分描述文本
- 更新 前端：变量管理操作模块移动至最前选项卡
- 更新 前端：修改前台部分错误提示描述文本
- 更新 前端：网站标签Title支持同网站Title一致
- 更新 前端：所有按钮展示样式优化
- 新增 CD-KEY模块
- 新增 前端：CD-KEY模块


## 📔自行构建步骤
```shell
# 项目开发环境：Golang 1.18
# Clone 项目并进入项目目录
git clone https://github.com/nuanxinqing123/QLTools.git && cd QLTools

# 更新项目依赖
go mod tidy

# 构建前端静态文件（需要安装go-bindata）
go-bindata -o=bindata/bindata.go -pkg=bindata ./assets/...

# 打包
go build
```

## 📷演示图

![QQ截图20220511154438.png](https://pic.6b7.xyz/2022/05/11/25a5e41170f5f.png)

![QQ截图20220511154454.png](https://pic.6b7.xyz/2022/05/11/3f13f15d25b46.png)

![QQ截图20220511154818.png](https://pic.6b7.xyz/2022/05/11/e41ea41542307.png)

![QQ截图20220511154933.png](https://pic.6b7.xyz/2022/05/11/40f36ef85f79d.png)

![QQ截图20220511154947.png](https://pic.6b7.xyz/2022/05/11/347a5fd9b12f2.png)

![QQ截图20220511155004.png](https://pic.6b7.xyz/2022/05/11/3c3c339fa3b82.png)

![QQ截图20220511155021.png](https://pic.6b7.xyz/2022/05/11/4fe5dab516d93.png)



