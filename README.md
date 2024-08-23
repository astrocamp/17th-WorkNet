# 17th-WorkNet

### 安裝步驟
1. `poetry shell` #進入虛擬環境
2. `poetry install` #下載Python相關套件
3. `npm i` #下載前端相關套件
4. 建立`.env`

### 執行指令
1. `npm run dev` #有安裝concurrently, wins使用者請自行修改指令

### Git指令
1. `git init` #git初始化(首次使用)
2. `pre-commit run --all-files` #pre-commit檢查格式
3. `git add .` #git新增所有檔案
4. `cz commit` #cz選擇commit格式
5. `git push -u origin main` #推到github(首次使用)

###  套件清單
TailwindCSS, DaisyUI, AlpineJS, HTMX, Concurrently
django, pre-commit, commitizen, python-dotenv, django-extensions, django-debug-toolbar