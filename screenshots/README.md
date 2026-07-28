# 截图清单与命名规范

> 本文件夹存放 `index.html` 所需的全部截图资源。
> 按下表命名，**严格使用英文小写 + 下划线**，便于 HTML 引用与跨平台兼容。
> 所有截图建议尺寸：**1200×800（3:2）**，JPG/PNG 均可，单张 < 500KB。

---

## 一、场景 4 窗墙·10 个作品首页截图

| 文件名 | 对应作品 | 来源 URL | 截图说明 |
| --- | --- | --- | --- |
| `work_a_blog.jpg` | shikunpunk 的小站 | https://www.shikunpunk.fun | 博客首页完整截图 |
| `work_b_worldcup.jpg` | 世界杯预测器 | http://8.148.66.127:8000/ | 预测器主界面 |
| `work_d_xhsrag.jpg` | xhs-rag | https://github.com/shikunpneg/xhs-rag | GitHub 仓库 README 区 |
| `work_e_quantum.jpg` | see-quantum world | https://quantum-viz-chi.vercel.app/ | 量子可视化首页 |
| `work_quantum_chronicle.jpg` | 《量子编年史》文字冒险游戏 | https://quantum-chronicle.vercel.app | 文字冒险游戏首页 |
| `work_fast_read_book.jpg` | fast-read-book 知识图谱阅读工具 | https://github.com/shikunpneg/fast_read_book | GitHub 仓库 README |
| `work_7_mountain.jpg` | 向山朝圣知音湖上的水怪 | https://mp.weixin.qq.com/s/cSIiHJAOEB9IuwpWdjMECg | 微信文章顶部题图区 |
| `work_8_futuremother.jpg` | 未来 母亲 | https://www.xiaohongshu.com/explore/6823a46e0000000023013e06 | 小红书笔记首图 |
| `work_9_hometown.jpg` | 我 返回 故乡 | https://www.xiaohongshu.com/explore/69cfe03d0000000022001536 | 小红书笔记首图 |
| `work_10_gaze.jpg` | 穿过他者的凝视 | https://mp.weixin.qq.com/s/ke4PorDv3xH1K5dHBp1-OQ | 微信文章顶部题图区 |

---

## 二、场景 5 书桌·8 张论文首页截图

> 来源：`E:\简历\解决的问题\` 下的 PDF 文件
> 截图方式：用 PDF 阅读器打开 → 翻到第 1 页 → 截图工具截取整页

| 文件名 | 论文标题 | 源 PDF 文件 |
| --- | --- | --- |
| `paper_1_sprt.jpg` | 序贯概率比下的生产决策最优规划模型 | `23国赛数学建模_基于序贯概率比下的生产决策最优规划模型.pdf` |
| `paper_2_traffic.jpg` | 行车轨迹估计红绿灯周期 | `24华中杯_根据行车轨迹估计红绿灯周期问题.pdf` |
| `paper_3_infrared.jpg` | 粒子群峰算法·红外干涉光谱外延层厚度测量 | `25数学建模国赛省三_基于粒子群群峰算法的红外干涉光谱的外延层厚度测量.pdf` |
| `paper_4_cylmirror.jpg` | 圆柱镜反射变形艺术中的图形变换 | `26华中杯_圆柱镜反射变形艺术中的图形变换.pdf` |
| `paper_5_qgru.jpg` | QGRU 量子门控循环单元·青少年压力预测 | `26悟空杯_基于量子门控循环单元（QGRU）的青少年学生压力.pdf` |
| `paper_6_originq.jpg` | 本源杯 originqcup 量子计算 | `26本源杯originqcup1.3.pdf`（取 1.3 为主） |
| `paper_7_mcm.jpg` | MCM C 题·DWTS 火热背后的数学奥秘 | `mcm_c题_DWTS火热背后的数学奥秘2.pdf` |
| `paper_8_ccks.jpg` | CCKS·知识图谱与 LLM 推理 | `ccks\jjnh91.pdf` |

---

## 三、可选附加截图

| 文件名 | 用途 | 说明 |
| --- | --- | --- |
| `og_cover.jpg` | 社交分享预览图 | 1200×630，用于 Vercel 部署后链接预览 |
| `favicon.png` | 站点图标 | 32×32，浏览器标签页用 |

---

## 四、截图获取建议

### 4.1 网页截图（Chrome 自带）
1. 打开目标 URL
2. `F12` 打开开发者工具 → `Ctrl+Shift+P` 命令面板
3. 输入 `screenshot` → 选 `Capture full size screenshot`
4. 保存后重命名为对应文件名

### 4.2 PDF 首页截图
- **方法 A**：用 Edge/Chrome 打开 PDF → 翻到第 1 页 → `Win+Shift+S` 截图
- **方法 B**：用 PDF 阅读器（如 SumatraPDF）打开 → 截图工具截取
- **方法 C**（批量）：用 PowerShell + ImageMagick 转换：
  ```powershell
  magick -density 150 "源.pdf[0]" -resize 1200x800 output.jpg
  ```

### 4.3 小红书笔记截图
- 小红书有反爬，直接访问链接可能需登录
- 建议在手机端打开 → 截屏 → 传到电脑
- 或用微信小程序"小红书"打开截图

---

## 五、HTML 引用方式

`index.html` 中用相对路径引用：
```html
<img src="screenshots/work_a_blog.jpg" alt="shikunpunk的小站">
<img src="screenshots/paper_1_sprt.jpg" alt="序贯概率比生产决策模型">
```

部署到 Vercel 时，整个 `screenshots/` 文件夹与 `index.html` 一起上传，保持相对路径即可。
