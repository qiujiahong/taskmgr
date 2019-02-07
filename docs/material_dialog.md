# material对话框

* 对话框很特殊，需要在模块中的entryComponents中声明。

* 传递数据： const diaglogRef = diaglog.open(YourDiaglog, {data: 'your data'})  ,``这一段代码在调用者中写``。

* 接收数据: constructor(@Inject(MD_DIALOG_DATA) public data: any){}  ,``在diaglog的构造函数传入``

* 弹出对话框需要在模块中entryComponents中声明。

