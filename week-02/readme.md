## Q: 安裝的NodeJS版本?
##### Ans: Node.js v20.17.01 with long-term support

## Q: nvm與npm分別是甚麼?

### NVM（Node Version Manager）
- **功能：**
NVM 是一個用來管理和切換不同版本的 Node.js 的工具。對於在不同專案中需要使用不同 Node.js 版本的開發者來說十分重要。

- **主要特點：**
    - **安裝多個 Node.js 版本:** 允許在同一系統上安裝多個版本的 Node.js。
    
    - **輕鬆切換版本：** 通過簡單的指令即可在不同的 Node.js 版本之間切換，以滿足不同專案的需求。
    
    - **跨平台支持：** 雖然主要針對 macOS 和 Linux，Windows 使用者可以使用 nvm-windows 來達到類似的效果。

- **常用指令：**
1. `nvm install <版本號>`：安裝指定版本的 Node.js。

2. `nvm use <版本號>`：切換到指定版本的 Node.js。

3. `nvm list` 或 `nvm ls`：列出已安裝的所有 Node.js 版本。

4. `nvm ls-remote`：列出所有可用的遠程 Node.js 版本。

5. `nvm alias default` <版本號>：設置默認使用的 Node.js 版本。

- - -

### NPM（Node Package Manager）
- **功能：**
NPM 是 Node.js 的套件管理工具，用於下載、安裝和管理專案所需的各種 JavaScript 套件（packages）。

- **主要特點：**
    - **管理套件依賴：** 通過 package.json 文件記錄專案所需的套件及其版本，方便團隊協作和專案部署。
    - **安裝套件：** 可以安裝公開的 NPM 套件庫中的各種模組，快速集成到專案中。
    - **版本控制：** 管理套件的版本，確保專案使用的是兼容的套件版本，避免版本衝突。
- **常用指令：**
1. `npm init`：初始化一個新的 NPM 專案，生成 package.json 文件。

2. `npm install <套件名稱>` 或 `npm i <套件名稱>`：安裝指定的套件，並將其記錄在 package.json 中。

3. 使用 `--save-dev` 或 `-D` 來安裝開發依賴的套件。

4. 使用 `-g` 來全局安裝套件。

5. `npm uninstall <套件名稱>`：移除已安裝的套件。

6. `npm list`：列出當前專案中安裝的所有套件。

7. `npm update`：更新已安裝的套件到最新版本。

8. `npm run <腳本名稱>`：執行在 package.json 中定義的腳本命令。