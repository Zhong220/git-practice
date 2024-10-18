目錄：
- [x] 1. instance 的 public IP
- [x] 2. 什麼是 instance type?
- [x] 3. 什麼是 Nginx？有哪些用途與特性？
- [ ] 4. pm2 套件是什麼？有什麼用處？

- [ ] 5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
- 提示 `Reverse proxy` vs `Forward Proxy`
- [ ]  在 readme 中提供步驟 9 的 Nginx 設定檔
- [ ] 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
- [ ] 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
- [ ] 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
- [ ] 10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
- [ ] 11. 列出完成本作業時參考的資料
- [ ] 12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看
- - -
### 1. 提供 instance 的 public IP：
http://3.25.197.50/

### 2. 什麼是 instance type？
Instance type 由不同的 **CPU, Memory, Storage,** 和 **networking capacity** 組合而成，故 Instance type 指的是不同的虛擬伺服器配置選項，在經過設計後分別適用於不同的情境，讓使用者可以根據需求來選擇合適的資源配置。

https://aws.amazon.com/ec2/instance-types/?nc1=h_ls

### 3. 什麼是 Nginx？有哪些用途與特性？

**什麼是 Nginx？**

Nginx（讀作 engine x）是一款開源且高效能的網路伺服器軟體，主要用來幫助網站處理使用者的請求，並且回傳網頁內容。

它同時還能處理很多額外的工作，像是幫忙分配流量、加快網頁載入速度、保護伺服器不被外界知道真實位置等。且 Ngix 的特點在於它能同時處理非常多的請求而不會崩潰，所以特別適合流量大的網站。

**Nginx 的用途？**

- Web 伺服器：

    這是 Nginx 的最基本的功能，用來處理靜態資源（圖片、HTML、CSS 等）
    
    當使用者請求這些靜態資源時，Nginx 可以快速傳遞這些內容，讓網站的載入速度更快。

- 反向代理（Reverse Proxy）：

    Nginx 在此時作為中間人，接收請求後轉發給真正的後端伺服器去處理，以此保護後端伺服器的隱私，讓外界無法知道伺服器的真正位置。

- 負載均衡（Load Balancer）：

    當網站流量很大時，Nginx 可以把使用者請求分配給多台伺服器去處理，避免超載。且 Nginx 支援多種分配演算法（例如Pool）或者根據伺服器的負載量來分配。

- HTTP Cache：

    Nginx 可以保存之前處理過的請求結果，當有同樣的請求再次出現時就可以直接提供之前的結果，這樣就不需要後端伺服器再次處理這個問題，以減少伺服器負擔。

- 處理 HTTPS：

    Nginx 支援 HTTPS 加密，能確保網站的資料傳輸是安全的，幫助網站輕鬆實現 HTTPS。

**Nginx 的用途？**

- 高效能：
    
    Nginx 能同時處理非常多的請求，而不會像傳統伺服器一樣容易崩潰。

- 低資源消耗：
    
    Nginx 在高流量的情況下佔用的記憶體和 CPU 比一般網頁伺服器（例如：Apache）更少。即使面對大量的請求，它仍然可以保持良好的性能表現，不會消耗太多資源。

- 簡單的配置：
    
    相比於 Apache， Nginx 因為模組化的設計，配置上是較為簡單的，不過就提供的功能與相關套件來看，則是歷史悠久的 Apache 略勝一籌。

- 多功能性：
    
    除了作為網頁伺服器，Nginx 還可以同時擔任反向代理、負載均衡器、HTTP 快取等功能，這讓它成為一個非常多用途的工具。

- 高彈性擴展：
  
  Nginx 可以與其他服務（如 Docker）結合，實現彈性擴展，隨著網站的成長，Nginx 可以很容易地擴展以處理更多的請求。

### 4. pm2 套件是什麼？有什麼用處？

### 5.  `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
- 提示 `Reverse proxy` vs `Forward Proxy`
  
### 6. 在 readme 中提供步驟 9 的 Nginx 設定檔

### 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

### 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

### 9.  Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

### 10.  其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
https是甚麼

### 11.  列出完成本作業時參考的資料
https://medium.com/starbugs/web-server-nginx-2-bc41c6268646
https://pink-learn-frontend.medium.com/%E5%89%8D%E7%AB%AF%E5%AD%B8nginx-%E4%BB%80%E9%BA%BC%E6%98%AFnginx-fc604db20ad1
https://tw.alphacamp.co/blog/nginx
https://ithelp.ithome.com.tw/articles/10241354

### 12.  (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看