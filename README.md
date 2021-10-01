

# tool-api

落地页生成工具接口集合

##### 端口:8888

#### 登录注册：

注册接口：

```
路由:/users
示例：http://www.sitkin.top:8888/user
请求方式：post/json
```



| 请求参数 | 说明   | 备注     |
| -------- | ------ | -------- |
| name     | 用户名 | 不可重复 |
| password | 密码   |          |
|          |        |          |

| 返回值 | 说明           | 备注       |
| ------ | -------------- | ---------- |
| code   | 状态码         | 200为成功  |
| data   | 数据库返回信息 |            |
| status | 状态           | true为成功 |



登录接口:

```
路由:/auth/login
示例：http://www.sitkin.top:8888/auth/login
请求方式:post/json
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| name     | 用户名 |      |
| password | 密码   |      |
|          |        |      |

| 返回参数 | 说明                            | 备注       |
| -------- | ------------------------------- | ---------- |
| code     | 状态码                          | 200为成功  |
| status   | 状态                            | true为成功 |
| data     | 用户数据，返回name，id以及token |            |



#### 备案数据相关

添加备案：

```
路由:/record/add
示例：http://www.sitkin.top:8888/record/add
请求方式:post/json
```

| 请求参数 | 说明     | 备注                           |
| -------- | -------- | ------------------------------ |
| content  | 备案名称 | 例如：广州慕可生物科技有限公司 |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

更新备案：

```
路由:/record/update
示例：http://www.sitkin.top:8888/record/update
请求方式:put/json
```

| 请求参数 | 说明     | 备注 |
| -------- | -------- | ---- |
| id       | 备案id   |      |
| content  | 备案名称 |      |
|          |          |      |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

删除备案：

```
路由:/record/del
示例：http://www.sitkin.top:8888/record/del
请求方式:delete/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 备案id |      |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

备案列表:

```
路由:/record/list
示例：http://www.sitkin.top:8888/record/list
请求方式:get/query
```

| 请求参数 | 说明               | 备注 |
| -------- | ------------------ | ---- |
| name     | 备案名称，用于搜索 |      |
| page     | 第几页             |      |
| pageSize | 每页条数           |      |

| 返回参数 | 说明                                         | 备注       |
| -------- | -------------------------------------------- | ---------- |
| code     | 状态码                                       | 200为成功  |
| status   | 状态                                         | true为成功 |
| data     | count :总条数， result :备案列表（object[]） |            |

备案详情：

```
路由:/record/details
示例：http://www.sitkin.top:8888/record/details
请求方式:get/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 备案id |      |

| 返回参数 | 说明             | 备注       |
| -------- | ---------------- | ---------- |
| code     | 状态码           | 200为成功  |
| status   | 状态             | true为成功 |
| data     | result :备案详情 |            |



#### 平台数据相关

添加平台：

```
路由:/platform/create
示例：http://www.sitkin.top:8888/platform/create
请求方式:post/json
```

| 请求参数  | 说明         | 备注         |
| --------- | ------------ | ------------ |
| name      | 平台名称     | 例如：抖音   |
| type_name | 平台类型名称 | 例如：tiktok |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

更新平台：

```
路由:/platform/update
示例：http://www.sitkin.top:8888/platform/update
请求方式:put/json
```

| 请求参数  | 说明         | 备注         |
| --------- | ------------ | ------------ |
| id        | 平台id       |              |
| name      | 平台名称     | 例如：抖音   |
| type_name | 平台类型名称 | 例如：tiktok |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

删除平台：

```
路由:/platform/del
示例：http://www.sitkin.top:8888/platform/del
请求方式:delete/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 平台id |      |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

平台列表:

```
路由:/platform/list
示例：http://www.sitkin.top:8888/platform/list
请求方式:get/query
```

| 请求参数 | 说明               | 备注 |
| -------- | ------------------ | ---- |
| name     | 平台名称，用于搜索 |      |
| page     | 第几页             |      |
| pageSize | 每页条数           |      |

| 返回参数 | 说明                                         | 备注       |
| -------- | -------------------------------------------- | ---------- |
| code     | 状态码                                       | 200为成功  |
| status   | 状态                                         | true为成功 |
| data     | count :总条数， result :平台列表（object[]） |            |

备案详情：

```
路由:/platform/details
示例：http://www.sitkin.top:8888/platform/details
请求方式:get/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 平台id |      |

| 返回参数 | 说明             | 备注       |
| -------- | ---------------- | ---------- |
| code     | 状态码           | 200为成功  |
| status   | 状态             | true为成功 |
| data     | result :平台详情 |            |

#### 底图数据相关

添加底图：

```
路由:/upload/footcreate
示例：http://www.sitkin.top:8888/upload/footcreate
请求方式:post/form-data
```

| 请求参数 | 说明     | 备注                                         |
| -------- | -------- | -------------------------------------------- |
| name     | 图片名称 | 例如：套装图                                 |
| pic      | 图片文件 | 传参顺序图片必须是在最后面，否则会报参数错误 |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

更新底图：

```
路由:/upload/updatefootimage
示例：http://www.sitkin.top:8888/upload/updatefootimage
请求方式:put/form-data
```

| 请求参数 | 说明     | 备注                                         |
| -------- | -------- | -------------------------------------------- |
| id       | 底图id   |                                              |
| name     | 底图名称 | 例如：抖音                                   |
| pic      | 图片文件 | 传参顺序图片必须是在最后面，否则会报参数错误 |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

删除底图：

```
路由:/upload/delfootimg
示例：http://www.sitkin.top:8888/upload/delfootimg
请求方式:delete/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 底图id |      |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

底图列表:

```
路由:/upload/footimglist
示例：http://www.sitkin.top:8888/upload/footimglist
请求方式:get/query
```

| 请求参数 | 说明               | 备注 |
| -------- | ------------------ | ---- |
| name     | 底图名称，用于搜索 |      |
| page     | 第几页             |      |
| pageSize | 每页条数           |      |

| 返回参数 | 说明                                         | 备注       |
| -------- | -------------------------------------------- | ---------- |
| code     | 状态码                                       | 200为成功  |
| status   | 状态                                         | true为成功 |
| data     | count :总条数，  list  :底图列表（object[]） |            |

底图详情：

```
路由:/upload/footimgdetails
示例：http://www.sitkin.top:8888/upload/footimgdetails
请求方式:get/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 底图id |      |

| 返回参数 | 说明             | 备注       |
| -------- | ---------------- | ---------- |
| code     | 状态码           | 200为成功  |
| status   | 状态             | true为成功 |
| data     | result :底图详情 |            |

#### 模板数据相关

添加模板：

```
路由:/template/create
示例：http://www.sitkin.top:8888/template/create
请求方式:post/form-data
```

| 请求参数     | 说明        | 备注                     |
| ------------ | ----------- | ------------------------ |
| name         | 模板名称    | 例如：抖音-答题          |
| template_url | 预览链接    | 预览页面链接             |
| platform_id  | 平台id      |                          |
| template     | 模板ejs文件 | 一定要在参数最后一个上传 |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

更新模板：

```
路由:/template/update
示例：http://www.sitkin.top:8888/template/update
请求方式:put/form-data
```

| 请求参数     | 说明        | 备注                     |
| ------------ | ----------- | ------------------------ |
| id           | 模板id      |                          |
| name         | 模板名称    | 例如：抖音-答题          |
| template_url | 预览链接    | 预览页面链接             |
| platform_id  | 平台id      |                          |
| template     | 模板ejs文件 | 一定要在参数最后一个上传 |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

删除模板：

```
路由:/template/del
示例：http://www.sitkin.top:8888/template/del
请求方式:delete/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 模板id |      |

| 返回参数 | 说明           | 备注       |
| -------- | -------------- | ---------- |
| code     | 状态码         | 200为成功  |
| status   | 状态           | true为成功 |
| data     | 数据库返回信息 |            |

模板列表:

```
路由:/template/list
示例：http://www.sitkin.top:8888/template/list
请求方式:get/query
```

| 请求参数    | 说明                               | 备注 |
| ----------- | ---------------------------------- | ---- |
| name        | 模板名称，用于搜索                 |      |
| page        | 第几页                             |      |
| pageSize    | 每页条数                           |      |
| platform_id | 平台id，也用于搜索，优先级高于name |      |

| 返回参数 | 说明                                             | 备注       |
| -------- | ------------------------------------------------ | ---------- |
| code     | 状态码                                           | 200为成功  |
| status   | 状态                                             | true为成功 |
| data     | count :总条数，   result   :模板列表（object[]） |            |

模板详情：

```
路由:/template/details
示例：http://www.sitkin.top:8888/template/details
请求方式:get/query
```

| 请求参数 | 说明   | 备注 |
| -------- | ------ | ---- |
| id       | 模板id |      |

| 返回参数 | 说明             | 备注       |
| -------- | ---------------- | ---------- |
| code     | 状态码           | 200为成功  |
| status   | 状态             | true为成功 |
| data     | result :模板详情 |            |

