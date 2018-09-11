## adb常用命令记录
>更新时间（20180822）

adb即Android Debug Bridge（安卓调试桥）。它就是一个命令行窗口，用于通过电脑端与模拟器或者真是设备交互。

### 常用命令

    # 列出可用设备
    $ adb devices

    # 通过ip地址链接设备
    $ adb connect <device-ip-address>

    # 断开连接
    $ adb disconnect <device-ip-address>


**常用模拟器端口**

    夜神模拟器：adb connect 127.0.0.1:62001

    逍遥安卓模拟器：adb connect 127.0.0.1:21503

    天天模拟器：adb connect 127.0.0.1:6555

    海马玩模拟器：adb connect 127.0.0.1:53001

    网易MUMU模拟器：adb connect 127.0.0.1:7555

    原生模拟器：adb connect (你的IP地址)：5555


### 参考链接
https://blog.csdn.net/yulle/article/details/79568828
