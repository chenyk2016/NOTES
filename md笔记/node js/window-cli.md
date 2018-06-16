
## tips
带空格目录用""


## xcopy 复制
    /y | 覆盖不提示
    /L | 显示要覆盖的文件
    /F | 复制时显示完整的源文件名和目标文件名。
    /EXCLUDE:*.md[+] | 排除文件
    /S | 复制子目录

~~~js

xcopy /Y /F /S /EXCLUDE:F:\github\LCalendar-extension\cliignore.md  F:\github\LCalendar-extension F:\github\vue2.0-demos\static\lib\LCalendar

xcopy /Y /F /S /EXCLUDE:F:\github\LCalendar-extension\cliignore.md  F:\github\LCalendar-extension "F:\BONC\工作项目\app\11-07 客户欠费预警\代码\my-project\static\lib\LCalendar"

~~~
