## 我与《Node入门一本全面地Node.js教程》的故事
### 我对node.js的疑惑
从第一次接触node.js以来，我花了一年时间，看了不下二十种/本关于node.js的教程、书籍。但是，始终没有一份教程或书籍，能够完整地告诉我node.js最重要的作用之一——作为服务器端JavaScript运行环境，怎么样通过node.js实现一个完整的服务器？在node.js中，我应该怎样分解入口(index.js)、服务器、路由等不同的模块？我应该怎样正确地处理客户的请求并返回响应？直到有一天，我见到了这一本仅仅41页的书籍。他解答了一年以来在使用node.js搭建服务器上的疑惑。

### 这本书有什么优点？
这本书从一个最基础的"hello world"式的index.js开始，逐步拆解server（服务器）, router（路由）, requestHandler（请求处理方式映射）等模块，构建了一个具有初步工程水平的服务器。这几个程序，通过原生的node.js而非框架，将客户端和服务器的数据传输过程、服务器模块解耦、功能实现等问题解释得一清二楚，难能可贵。
诚然，这本书还有很多不足之处，例如操作数据库、单元测试等，以及node.js底层的问题（这一部分强烈推荐[《深入浅出Node.js》](https://book.douban.com/subject/25768396/)，node.js的经典书籍）。但它真正将开启了我的node.js服务器应用之门。这个repository里是这本书中演化的最后一个版本的代码，但演化的过程才是这本书的精华所在。
**拜读过书，实乃吾幸**。
