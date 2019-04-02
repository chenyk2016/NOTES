## wifi

	```
	# 显示
	netsh wlan show hostednetwork
	# 开启
	netsh wlan start hostednetwork 命令开启wifi.
	# 关闭
	netsh wlan stop hostednetwork 命令来关闭wifi
	// 命令设置wifi名称和密码
	netsh wlan set hostednetwork mode=allow ssid=winpc key=qwertyuiop
	```

1、用shutdown -s -t 60          （60表示60秒，可以自行设定）

2、shutdown -a 就可以中止关机

3、在cmd里面输入shutdow/?，就可以知道命令的使用。
