/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbbe8a620eb965b14',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '51c1635a7fe8b050204ca9def4264c30',

  PROVINCE: '福建',
  CITY: '福州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '旅行者',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEQgq6scgwqvQvo9aAoVs2I0zZbI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jsf-6IrQ0vUrTMnDoW_GmbMMhWEw3K1xxSL-APVt8L4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1995', date: '08-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        // {
        //   type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-01-12' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'QZD-aLO2NMVNxPpYVXb0Q0nJx43aqhrtmy-_-E05Yjg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEQgq6scgwqvQvo9aAoVs2I0zZbI',
    }
  ],

}

module.exports = USER_CONFIG

