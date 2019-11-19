http状态码
1 消息
▪ 100 Continue
▪ 101 Switching Protocols
▪ 102 Processing
2 成功
▪ 200 OK
▪ 201 Created
▪ 202 Accepted
▪ 203 Non-Authoritative Information
▪ 204 No Content
▪ 205 Reset Content
▪ 206 Partial Content
▪ 207 Multi-Status
3 重定向
▪ 300 Multiple Choices
▪ 301 Moved Permanently
▪ 302 Move temporarily
▪ 303 See Other
▪ 304 Not Modified
▪ 305 Use Proxy
▪ 306 Switch Proxy
▪ 307 Temporary Redirect
4 请求错误
▪ 400 Bad Request
▪ 401 Unauthorized
▪ 402 Payment Required
▪ 403 Forbidden
▪ 404 Not Found
▪ 405 Method Not Allowed
▪ 406 Not Acceptable
▪ 407 Proxy Authentication Required
▪ 408 Request Timeout
▪ 409 Conflict
▪ 410 Gone
▪ 411 Length Required
▪ 412 Precondition Failed
▪ 413 Request Entity Too Large
▪ 414 Request-URI Too Long
▪ 415 Unsupported Media Type
▪ 416 Requested Range Not Satisfiable
▪ 417 Expectation Failed
▪ 421 too many connections
▪ 422 Unprocessable Entity
▪ 423 Locked
▪ 424 Failed Dependency
▪ 425 Unordered Collection
▪ 426 Upgrade Required
▪ 449 Retry With
▪ 451Unavailable For Legal Reasons
5 服务器错误
▪ 500 Internal Server Error
▪ 501 Not Implemented
▪ 502 Bad Gateway
▪ 503 Service Unavailable
▪ 504 Gateway Timeout
▪ 505 HTTP Version Not Supported
▪ 506 Variant Also Negotiates
▪ 507 Insufficient Storage
▪ 509 Bandwidth Limit Exceeded
▪ 510 Not Extended
▪ 600 Unparseable Response Headers

消息
这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于 HTTP/1.0 协议中没有定义任何 1xx 状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送 1xx 响应。

成功
这一类型的状态码，代表请求已成功被服务器接收、理解、并接受

重定向
这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。
当且仅当后续的请求所使用的方法是 GET 或者 HEAD 时，用户浏览器才可以在没有用户介入的情况下自动提交所需要的后续请求。客户端应当自动监测无限循环重定向（例如：A->A，或者A->B->C->A），因为这会导致服务器和客户端大量不必要的资源消耗。按照 HTTP/1.0 版规范的建议，浏览器不应自动访问超过5次的重定向。

请求错误
这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个 HEAD 请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。
如果错误发生时客户端正在传送数据，那么使用TCP的服务器实现应当仔细确保在关闭客户端与服务器之间的连接之前，客户端已经收到了包含错误信息的数据包。如果客户端在收到错误信息后继续向服务器发送数据，服务器的TCP栈将向客户端发送一个重置数据包，以清除该客户端所有还未识别的输入缓冲，以免这些数据被服务器上的应用程序读取并干扰后者。

服务器错误
这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个HEAD 请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。
这些状态码适用于任何响应方法。