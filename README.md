# 17th-WorkNet

### 複製到本地

1. `git clone https://github.com/KK-Huang86/git_practice.git` (複製一份到本地)
2. `cd git_practice` (進入專案內容)
3. `git pull origin main` (拉取最新變更)
4. `git status` (確認狀態)

### 安裝步驟

1. `poetry shell` #進入虛擬環境
2. `poetry install` #下載 Python 相關套件
3. `npm i` #下載前端相關套件
4. 建立`.env`

### 執行指令

1. `npm run dev` #有安裝 concurrently, wins 使用者請自行修改指令

### Git 指令

1. `git init` #git 初始化(首次使用)
2. `pre-commit run --all-files` #pre-commit 檢查格式
3. `git add .` #git 新增所有檔案
4. `cz commit` #cz 選擇 commit 格式
5. `git push -u origin main` #推到 github(首次使用)

### 套件清單

框架：django, AlpineJS, HTMX
樣式：TailwindCSS, DaisyUI
輔助套件：Concurrently, pre-commit, commitizen, python-dotenv, django-extensions, django-debug-toolbar
