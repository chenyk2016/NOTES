## 安装信息

```
==> Reinstalling php
==> Pouring php-8.0.1_1.catalina.bottle.tar.gz
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set php_ini /usr/local/etc/php
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set php_dir /usr/local/share/p
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set doc_dir /usr/local/share/p
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set ext_dir /usr/local/lib/php
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set bin_dir /usr/local/opt/php
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set data_dir /usr/local/share/
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set cfg_dir /usr/local/share/p
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set www_dir /usr/local/share/p
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set man_dir /usr/local/share/m
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set test_dir /usr/local/share/
==> /usr/local/Cellar/php/8.0.1_1/bin/pear config-set php_bin /usr/local/opt/php
==> /usr/local/Cellar/php/8.0.1_1/bin/pear update-channels
==> Caveats
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /usr/local/opt/php/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/8.0/

To have launchd start php now and restart at login:
  brew services start php
Or, if you don't want/need a background service you can just run:
  php-fpm
==> Summary
🍺  /usr/local/Cellar/php/8.0.1_1: 499 files, 77.8MB
==> `brew cleanup` has not been run in 30 days, running now...
Pruned 0 symbolic links and 11 directories from /usr/local
Error: Permission denied @ apply2files - /usr/local/lib/node_modules/@vue/cli/node_modules/extglob/lib/.DS_Store

```