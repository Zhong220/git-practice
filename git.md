## 說明 blob, tree, commit, branch, head 分別是什麼?

`blob`, `tree`, `commit`, `branch`, `head` 構成了 Git 資料管理和版本控制的基礎，以下為各個概念的說明：

### 1. blob (Binary Large Object)：文件內容的儲存單位

**blob 是甚麼?**

在 Git 中，`blob` 是專門用來儲存文件內容的**基礎數據單位**（最小數據單位）。當你執行 `git add` 檔案時，Git 會將文件內容轉換為二進制格式並產生一個 `blob` 物件，並使用文件內容透過內建演算法（SHA-1）計算出 Hash Value 來唯一標示該文件內容。

**blob 的結構**

- **數據內容：** `blob` 的內容等於檔案的實際數據（不包括檔名、權限等元數據），只儲存純粹的文件內容。
- **Hash value 標示：** Git 通過 SHA-1 演算法計算文件內容的 Hash value 作為 `blob` 的唯一標識，若兩個文件內容完全相同，Git 會產生相同的 Hash value，避免儲存相同數據。
- **壓縮：** 為節省空間，Git 將 `blob` 壓縮儲存，且 `blob` 是不可變的，一旦創建便不會被修改。

**blob 的操作**

- 執行 `git add` 時，Git 會將文件內容轉換成 `blob` 並保存到 Git 的 Object Database 中。
- 執行 `git commit` 時，Git 只會引用已存在的 `blob`，節省儲存空間。

### 2. tree：文件目錄的表示方式

**tree 是甚麼?**

`tree` 是 Git 中用來表示目錄結構的資料結構，包含目錄下的文件和子目錄，並指向這些文件的 `blob` 或子目錄的 `tree`。

**tree 的結構**

- **文件及子目錄：** 每個 `tree` 物件包含多個文件和子目錄，並記錄每個文件的文件名、文件權限和對應的 `blob` 的 Hash value。對於子目錄，`tree` 指向另一個 `tree`。
- **引用：** `tree` 的每一項引用某個文件的 `blob` 或其他子目錄的 `tree`。

**tree 的操作**

- 執行 `git commit` 時，Git 會生成一個 `tree` 來表示當前目錄結構，記錄每個文件的名稱、權限以及對應的 `blob`。
- 若目錄下有子目錄，`tree` 會包含指向子目錄的 `tree`，形成層級結構。

### 3. commit：版本控制的核心單位

**commit 是甚麼?**

`commit` 是 Git 中最關鍵的資料結構，記錄了提交的具體內容及所有元數據（例如提交訊息、作者信息、時間等）。每次提交時，Git 會創建一個新的 `commit` 物件。

**commit 的結構**

- **指向 `tree`:** 每個 `commit` 指向一個 `tree`，表示當前提交的文件目錄結構和內容。
- **提交元數據:** 包含提交者的姓名、電子郵件、提交訊息、時間等元數據。
- **指向上一個 `commit`:** 多數 `commit` 指向前一次的 `commit`，形成版本歷史的鏈條。

**合併情況下的 `commit`**

當進行合併操作時，`commit` 可能有多個父 `commit`，表明此提交融合了來自不同分支的變更。

**commit 的操作**

- 執行 `git commit` 時，Git 會生成一個新的 `commit` 物件，指向當前的 `tree`，並記錄提交訊息和信息。

### 4. branch：分支，指不同版本的開發線

**branch 是甚麼?**

`branch` 是一個可變的指針，指向某個特定的 `commit`，用來表示開發的不同路線。`branch` 讓開發者可以同時進行多條開發線，不影響主線程式碼。

**branch 的結構**

- **指向 `commit`:** 一個 `branch` 本質上是一個指向某個 `commit` 的名稱，當創建新 `branch` 時，會指向當前 `HEAD` 所指的 `commit`。
- **隨提交移動：** 當在某個分支上提交新的程式碼時，`branch` 的指針會自動指向最新的 `commit`。

**branch 的操作**

- 執行 `git checkout -b <branch>` 創建新 `branch`，並指向當前的 `commit`。
- 提交後，該 `branch` 自動更新指向最新的 `commit`。
- 可以透過 `merge` 合併不同 `branch`。

### 5. HEAD：當前檢出的指針

**HEAD 是甚麼?**

`HEAD` 是一個特殊的指針，指向當前檢出的 `commit` 或 `branch`。它告訴 Git 你當前在哪個 `branch` 上工作，或是你檢出了哪個具體的 `commit`。

**HEAD 的結構**

- **指向 `branch`:** 通常 `HEAD` 指向某個 `branch`，表示你正在該 `branch` 上工作。
- **Detached HEAD（脫離狀態）：** 當檢出一個具體的 `commit` 而非 `branch` 時，`HEAD` 處於脫離狀態，表示你直接在某個特定 `commit` 上工作。

**HEAD 的操作**

- 當切換分支時，`HEAD` 會指向新分支的最新提交。
- 執行 `git checkout <commit>` 時，`HEAD` 進入脫離狀態，指向該 `commit`。

## 紀錄在 git repo 操作過程中，`.git` 資料夾裡的變化，看看你可以觀察到什麼。

### git init

我在 `C:\Users\容\OneDrive\桌面\Cloud_native\personal_hw\W01_HWA` 執行 `git init`，此時 Git 創建了一個 `.git` 資料夾來存放版本控制的數據。

#### 初始化後 `.git` 資料夾的結構

- **hooks：** 存放 hook scripts，用來在特定 Git 操作前後自動執行操作。
- **info：** 包含 `exclude` 文件，類似 `.gitignore`，但針對整個儲存庫全局生效。
- **objects：** 儲存所有的 Git 物件（如 `blob`、`tree`、`commit`）。每次執行 `git add` 或 `git commit` 後，新的物件會儲存在這裡。
- **refs：** 存放指向 `branch` 和 `tag` 的引用，指向具體的 `commit`。
  - **refs/heads/：** 包含每個 `branch` 的引用。
  - **refs/tags/：** 包含標籤的引用。
- **config：** 儲存庫的配置文件，存放用戶信息、提交格式、遠端儲存庫地址等設定。
- **description：** 用於 bare repository 提供簡單描述，在普通儲存庫中無用。
- **HEAD：** 指向當前 `branch` 或具體的 `commit`。

### git add

當我創建文件如 `git.md`、`readme.md`、`video.md` 並執行 `git add`，Git 會將這些文件轉換為 `blob` 物件並添加到暫存區。此時 `.git/objects/` 生成了新的 `blob`，以 `hash value` 來命名文件。

### git commit

提交後生成 `commit` 物件，`objects` 資料夾裡會存放新生成的 `commit`、`tree` 和 `blob` 物件，`refs/heads/master` 更新指向最新的 `commit`。

### git branch

當我創建新分支時（如 `git branch new-feature`），`.git/refs/heads/` 中創建一個名為 `new-feature` 的文件，指向當前的 `commit`。

### git checkout

執行 `git checkout <branch>` 切換分支，`HEAD` 更新指向新的分支。

### git merge

執行 `git merge new-feature`，生成合併 `commit`，更新 `.git/refs/heads/master` 指向合併提交。

## commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

### commit Message 格式

- **Header 格式：** `<TYPE>(<SCOPE>): <SUBJECT>`
  - **TYPE:** 表示 commit 的類型：
    - `feat`: 新增或修改功能
    - `fix`: 修復 bug
    - `docs`: 文件更新
    - `style`: 格式變更（如空格、分號）
    - `refactor`: 重構（無功能變更）
    - `test`: 增加測試
    - `chore`: 建構工具或輔助程式變更
    - `perf`: 效能優化
    - `revert`: 回復先前的 commit
  - **SCOPE:** 影響範圍（可選）。
  - **SUBJECT:** 簡短描述，不超過 50 字元，不用句號結尾。

- **Body 詳細說明：**
  - 詳細描述本次 commit 的內容、原因及改動。
  - 每行不超過 72 字元。

- **Footer（可選）：**
  - 若與 issue 或 pull request 相關，記錄編號，如 `Issue: #1234`。
  - 若有重大變更或不相容更新，使用 `BREAKING CHANGE: ` 說明變更內容和遷移方式。

### commit message style

- **動詞開頭：** 標題用動詞開頭，簡潔有力，使用現在式。
- **保持簡潔：** 每次 commit 針對單一功能或修正，避免提交太多變更。
- **一致性：** 團隊應保持一致的 commit message 格式。
