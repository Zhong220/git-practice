# 說明 blob, tree, commit, branch, head 分別是什麼?

blob, tree, commit, branch, head構成了Git資料管理和版本控制的基礎，以下為分別概念說明：

## 1. blob(Binary Large Object)：文件內容的儲存單位

    *blob是甚麼?*
                
        在Git中，blob是專門用來儲存文件內容的*基礎數據單位(最小數據單位)*，當git add檔案的時候(將檔案添加到Git中)，Git會將文件內容轉換為二進制格式並產生一個blob物件，並使用文件內容透過內建演算法(SHA-1)計算出Hash Value來唯一標示該文件內容。

    *blob的結構?*
                
         - *數據內容：*blob的內容=檔案的實際數據(不包括檔名、權限等元數據)，只儲存純粹的文件內容。
                
         - *Hash value標示：*Git通過SHA-1算法計算文件內容的Hash value，作為blob的唯一標識，並且若兩個文件內容完全一樣，Git會產生相同的Hash value，使得在儲存時避免保存相同的數據。
                
         - *壓縮：*為了節省空間，Git會將blob進行壓縮，並且blob是以不可變的形式儲存的，依但被創建就不會被修改。

     *blob的操作?*

        - 當執行git add時，Git會將文件內容轉換成blob並保存到Git的Object Database中。

        - 當執行git commit時，Git不會重新保存文件，而是引用已經存在的blob，以達到節省空間的目的。

## 2. tree：文件目錄的表示方式

    *tree是甚麼?*

        tree是Git中用來表示目錄結構的資料結構。包含了目錄下的文件和子目錄，並指向這些文件的blob或子目錄的tree。

    *tree的結構?*

        - *文件及子目錄：*每個tree物件可以包含多個文件和子目錄。tree會包含每個文件的文件名、文件權限，以及文件所對應之blob的Hash value。對於子目錄，tree會指向另一個tree。

        - *引用：*tree的每一項都會引用某個文件的blob，或其他子目錄的tree。

    *tree的操作?*

        - 當執行git commit時，Git會生成一個tree來表示當前目錄的結構。這個tree會記錄每個文件的名稱、權限、以及這些文件所對應的blob。

        - 如果某個目錄下有子目錄，則tree會包含指向子目錄的tree，從而形成層級化的目錄結構。


## 3. commit：版本控制的核心單位
            
    *commit是甚麼?*

        commit是Git中最關鍵的資料結構，記錄了當前提交的具體內容以及該次提交的所有元數據，例如提交信息、作者信息、時間等等。每次提交Git就會創建一個新的commit物件。

    *commit的結構?*

        - *指向tree:*每個commit都指向一個tree，這個tree表示當前提交時所有文件的目錄結構和文件內容

        - *提交元數據:*commit包含提交者的姓名、電子郵件、提交信息、提交時間等元數據。

        - *指向上一個commit:*大多數commit都會指向前一次的commit，形成一個鏈條，使得Git能夠回朔版本歷史。

    *merge情況下的commit?*

        進行合併操作時，commit可能會有多個父commit，表明這份提交融合了來自不同分支的變更。

    *commit的操作?*

        - 當執行git commit時，Git會生成一個新的commit物件，這個物件指向當前的tree，並記錄當時提交的所有信息。

## 4. branch:分支，指不同版本的開發線

    *branch是甚麼?*

        branch是一個可變的指針，它指向某個特定的commit，用來表示開發的不同路線。branch讓開發者可以同時進行多條勘發現而不影像主線的程式代碼。

    *brach的結構?*

        - *指向commit：*一個branch本質上就是一個指向某個commit的名稱，當創建新的branch時會指向當前head所指向的commit。

        - *隨提交移動：*當在某個分支上提交新的程式代碼時，branch的指針會自動移到最新的commit。

    *branch的操作?*

        - 當執行git checkout -b 新branch時，Git會創建一個新的branch，並且最初會指向當前的commit。
        
        - 當在該branch上commit後，該branch會自動更新去指項新的commit。

        - 可以透過merge將不同的branch合併到一起。


## 5. head:當前檢出的指針

    *head是甚麼?*

        head是特殊的指針，指向當前檢出的commit或branch。它告訴Git你當前在哪個branch上工作，或是你檢出了哪個具體的commit。

    *head的結構?*

        - *指向branch：*通常head指向某個branch，代表著你正在該branch上工作。

        - *Detached HEAD(脫離狀態)：*當檢出一個具體的commit而非branch時，head處於detached狀態，此時你不再位於某個branch，而是直接在某個特定commit上進行工作。

    *head的操作?*

        - 當你切換分支時，head會自動指向新分支的最新提交。

         -當你執行 git checkout 切換到某個具體的 commit 時，headtached 會變成 "detached" 狀態，指向該 commit。

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼。

## git init

    我在C:\Users\容\OneDrive\桌面\Cloud_native\personal_hw\W01_HWA這個路徑上執行git init，此時Git創建了一個.git資料夾來存放與版本控制相關的數據。

    初始化後的.git資料夾產生了下列結構，接著我去了解他們分別存放那些資料，有何作用：

        - hooks：
            存放hook scripts，這些腳本允許在特定的Git操作前後自動觸發特定的操作，例如commit、push或merge前執行腳本。

        - info：
            裡面有一個exclude文件，這是Git排除特定文件的配置文件，作用與.gitignore類似，但它是針對整課儲存庫全局生效的。

        - objects：
            該資料夾用來存放所有的Git物件（如blob、tree、commit等）。每當執行 git add 或 git commit後，新的物件就會被儲存在這裡，是Git儲存庫最核心的資料夾之一。

        - refs：
            用來存放指向branch和tags的引用。此引用指向某個具體的commit，代表當前分支或標籤的最終狀態。
            
            - refs/heads/：
                這個資料夾會包含每個branch的引用（指向最新的commit）
            
            - refs/tags/：
                這個資料夾會包含標籤（tags）的引用，標籤通常用來標記版本釋出點。

        - config：
            是Git儲存庫的配置文件，存放與此儲存庫相關的配置選項，可以在此配置用戶信息、提交格式、遠端儲存庫地址等。而在這的config是專案級別的配置，僅適用於當前儲存庫，若想的話可以在全局使用~/.gitconfig文件來進行全局的配置。

        - description：
            這個文件主要用於bare repository(裸儲存庫)，通常是用於提供一些關於該儲存庫的簡單描述。在普通的非裸儲存庫中，這個文件基本上沒有作用。

        - HEAD：
            HEAD文件是Git用來指向當前分支的指針，表示當前檢出的分支或具體的commit。通常會指向refs/heads/<branch>，表示正在該分支上工作。而我的文件內容是ref: refs/heads/master，代表我對文件的所有變更、提交都會影響master分支。

## git add

    當我編輯或創建文件，例如git.md、readme.md、vedio.md後，執行git add命令，Git便將這些文件內容儲存為blob物件，並將其添加到暫存區。在這個時候我進入object資料夾時，沒有看到以hash value命名的blob文件，而後才發現，它悶被分成兩部分存在資料夾當中，所以只出現一些簡短的資料夾名(如36、48、a5)，而非完整的。

    而後才知道，假設git.md的hash value是a5b9c9f8...，那麼它的blob物件會儲存在.git/objects/a5/b9c9f8...這個路徑中，其中：
        
        －a5 是哈希值的前兩個字符，作為子目錄的名稱。

        －b9c9f8... 是剩餘的哈希值部分，作為文件名。

## git commit

    git.md、readme.md、vedio.md都在暫存區後，接下來透過git commit來記錄這些變更。提交後，得到5d6c4f2作為本次提交的hash value，再度進到object資料夾中可以發現提交後這些新生成的commit物件被儲存在這個資料夾裡，且hash value便是5d6c4f2。而透過cat .git/refs/heads/master可以查看現在master分支指項的提交:5d6c4f2d1dacc5bcf64dd4232e9897cf38afe1f6。

    接著我對git.md進行修改後重新執行git add git.md指令，會發現object資料夾中生成了新的blob物件，接著使用git commit -m "Update git.md"去創建新的commit和tree物件，同時更新.git/refs/heads/master以指向新的提交，.git變化如下:
        
        - .git/objects/：這裡將會生成新的 blob、tree 和 commit 物件。你可以檢查 .git/objects/ 中是否新增了新的物件。

        -git/refs/heads/master：這個文件會更新，指向最新的提交。
        
        -git/HEAD：HEAD文件仍然指向master分支。

## git branch

    接著練習創建新分支並切換到該分支，去觀察.git/refs/heads/中的變化：

        －git branch new-feature（創建新分支）：此時在.git/refs/heads/中創建一個新的文件new-feature，指向當前master分支的提交。

## git checkout

        - git checkout new-feature（切換到新分支）：此時.git/HEAD更新並且指向refs/heads/new-feature，表示我目前再次分支上工作。

        - git checkout master（切換回master分支）：在新分支修改完git.md並提交後，切換回master分支並將new-feature分支合併回去。

## git merge

        - git merge new-feature(將new-feature合併回master)：這會創建一個新的合併提交，並更新.git/refs/heads/master，使其指向新的合併提交。

        最後檢查.git變化：

            －.git/objects/：會生成一個新的合併commit物件，這個commit物件有兩個父提交，分別來自master和 new-feature。

            －.git/refs/heads/master：更新，指向新的合併提交。

            - .git/HEAD：仍然指向 refs/heads/master，因為已切換回master分支。

# commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

## commit Message 格式

    *Header格式:*

        - 格式：<TYPE>(<SCOPE>): <SUBJECT>
        - TYPE：表示commit的類型，例如：
            - feat：新增或修改功能
            - fix：修復bug
            - docs：文件更新
            - style：格式變更（例如空格、分號）
            - refactor：重構（無功能變更）    
            - test：增加測試
            - chore：建構工具或輔助程式變更
            - perf：效能優化
            - revert：回復先前的commit
        - SCOPE：影響範圍，例如資料庫、模板（可選）
        - SUBJECT：簡短描述（不超過 50 字元，且不用句號結尾）

    *Body詳細說明:*

        - 詳細描述本次commit的內容、原因及改動
        - 每行不超過 72 字元
        - 說明「做了什麼」、「為什麼要做這件事」以及「如何實現」

    *Footer(可選):*

        - 若與issue或pull request相關，記錄編號，如(Issue: #1234)
        - 若有重大變更或不相容更新，使用 BREAKING CHANGE:，並詳細描述變更的內容和遷移方式。

## commit message style

    - 動詞開頭：標題用動詞開頭，簡潔有力，使用現在式，如：Add, Fix, Update。 
    - 保持簡潔：每次 commit 應只針對一個功能或修正，避免一次提交太多變更。
    - 一致性：團隊應保持 commit message 格式一致，便於日後查閱。