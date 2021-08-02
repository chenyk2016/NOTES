# pm2

node进程守护

## 安装

`sudo npm install pm2@latest -g`


管理应用:

```bash
pm2 list
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name
```

pm2 start npm --name "app" -- run start
