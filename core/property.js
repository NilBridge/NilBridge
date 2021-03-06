/*
 *【使用前必读】
 * 这里是 NilBridge 的重要细节配置文件，可以修改许多核心功能与细节功能；
 * 若您不理解某些配置的意思，请切勿随意改动，以下默认配置均为测试后的最佳配置，
 * 但是若您熟悉这些细节，您可以修改绝大部分设置，需要重启生效。
 * 
 * 
 *【无计算机语言基础者请阅读】
 * 文本值，双引号之间是文本描述（字符串），类似于 "UTF-8" ，"Hello" 等等；
 * 真假值, true 代表准许 false 代表禁止；
 * 数字值，直接书写即可,无需双引号，列如 1,2,3,5.565,20000,5555 等；
 * 注释，纯属用来看的，毫无作用 // 代表单行注释；
 * 
 * 请放心，这不是要你书写计算机语言，而是进行十分简单的编辑；
 * 当然你可以选择不改动此文件。
 * 
 * 
 * 项目尽可能在 UTF8 编码环境中运行。
 * 
 * 【配置开始，谨慎修改】
*/

// 网页面板用户名
NIL.CONFIG.PANEL.USER = "ROOT";

// 网页面板密码
NIL.CONFIG.PANEL.PWD = "114514";

// 网页面板端口
NIL.CONFIG.PANEL.PORT = 3390;

// 机器人的账号
NIL.CONFIG.QQ = 114514

// 是否使用扫码登录
// 可填： true/false
NIL.CONFIG.LOGIN_WITH_QRCODE = true


// 机器人登录协议
// 1 手机
// 2 pad
// 3 手表
// 4 MacOS
// 5 ipad
NIL.CONFIG.LOGIN_PROTOCOL = 3

// 机器人登录密码
// 如果使用扫码登录可以忽略此项
// 可以直接填密码，也可以填写密码的md5值
NIL.CONFIG.PASSWORD = '114514'

// 全局管理员，可以在群聊中执行命令
// 示例 [1111] 或者 [111,222]
NIL.CONFIG.ADMIN = []

// 主要群聊
// 用来执行命令和获取白名单
NIL.CONFIG.GROUP_MAIN = 123456789

// 聊天群
// 用来与服务器聊天
// 与主群可以是同一个
NIL.CONFIG.GROUP_CHAT = 123456789

// 是否在群员绑定xboxid后修改群昵称
// 默认开启
NIL.CONFIG.AUTO_RENAME_AFTER_BIND = true

// 是否开启聊天转发
NIL.CONFIG.QQ_CHAT_SERVER = true