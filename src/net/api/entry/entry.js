/*
 * @Author: zhangjiarun
 * @Date: 2022-05-13 10:00:51
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-13 13:52:22
 * @Description: 文件头的一些描述
 */
import { getByParams } from '../../httpRequest'

class entry {
    getSystems(params) {
        return getByParams(
            '/smart-community-rest/common/application/list?loginName=' +
                params.loginName
        )
    }
}

export default new entry()
