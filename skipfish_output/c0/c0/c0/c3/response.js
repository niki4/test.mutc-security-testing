var res = {'data':'HTTP/1.1 200 Partial Content\x0aServer: nginx\x0aDate: Wed, 08 Nov 2017 20:11:01 GMT\x0aContent-Type: text/html; charset=UTF-8\x0aContent-Length: 1236\x0aConnection: keep-alive\x0aCache-Control: no-cache\x0aPragma: no-cache\x0aVary: Host,Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1235/1236\x0a\x0a\x0a\x3c!DOCTYPE HTML PUBLIC \x22-//W3C//DTD HTML 4.0 Transitional//EN\x22\x3e\x0a\x3chtml\x3e\x0a\x3chead\x3e\x0a    \x3ctitle\x3e\x0a        \x0a        Welcome to our buggy system!\x0a        \x0a    \x3c/title\x3e\x0a    \x3cmeta http-equiv=\x22Content-Type\x22 content=\x22text/html; charset=UTF-8\x22\x3e\x0a    \x3cstyle type=\x22text/css\x22\x3e\x0a        div.content {\x0a            width: 440px;\x0a            padding: 10px;\x0a            background-color: greenyellow;\x0a            border: 1px solid #93d928;\x0a            -moz-border-radius: 10px;\x0a            -webkit-border-radius: 10px;\x0a        }\x0a\x0a        table.logo {\x0a            background: url( \x22/img/background.png\x22 );\x0a            background-repeat: no-repeat;\x0a            width: 402px;\x0a            height: 285px;\x0a        }\x0a\x0a        span.message {\x0a            color: green;\x0a        }\x0a\x0a        div.error {\x0a            width: 440px;\x0a            padding: 10px;\x0a            border: 1px solid coral;\x0a            margin-bottom: 10px;\x0a            text-align: left;\x0a            -moz-border-radius: 10px;\x0a            -webkit-border-radius: 10px;\x0a        }\x0a    \x3c/style\x3e\x0a\x3c/head\x3e\x0a\x3cbody\x3e\x0a\x3ctable width=\x22100%\x22 height=\x22100%\x22 border=\x220\x22\x3e\x0a    \x3ctr align=\x22center\x22 valign=\x22middle\x22\x3e\x0a        \x3ctd\x3e\x0a            \x3ctable class=\x22logo\x22 border=\x220\x22\x3e\x0a                \x3ctr align=\x22center\x22 valign=\x22middle\x22\x3e\x0a                    \x3ctd\x3e\x0a                        \x0a                        \x3cdiv class=\x22error\x22\x3e\x0a                            \x0a                            - so what sex are you, really?\x3cbr\x3e\x0a                            \x0a                        \x3c/div\x3e\x0a                        \x0a                        \x3cdiv class=\x22content\x22\x3e\x0a                            \x0a                            \x0a                            \x0a                            \x3ctable border=\x220\x22\x3e\x0a    \x3cform action=\x22\x22 method=\x22post\x22\x3e\x0a        \x3cinput type=\x22hidden\x22 name=\x22action\x22 value=\x22register_do\x22\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3eLogin\x3c/td\x3e\x0a            \x3ctd\x3e\x0a                \x3cinput type=\x22text\x22 name=\x22login\x22 value=\x22skipfish\x22\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3eEmail\x3c/td\x3e\x0a            \x3ctd\x3e\x0a                \x3cinput type=\x22text\x22 name=\x22email\x22 maxlength=\x2232\x22 value=\x22skipfish@example.com\x22\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3ePassword (8-16 symbols)\x3c/td\x3e\x0a            \x3ctd\x3e\x0a                \x3cinput type=\x22text\x22 name=\x22password\x22 maxlength=\x2216\x22 value=\x22skipfish\x22\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3eConfirm password\x3c/td\x3e\x0a            \x3ctd\x3e\x0a                \x3cinput type=\x22text\x22 name=\x22password_confirm\x22 maxlength=\x2216\x22\x0a                       value=\x22skipfish\x22\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3eYour sex\x3c/td\x3e\x0a            \x3ctd\x3e\x0a                \x3cselect name=\x22sex\x22\x3e\x0a                    \x3coption value=\x22male\x22\x3emale\x3c/option\x3e\x0a                    \x3coption value=\x22female\x22\x3efemale\x3c/option\x3e\x0a                    \x3coption value=\x22none\x22\x3enone\x3c/option\x3e\x0a                \x3c/select\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3eSubscribe to our news\x3c/td\x3e\x0a            \x3ctd\x3e\x3cinput type=\x22checkbox\x22 name=\x22news\x22 \x22checked\x22\x3e\x3c/td\x3e\x0a        \x3c/tr\x3e\x0a        \x3ctr\x3e\x0a            \x3ctd\x3e\x0a                \x3cinput type=\x22button\x22 value=\x22Back\x22 onclick=\x22window.location=\x27?action=login\x27\x22\x3e\x0a            \x3c/td\x3e\x0a            \x3ctd align=\x22right\x22\x3e\x0a                \x3cinput type=\x22reset\x22 value=\x22Reset\x22\x3e&nbsp;\x3cinput type=\x22submit\x22 value=\x22Register\x22\x3e\x0a            \x3c/td\x3e\x0a        \x3c/tr\x3e\x0a    \x3c/form\x3e\x0a\x3c/table\x3e\x0a                            \x0a                            \x0a                        \x3c/div\x3e\x0a                    \x3c/td\x3e\x0a                \x3c/tr\x3e\x0a            \x3c/table\x3e\x0a        \x3c/td\x3e\x0a    \x3c/tr\x3e\x0a\x3c/table\x3e\x0a\x3cscript\x3e\x0a  (function(i,s,o,g,r,a,m){i[\x27GoogleAnalyticsObject\x27]=r;i[r]=i[r]||function(){\x0a  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\x0a  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\x0a  })(window,document,\x27script\x27,\x27https://www.google-analytics.com/analytics.js\x27,\x27ga\x27);\x0a\x0a  ga(\x27create\x27, \x27UA-45669254-2\x27, \x27auto\x27);\x0a  ga(\x27send\x27, \x27pageview\x27);\x0a\x0a\x3c/script\x3e\x0a\x3c/body\x3e\x0a\x3c/html\x3e\x0a'}