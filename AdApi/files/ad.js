/**
 * @api {get} /v0/wumao/{PositionCode} 获取广告详情
 * @apiVersion 0.1.0
 * @apiName GetAdvertDetail
 * @apiGroup Advert

 * @apiSuccess {String} message 返回消息
 * @apiSuccess {Number} status 处理状态 0为成功， 非0为失败
 * @apiSuccess {Object} data 返回数据 
 * @apiSuccess {String} data.title 广告标题 最长512个字符
 * @apiSuccess {Number} data.display 广告图片展示方式 LOV：0=单一图片，1=多图轮询；
 * @apiSuccess {Number} data.width 广告位大小：宽度px
 * @apiSuccess {Number} data.height 广告位大小：高度px
 * @apiSuccess {Object[]} data.items
 * @apiSuccess {String} data.items.link 广告链接
 * @apiSuccess {String} data.items.image 广告图片
 */

 /**
 * @api {get} /v0/wumao/{AccountId}/{PositionCode} 获取广告详情
 * @apiVersion 0.1.0
 * @apiName GetAdvertDetail
 * @apiGroup Advert

 * @apiSuccess {String} message 返回消息
 * @apiSuccess {Number} status 处理状态 0为成功， 非0为失败
 * @apiSuccess {Object} data 返回数据 
 * @apiSuccess {String} data.title 广告标题 最长512个字符
 * @apiSuccess {Number} data.display 广告图片展示方式 LOV：0=单一图片，1=多图轮询；
 * @apiSuccess {Number} data.width 广告位大小：宽度px
 * @apiSuccess {Number} data.height 广告位大小：高度px
 * @apiSuccess {Object[]} data.items
 * @apiSuccess {String} data.items.link 广告链接
 * @apiSuccess {String} data.items.image 广告图片
 */