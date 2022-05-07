// /*
//  * @Description: 点云比对api
//  * @Author: gy
//  * @Date: 2022-04-28 15:48:20
//  * @LastEditors: gy
//  * @LastEditTime: 2022-04-29 16:11:47
//  */
// import {
//     getByParamsAndResponseType,
//     getByParams,
//     postByParams,
//     postByJson,
//     postByFormData,
//     postByFormDataFile,
//     deleteByParams,
//     deleteByJson
// } from '../../httpRequest'

// class checkAccepter {

//     /** 点云比对 **/
//     // 获取点云数据列表
//     findAgPointCloud(params) {
//         return getByParams(
//             '/agsupport-rest/agsupport/agPointCloud/findAgPointCloud',
//             params
//         )
//     }
//     // 根据项目id获取单体列表
//     getUnitList(params) {
//         return getByParams(
//             '/agsupport-rest/agsupport/projectInfo/getUnitList',
//             params
//         )
//     }
//     // 查询楼层列表
//     getFloorByMonoId(params) {
//         return getByParams(
//             '/agsupport-rest/agsupport/projectInfo/getFloorByMonoId',
//             params
//         )
//     }
//     // 查询楼层和构件类型变化时查房间列表
//     getRoomInfo(params) {
//         return getByParams(
//             '/agsupport-rest/agsupport/projectInfo/getRoomInfo',
//             params
//         )
//     }
//     // 上传文件
//     insertAgPointCloud(params) {
//         return postByFormDataFile(
//             '/agsupport-rest/agsupport/agPointCloud/insertAgPointCloud',
//             params
//         )
//     }
//     // 获取建筑模型地址
//     getAllModelList(params) {
//         return getByParams(
//             '/agsupport-rest/agsupport/projectInfo/getAllModelList',
//             params
//         )
//     }
//     // 删除点云数据
//     delAgPointCloud(params) {
//         return postByFormDataFile(
//             '/agsupport-rest/agsupport/agPointCloud/delAgPointCloud?pointcloudid=' +
//                 params.pointcloudid
//         )
//     }
// }

// export default new checkAccepter()
