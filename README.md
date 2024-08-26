# 17th-WorkNet

### 複製專案

1. `git clone https://github.com/astrocamp/17th-WorkNet.git` (複製到本地)
2. `cd git_practice` (進入專案內容)
3. `git pull origin main` (拉取最新變更)
4. `git status` (確認狀態)

### 安裝步驟

1. `poetry shell` (進入虛擬環境)
2. `poetry install` (下載 poetry 相關套件)
3. `npm i` (下載 npm 相關套件)
4. 建立`.env` (SECRET_KEY)

### 執行指令

1. `npm run dev` #有安裝 concurrently, wins 使用者請自行修改指令

### Git 指令(初次使用)

1. `git init` (git 初始化)
2. `pre-commit run --all-files` (pre-commit 檢查格式)
3. `git add` (git 新增檔案)
4. `cz commit` (cz 選擇 commit 格式)
5. `git push -u origin main` (推到 github)

### Git Push

1. `poetry run pre-commit run --all-files`
2. `git add`
3. `cz commit`

### Git Push(makefile)

1. `make lint`
2. `git add`
3. `make commit`

### 套件清單

框架：[django](https://www.djangoproject.com/), [AlpineJS](https://alpinejs.dev/), [HTMX](https://htmx.org/)

樣式：[TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)

輔助套件：[concurrently](https://www.npmjs.com/package/concurrently), [pre-commit](https://pre-commit.com/), [commitizen](https://github.com/commitizen-tools/commitizen), [python-dotenv](https://github.com/theskumar/python-dotenv), [django-extensions](https://django-extensions.readthedocs.io/en/latest/), [django-debug-toolbar](https://django-debug-toolbar.readthedocs.io/en/latest/)

### Team

黃信愷 https://github.com/KK-Huang86
馬御登 https://github.com/RDNNNNN
江東橙 https://github.com/DongOrange
丁敬嘉 https://github.com/Ellen9543
吳菁菁 https://github.com/kait-wu
古佳翰 https://github.com/Gujiahan
