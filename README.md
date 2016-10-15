##Tips:
```
修改文件请在ts中修改，在grunt启动的情况下，会自动编译
```

###fullpage:
<https://github.com/yanhaijing/zepto.fullpage>

###frameworks :
```
express 4+，
ejs，
backbone，
zepto
fullpage
in typescript
```

###focus:
```
change  into typescript
```

###dir :

```
afb-movie
├── bin        				启动文件
├── src        				代码文件夹
├── typings    				ts释义管理器
├── views      				模板
├── gruntfile.json  	    grunt配置
├── tslink.json 			ts规则检测
└── typings.json 			typings安装文件 typings install 不用安装

```

###install:
```
npm install
```

###Run:
```
npm run grunt watch 		            //start grunt task
npm start								//start server
```

###可能会出现的问题：
```
服务用nodemon去做express的监听工具，所以nodemon可能需要全局安装，启动的时候可能会需要sudo npm start
```