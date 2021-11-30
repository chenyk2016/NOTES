# IOS证书

## Certificates

> 参考<https://www.jianshu.com/p/ef61c4365e7f>

1. 证书 Certificates

   - 发布APP使用，可以云安装
   - 证书可以导出.p12文件供其他开发者使用
   - 证书过期后需要重新生成
   - _adhoc 针对特定证书发布，需要先在apple-developer绑定设备
   - _appStore 发布应用市场，

2. Identifiers

   App ID， IOS应用对应的Bundle ID，用于圈定应用申请的服务等。

3. Provisioning Profile

    专门用于将 Certificates、Identifiers、Devices结合起来，形成一个描述证书、标示符的描述文件。

教程:

1. [dcloud-iOS证书(.p12)和描述文件(.mobileprovision)申请](http://ask.dcloud.net.cn/article/152)
