# Angular 自動化測試實戰：使用 Protractor 實現 E2E 測試

本專案是【Angular 自動化測試實戰：使用 Protractor 實現 E2E 測試】課程附帶的練習範例專案，學員可以透過此專案進行 E2E 測試相關實作。

## 必要條件

請參考 [Angular 與 Protractor 開發環境說明](https://gist.github.com/doggy8088/3edd8190f4bc486b765a3c4e1fe46c8a) 進行設定。

## 初始化練習環境

1. 下載與安裝本專案

    ```sh
    git clone https://github.com/duotify/ProtractorLabs.git
    cd ProtractorLabs
    npm install
    ```

2. 透過 VSCode 開啟專案

    ```sh
    code .
    ```

3. 啟動 Web API 伺服器

    請直接下載本課程專用的後端主程式，下載後直接滑鼠雙擊即可啟動 Web API 伺服器。

    * Windows:

        你也可以用 Windows PowerShell 執行以下命令：

        ```ps1

        ```

    * macOS:

        請使用 Terminal 執行以下命令：

        ```sh

        ```

    請用以下網址測試是否可正常連線：<http://localhost:5000/api/events>

4. 啟動 Angular 開發伺服器

    請在專案根目錄下執行，這個命令會同時啟動前端 Angular 與後端 API 開發伺服器。

    ```sh
    npm start
    ```

5. 測試執行 E2E 測試 (Protractor)

    ```sh
    npm run e2e
    ```
