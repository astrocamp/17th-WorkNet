# WorkNet

![WorkNet Logo](static/imgs/logo.png)

### WorkNet 助你求職風雨無阻

專案網址：https://www.worknet.live/

## 簡介

### WorkNet 讓使用者瀏覽面試經歷與工作心得，了解公司環境與文化。

### 使用者可以上傳履歷，應徵職缺，並與其他會員留言互動，分享面試技巧和工作經驗，打造一個真實的求職社群，幫助大家在職涯中做出更明智的決策。

![WorkNet Home](static/imgs/home.jpg)

## 安裝環境

1. `git clone https://github.com/astrocamp/17th-WorkNet.git` （將專案複製到本地）
2. `cd 17th-WorkNet` (進入專案目錄)
3. `poetry install` (安裝 Poetry 相關套件)
4. `npm install` (安裝 npm 相關套件)
5. 建立`.env` (設定環境變數)

## 執行環境

- `npm run dev`

## 技術使用

- 前端：daisyUI, TailwindCSS, Alpinejs, HTMX
- 後端：Python, Django
- 資料庫：PostgreSQL
- 版本控制：Git
- 第三方登入：Google, Line
- 履歷上傳：Amazon Web Services (AWS) S3
- 郵件發送：Mailgun
- 部署：Heroku
- 規劃：Miro, Trello

## 團隊成員

- 黃信愷 [GitHub](https://github.com/KK-Huang86)
  - Google 第三方登入
  - 分類標籤功能
  - 應徵職缺功能
  - 收藏公司功能
- 馬御登 [GitHub](https://github.com/RDNNNNN)
  - 分析功能
  - 會員系統
  - 忘記密碼
  - 郵件發送
  - 公司&職缺關聯
- 江東橙 [GitHub](https://github.com/DongOrange)
  - 權限系統
  - 分頁功能
  - 專案網頁設計
  - 評論&會員關聯
- 丁敬嘉 [GitHub](https://github.com/Ellen9543)
  - Line 第三方登入
  - 文章按讚
  - 通知系統
  - 提示訊息
  - 應徵紀錄
  - 會員&會員資訊關聯
  - 會員&留言關聯
- 吳菁菁 [GitHub](https://github.com/kait-wu)
  - Heroku 部署
  - 履歷上傳(AWS S3)
  - 評論功能
  - 搜尋功能
  - 公司&評論關聯
- 古佳翰 [GitHub](https://github.com/Gujiahan)
  - 收藏職缺功能
  - 公司查看應徵履歷功能
  - 登入後轉址原頁面
  - 使用者&履歷關聯
