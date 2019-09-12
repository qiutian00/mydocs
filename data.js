(function () {
    var content = [{"context":[{"title":"介绍","link":"/mydocs/index.html"}],"content":"\n        <h1 id=\"介绍\">\n            <a href='#介绍' class='header-anchor'>#</a>\n            <span>介绍</span>\n        </h1>\n    \n        <h2 id=\"什么是Teadocs？\">\n            <a href='#什么是Teadocs？' class='header-anchor'>#</a>\n            <span>什么是Teadocs？</span>\n        </h2>\n    <p>Teadocs 是一款能够帮你快速构建html文档的工具，它基于nodejs编写，并使用markdown来编写文档内容。</p>\n<p>Teadocs 提供内置的搜索技术，除了编写好你引以为豪的内容以外，你无需关注的任何额外的技术问题。</p>\n<p>你可以使用它来编写开源书籍、API文档学习、笔记、学习心得、甚至可以用来写博客。</p>\n\n        <h2 id=\"原理\">\n            <a href='#原理' class='header-anchor'>#</a>\n            <span>原理</span>\n        </h2>\n    <p>Teadocs 会自动根据你编写的markdown文档自动生成html文档，并且生成的html文档具备可复用、可移植等特性，可以部署在任何你喜欢的地方。</p>\n\n        <h2 id=\"贡献\">\n            <a href='#贡献' class='header-anchor'>#</a>\n            <span>贡献</span>\n        </h2>\n    <p>github地址：<a href=\"https://github.com/lisniuse/teadocs\">https://github.com/lisniuse/teadocs</a></p>\n<p>如果你想贡献代码，我们建议你先fork阅读Teadocs的源码，然后push你的idea。</p>\n"},{"context":[{"title":"快速入门","link":"/mydocs/quick_start.html"}],"content":"\n        <h1 id=\"快速入门\">\n            <a href='#快速入门' class='header-anchor'>#</a>\n            <span>快速入门</span>\n        </h1>\n    \n        <h2 id=\"安装它\">\n            <a href='#安装它' class='header-anchor'>#</a>\n            <span>安装它</span>\n        </h2>\n    <p>需要nodejs版本 &gt;= 8.0，npm 版本 &gt; 3.</p>\n<pre class=\"prettyprint\"><code>$ npm install -g teadocs</code></pre>\n        <h2 id=\"使用它\">\n            <a href='#使用它' class='header-anchor'>#</a>\n            <span>使用它</span>\n        </h2>\n    \n        <h3 id=\"第一步\">\n            <a href='#第一步' class='header-anchor'>#</a>\n            <span>第一步</span>\n        </h3>\n    <p>初始化一个文档项目</p>\n<pre class=\"prettyprint\"><code>$ teadcos init mydocs</code></pre>\n        <h3 id=\"第二步\">\n            <a href='#第二步' class='header-anchor'>#</a>\n            <span>第二步</span>\n        </h3>\n    <p>进入这个文档目录</p>\n<pre class=\"prettyprint\"><code>$ cd mydocs</code></pre>\n        <h3 id=\"第三步\">\n            <a href='#第三步' class='header-anchor'>#</a>\n            <span>第三步</span>\n        </h3>\n    <p>此步骤是进入文档编辑模式（开发模式），此模式将监视markdown文件的变化，实时热替换html页面。</p>\n<pre class=\"prettyprint\"><code>$ teadocs dev</code></pre>\n        <h3 id=\"自动生成项目初始结构\">\n            <a href='#自动生成项目初始结构' class='header-anchor'>#</a>\n            <span>自动生成项目初始结构</span>\n        </h3>\n    <p>如果你想偷懒，那么你可以在编写好tree.md（菜单的配置文件）的情况下，直接运行以下命令，teadocs可以自动帮你生成md文件。</p>\n<pre class=\"prettyprint\"><code>$ teadocs init</code></pre>\n        <h3 id=\"编译成html\">\n            <a href='#编译成html' class='header-anchor'>#</a>\n            <span>编译成html</span>\n        </h3>\n    <pre class=\"prettyprint\"><code>$ teadocs build</code></pre>"},{"context":[{"title":"安装","link":"/mydocs/install.html"}],"content":"\n        <h1 id=\"安装\">\n            <a href='#安装' class='header-anchor'>#</a>\n            <span>安装</span>\n        </h1>\n    \n        <h2 id=\"installation\">\n            <a href='#installation' class='header-anchor'>#</a>\n            <span>installation</span>\n        </h2>\n    <p>安装非常的简单，需要安装到全局中，方便随时通过shell调用。</p>\n<p>需要nodejs版本 &gt;= 8.0，npm 版本 &gt; 3.</p>\n<p>安装命令如下：</p>\n<pre class=\"prettyprint\"><code>$ npm install -g teadocs</code></pre>"},{"context":[{"title":"配置介绍","link":"javascript:void(0)"},{"title":"文档目录结构介绍","link":"/mydocs/config/structure.html"}],"content":"\n        <h1 id=\"文档目录结构介绍\">\n            <a href='#文档目录结构介绍' class='header-anchor'>#</a>\n            <span>文档目录结构介绍</span>\n        </h1>\n    <pre class=\"prettyprint\"><code>testdocs\n├─ build  #这个是编译输出的目录\n│    ├─ config\n│    │    ├─ main.html\n│    │    ├─ nav.html\n│    │    └─ structure.html\n│    ├─ custom_theme.html\n│    ├─ data.js\n│    ├─ deploy.html\n│    ├─ index.html\n│    ├─ install.html\n│    ├─ quick_start.html\n│    ├─ static\n│    │    ├─ css\n│    │    ├─ font-awesome-4.7.0\n│    │    ├─ fonts\n│    │    ├─ images\n│    │    └─ js\n│    └─ template_markdown.html\n├─ docs #这个是文档的源文件目录，也就是markdown文件目录。\n│    ├─ config\n│    │    ├─ main.md\n│    │    ├─ nav.md\n│    │    └─ structure.md\n│    ├─ custom_theme.md\n│    ├─ deploy.md\n│    ├─ index.md\n│    ├─ install.md\n│    ├─ quick_start.md\n│    └─ template_markdown.md\n├─ static # 这个地方是用于存放文档中需要用要的静态文件，例如图片等，它会自动copy到build目录下。\n|\n├─ teadocs.config.js # 这是teadocs的主配置文件\n└─ tree.html # 这是文档的菜单配置文件</code></pre>"},{"context":[{"title":"配置介绍","link":"javascript:void(0)"},{"title":"主配置文件说明","link":"/mydocs/config/main.html"}],"content":"\n        <h1 id=\"主配置文件说明\">\n            <a href='#主配置文件说明' class='header-anchor'>#</a>\n            <span>主配置文件说明</span>\n        </h1>\n    <p>菜单的配置文件是你文档根目录下面的 <code>teadocs.config.js</code>，它是一个javascript的文件。</p>\n<p>主配置文件的所有配置项都不是必填你完全可以什么也不填写，它的代码如下：</p>\n<pre class=\"prettyprint language-javascript\"><code>&#039;use strict&#039;;\nconst path = require(&#039;path&#039;)\n\nmodule.exports = {\n    doc: {\n        name: &quot;&quot;, //文档名称\n        description: &quot;&quot;, //文档的描述\n        version: &quot;&quot;, //文档的版本\n        dir: &quot;&quot;, //文档的目录\n        outDir: &quot;&quot;, //文档编译成html时输出的目录\n        staticDir: &quot;&quot; //文档所用到的静态文件的地址\n    }, \n    theme: {\n        dir: &quot;&quot;, //主题的目录，可自定义主题\n        title: &quot;&quot;, //html的title标签\n        headHtml: &quot;&quot;, //html head 的代码\n        footHtml: &quot;&quot;, //html 底部 的代码\n        isMinify: true, //是否为输出的html启用压缩\n        rootPath: &quot;/&quot; //表示根路径，如果部署在深目录下面，这个配置项必填，不然会出现找不到资源路径的错误。\n    },\n    nav: {\n        tree: &quot;./tree&quot;\n    }\n}</code></pre>\n        <h2 id=\"默认配置\">\n            <a href='#默认配置' class='header-anchor'>#</a>\n            <span>默认配置</span>\n        </h2>\n    <pre class=\"prettyprint language-javascript\"><code>module.exports = {\n    doc: {\n        name: &quot;欢迎使用Teadocs文档生成系统&quot;,\n        description: &quot;欢迎使用Teadocs文档生成系统&quot;,\n        version: &quot;0.0.1&quot;,\n        dir: &quot;./docs&quot;,\n        outDir: &quot;./build&quot;,\n        staticDir: &quot;./static&quot;\n    },\n    theme: {\n        dir: __dirname + &#039;/../themes/default&#039;,\n        title: &quot;欢迎使用Teadocs文档生成系统&quot;,\n        headHtml: `\n        &amp;lt;meta name=&quot;description&quot; content=&quot;欢迎使用Teadocs文档生成系统&quot; /&amp;gt;\n        &amp;lt;meta name=&quot;keywords&quot; content=&quot;teadocs, 文档生成器&quot; /&amp;gt;\n        `,\n        footerHtml: &quot;&quot;,\n        isMinify: false,\n        rootPath: &quot;/&quot;\n    },\n    nav: {\n        tree: &quot;&amp;lt;ul&amp;gt;&amp;lt;li&amp;gt;&amp;lt;a&amp;gt;欢迎使用Teadocs文档生成系统&amp;lt;/a&amp;gt;&amp;lt;/li&amp;gt;&amp;lt;/ul&amp;gt;&quot;\n    }\n}</code></pre>"},{"context":[{"title":"配置介绍","link":"javascript:void(0)"},{"title":"菜单配置文件说明","link":"/mydocs/config/nav.html"}],"content":"\n        <h1 id=\"菜单配置文件说明\">\n            <a href='#菜单配置文件说明' class='header-anchor'>#</a>\n            <span>菜单配置文件说明</span>\n        </h1>\n    <p>菜单的配置文件是你文档根目录下面的 <code>tree.md</code> 文件，它采用了markdown语法来进行书写。</p>\n\n        <h2 id=\"菜单结构\">\n            <a href='#菜单结构' class='header-anchor'>#</a>\n            <span>菜单结构</span>\n        </h2>\n    <p>例如，本文档的菜单结构如下：</p>\n<pre class=\"prettyprint language-markdown\"><code>- [介绍](/index)\n- [快速入门](/quick_start)\n- [安装](/install)\n- +配置介绍\n    - [文档目录结构介绍](/config/structure)\n    - [主配置文件说明](/config/main)\n    - [菜单配置文件说明](/config/nav)\n- [markdown模版](/template_markdown)\n- [自定义主题](/custom_theme)\n- [部署](/deploy)</code></pre>\n        <h3 id=\"符号介绍\">\n            <a href='#符号介绍' class='header-anchor'>#</a>\n            <span>符号介绍</span>\n        </h3>\n    <p>语法完全使用markdown里的无序列表定义语法，但是要特别注意以下几点：</p>\n<ul>\n<li><code>[]</code> 里的内容表示菜单的标题，如果不写<code>[]</code>则代表这个菜单没有链接仅作为一个菜单名称。</li>\n<li><code>()</code> 里的内容表示菜单的markdown文件的地址，<code>并且也代表了生成后的html文件url。</code></li>\n<li><code>+</code> 代表了在生成的html里默认展开这个菜单，需要注意的是，这不是markdown的语法，这是teadocs的规定，<code>+</code>一定要写在文本的前面，而不是<code>[</code>的前面。</li>\n</ul>\n"},{"context":[{"title":"markdown模版","link":"/mydocs/template_markdown.html"}],"content":"\n        <h1 id=\"markdown模版\">\n            <a href='#markdown模版' class='header-anchor'>#</a>\n            <span>markdown模版</span>\n        </h1>\n    <p>你编写的markdown文件可以使用内置的ejs模版引擎，比如我们可以轻而易举的写个循环，像这样：</p>\n<pre class=\"prettyprint language-javascript\"><code>&amp;lt; % [1,2,3,4].forEach(function () { % &amp;gt;\n- 欢迎使用Teadocs文档生成工具\n&amp;lt; % }) % &amp;gt;</code></pre><p>效果：</p>\n<ul>\n<li><p>欢迎使用Teadocs文档生成工具</p>\n</li>\n<li><p>欢迎使用Teadocs文档生成工具</p>\n</li>\n<li><p>欢迎使用Teadocs文档生成工具</p>\n</li>\n<li><p>欢迎使用Teadocs文档生成工具</p>\n</li>\n</ul>\n"},{"context":[{"title":"自定义主题","link":"/mydocs/custom_theme.html"}],"content":"\n        <h1 id=\"自定义主题\">\n            <a href='#自定义主题' class='header-anchor'>#</a>\n            <span>自定义主题</span>\n        </h1>\n    <p>你可以构建自己的主题文件，只要符合Teadocs的主题规范，具体可以自行参考默认主题。</p>\n\n        <h2 id=\"如何使用自己构建的主题？\">\n            <a href='#如何使用自己构建的主题？' class='header-anchor'>#</a>\n            <span>如何使用自己构建的主题？</span>\n        </h2>\n    <p>在 teadocs.config.js 文件的 theme.dir 配置项中指定你的自定义主题路径就可以了。</p>\n"},{"context":[{"title":"部署","link":"/mydocs/deploy.html"}],"content":"\n        <h1 id=\"部署\">\n            <a href='#部署' class='header-anchor'>#</a>\n            <span>部署</span>\n        </h1>\n    \n        <h2 id=\"上传到github\">\n            <a href='#上传到github' class='header-anchor'>#</a>\n            <span>上传到github</span>\n        </h2>\n    <p>可以你的文档源文件上传到github上，使用 .gitignore 屏蔽 ./build 目录。</p>\n\n        <h2 id=\"上传到服务器\">\n            <a href='#上传到服务器' class='header-anchor'>#</a>\n            <span>上传到服务器</span>\n        </h2>\n    <p>建议使用nginx等静态服务器软件搭建一个静态服务器进行访问即可。</p>\n"}];

    var escapeHtml = function (html) {
        let str = html;
        str = str.replace(/&/g, '&amp;');  
        str = str.replace(/</g, '&lt;');  
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');  
        return str;
    }

    var clearHtml = function(html) {
        let str = html;
        str = str.replace(/&amp;/g, ''); 
        str = str.replace(/&lt;/g, ''); 
        str = str.replace(/&gt;/g, '');
        str = str.replace(/&quot;/g, '');
        str = str.replace(/&#039;/g, '');
        return str;
    }

    var randStr = function () {
        return Math.random().toString(36).substr(2);
    };

    var findTitle = function (ele) {
        var findPrevs = function (ele) {
            var children = $(ele).parent().children();
            var prevs = [];
            var findIt = false;
            children = Array.prototype.slice.call(children);
            children.forEach(function (subEle) {
                if ($(subEle).is($(ele))) {
                    findIt = true;
                }
                if (findIt === false && $(subEle).text() != "") {
                    prevs.push(subEle);
                }
            });
            return prevs;
        };

        var findH = function (eles) {
            var _eles = Array.prototype.slice.call(eles);
            _eles.reverse();
            var title = "";
            var id = "";
            _eles.forEach(function (item) {
                if (!title) {
                    if (item.nodeName[0] === "H") {
                        title = $(item).text();
                        id = $(item).attr("id");
                    }
                }
            });
            return {
                text: title,
                id: id
            };
        };
        var prevs = findPrevs(ele);
        if (prevs.length) {
            return findH(prevs);
        }
    };

    window.searchData = function (keyword) {
        var searchResult = [];
        content.forEach(function (item, index) {
            var tempHtml = "<div id='" + randStr() + "'></div>";
            var tempEle = $(tempHtml);
            var findArray = [];
            tempEle.html(clearHtml(item.content));
            findArray = tempEle.find(":contains('" + keyword + "')");
            findArray = Array.prototype.slice.call(findArray);
            if (findArray.length) {
                findArray.forEach(function (ele) {
                    var findContent = $(ele).text();
                    findContent = findContent[0] === "<" ? $(findContent).text() : findContent;
                    findContent = escapeHtml(findContent);
                    findContent = findContent.replace(new RegExp(keyword, 'g'), "<b>" + keyword + "</b>");
                    var hObj = findTitle(ele);
                    if (hObj) {
                        searchResult.push({
                            context: item.context,
                            title: hObj.text,
                            hid: hObj.id,
                            findContent: findContent
                        });
                    }
                });
            }
        });
        return searchResult;
    };
})();