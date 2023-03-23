import COS from 'cos-js-sdk-v5'

// SECRETID 和 SECRETKEY 请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
let cos = new COS({
    SecretId: '',
    SecretKey: ''
});

cos.getBucket({
    Bucket: '', /* 填入您自己的存储桶，必须字段 */
    Region: '',  /* 存储桶所在地域，例如ap-beijing，必须字段 */
    Prefix: '',           /* Prefix表示列出的object的key以prefix开始，非必须 */
}, function (err, data) {
    console.log(err || data.Contents);
});

export default cos