
## 安装信息
==> Reinstalling php@7.2
==> Pouring php@7.2-7.2.34_1.catalina.bottle.tar.gz
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set php_ini /usr/local/etc/php/7.2/php.ini system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set php_dir /usr/local/share/pear@7.2 system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set doc_dir /usr/local/share/pear@7.2/doc system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set ext_dir /usr/local/lib/php/pecl/20170718 system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set bin_dir /usr/local/opt/php@7.2/bin system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set data_dir /usr/local/share/pear@7.2/data system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set cfg_dir /usr/local/share/pear@7.2/cfg system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set www_dir /usr/local/share/pear@7.2/htdocs system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set man_dir /usr/local/share/man system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set test_dir /usr/local/share/pear@7.2/test system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear config-set php_bin /usr/local/opt/php@7.2/bin/php system
==> /usr/local/Cellar/php@7.2/7.2.34_1/bin/pear update-channels
==> Caveats
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php7_module /usr/local/opt/php@7.2/lib/httpd/modules/libphp7.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/7.2/

php@7.2 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have php@7.2 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/php@7.2/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/usr/local/opt/php@7.2/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@7.2 you may need to set:
  export LDFLAGS="-L/usr/local/opt/php@7.2/lib"
  export CPPFLAGS="-I/usr/local/opt/php@7.2/include"


To have launchd start php@7.2 now and restart at login:
  brew services start php@7.2
Or, if you don't want/need a background service you can just run:
  php-fpm