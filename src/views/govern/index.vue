<template>
    <el-container class="loan-work-queue" grid-list-xl fluid>
        <el-row style="height: 771px">
            <el-col span="20">
                <div class="super-flow-demo1">
                    <div class="node-container">
                        <span
                            v-for="(item, index) in nodeItemList"
                            :key="index"
                            class="node-item"
                            @mousedown="
                                evt => nodeItemMouseDown(evt, item.value)
                            "
                        >
                            {{ item.label }}
                        </span>
                    </div>
                    <div
                        ref="flowContainer"
                        class="flow-container"
                        @click="flowNodeClick"
                    >
                        <super-flow
                            ref="superFlow"
                            :graph-menu="graphMenu"
                            :node-menu="nodeMenu"
                            :link-menu="linkMenu"
                            :link-base-style="linkBaseStyle"
                            :link-style="linkStyle"
                            :link-desc="linkDesc"
                            :node-list="nodeList"
                            :link-list="linkList"
                            @toJSON="toJSON"
                        >
                            <template #node="{ meta }">
                                <div
                                    :class="
                                        meta.type
                                            ? `flow-node-${meta.type}`
                                            : ''
                                    "
                                    class="flow-node ellipsis"
                                    @mouseup="nodeMouseUp"
                                    @click="nodeClick"
                                >
                                    <div
                                        class="node-content"
                                        :title="meta.name"
                                    >
                                        {{ meta.name }}
                                    </div>
                                </div>
                            </template>
                        </super-flow>
                        <el-button
                            text
                            color="primary"
                            class="saveIcon"
                            @click="saveFlow"
                        >
                            SAVE
                        </el-button>
                    </div>
                </div>
            </el-col>
            <el-col span="4">
                <div>
                    <el-form
                        ref="linkBaseStyle"
                        class="link-base-style-form"
                        label-width="100px"
                        :model="linkBaseStyle"
                        @submit.native.prevent
                    >
                        <h4 class="style-title">Link style customization</h4>
                        <el-row>
                            <el-col cols="12">
                                <el-form-item label="color">
                                    <el-color-picker
                                        v-model="linkBaseStyle.color"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="hover">
                                    <el-color-picker
                                        v-model="linkBaseStyle.hover"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="textColor">
                                    <el-color-picker
                                        v-model="linkBaseStyle.textColor"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="textHover">
                                    <el-color-picker
                                        v-model="linkBaseStyle.textHover"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="font">
                                    <el-select
                                        v-model="linkBaseStyle.font"
                                        size="medium"
                                    >
                                        <el-option
                                            v-for="item in fontList"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="background">
                                    <el-color-picker
                                        v-model="linkBaseStyle.background"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="dotted">
                                    <el-switch
                                        v-model="linkBaseStyle.dotted"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col cols="12">
                                <el-form-item label="lineDash">
                                    <el-select
                                        v-model="linkBaseStyle.lineDash[0]"
                                        size="medium"
                                        style="width: 80px"
                                    >
                                        <el-option
                                            v-for="item in [
                                                1, 2, 3, 4, 5, 6, 7, 8
                                            ]"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        />
                                    </el-select>
                                    <el-select
                                        v-model="linkBaseStyle.lineDash[1]"
                                        size="medium"
                                        style="width: 80px"
                                    >
                                        <el-option
                                            v-for="item in [
                                                1, 2, 3, 4, 5, 6, 7, 8
                                            ]"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </el-col>
        </el-row>

        <el-dialog
            :title="drawerConf.title"
            :visible.sync="drawerConf.visible"
            :close-on-click-modal="false"
            width="500px"
        >
            <el-form
                v-show="drawerConf.type === drawerType.node"
                ref="nodeSetting"
                :model="nodeSetting"
                @keyup.native.enter="settingSubmit"
                @submit.native.prevent
            >
                <el-form-item label="node name" prop="name">
                    <el-input
                        v-model="nodeSetting.name"
                        placeholder="Please enter the node name"
                        maxlength="30"
                    />
                </el-form-item>
                <el-form-item label="node description" prop="desc">
                    <el-input
                        v-model="nodeSetting.desc"
                        placeholder="Please enter a node description"
                        maxlength="30"
                    />
                </el-form-item>
            </el-form>
            <el-form
                v-show="drawerConf.type === drawerType.link"
                ref="linkSetting"
                :model="linkSetting"
                @keyup.native.enter="settingSubmit"
                @submit.native.prevent
            >
                <el-form-item label="link description" prop="desc">
                    <el-input
                        v-model="linkSetting.desc"
                        placeholder="Please enter a link description"
                    />
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="drawerConf.cancel"> CANCEL </el-button>
                <el-button type="primary" @click="settingSubmit">
                    OK
                </el-button>
            </span>
        </el-dialog>
    </el-container>
</template>

<script>
import SuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'

const drawerType = {
    node: 0,
    link: 1
}

export default {
    components: {
        SuperFlow
    },
    data() {
        return {
            nodeList: [
                {
                    id: 1,
                    coordinate: [400, 120],
                    width: 120,
                    height: 40,
                    meta: {
                        label: 'start',
                        name: 'start',
                        type: 'start'
                    }
                },
                {
                    id: 2,
                    coordinate: [360, 235],
                    width: 200,
                    height: 40,
                    meta: {
                        label: 'process',
                        name: 'process',
                        type: 'process'
                    }
                },
                {
                    id: 3,
                    coordinate: [400, 360],
                    width: 120,
                    height: 40,
                    meta: {
                        label: 'end',
                        name: 'end',
                        type: 'end'
                    }
                }
            ],
            linkList: [
                {
                    id: 4,
                    startAt: [60, 40],
                    startId: 1,
                    endAt: [100, 0],
                    endId: 2,
                    meta: null
                },
                {
                    id: 5,
                    startAt: [100, 40],
                    startId: 2,
                    endAt: [60, 0],
                    endId: 3,
                    meta: null
                }
            ],
            drawerType,
            drawerConf: {
                title: '',
                visible: false,
                type: null,
                info: null,
                open: (type, info) => {
                    const conf = this.drawerConf
                    conf.visible = true
                    conf.type = type
                    conf.info = info
                    if (conf.type === drawerType.node) {
                        conf.title = 'NODE'
                        if (this.$refs.nodeSetting) {
                            this.$refs.nodeSetting.resetFields()
                        }
                        this.$set(this.nodeSetting, 'name', info.meta.name)
                        this.$set(this.nodeSetting, 'desc', info.meta.desc)
                    } else {
                        conf.title = 'LINK'
                        if (this.$refs.linkSetting) {
                            this.$refs.linkSetting.resetFields()
                        }
                        this.$set(
                            this.linkSetting,
                            'desc',
                            info.meta ? info.meta.desc : ''
                        )
                    }
                },
                cancel: () => {
                    this.drawerConf.visible = false
                    if (this.drawerConf.type === drawerType.node) {
                        this.$refs.nodeSetting.clearValidate()
                    } else {
                        this.$refs.linkSetting.clearValidate()
                    }
                }
            },
            linkSetting: {
                desc: ''
            },
            nodeSetting: {
                name: '',
                desc: ''
            },

            dragConf: {
                isDown: false,
                isMove: false,
                offsetTop: 0,
                offsetLeft: 0,
                clientX: 0,
                clientY: 0,
                ele: null,
                info: null
            },
            nodeItemList: [
                {
                    label: 'start',
                    value: () => ({
                        width: 120,
                        height: 40,
                        meta: {
                            label: 'start',
                            name: 'start',
                            type: 'start'
                        }
                    })
                },
                {
                    label: 'process',
                    value: () => ({
                        width: 200,
                        height: 40,
                        meta: {
                            label: 'process',
                            name: 'process',
                            type: 'process'
                        }
                    })
                },
                {
                    label: 'if',
                    value: () => ({
                        width: 168,
                        height: 168,
                        meta: {
                            label: 'if',
                            name: 'if',
                            type: 'if'
                        }
                    })
                },
                {
                    label: 'end',
                    value: () => ({
                        width: 120,
                        height: 40,
                        meta: {
                            label: 'end',
                            name: 'end',
                            type: 'end'
                        }
                    })
                }
            ],
            graphMenu: [
                [
                    {
                        // 选项 label
                        label: 'start',
                        // 选项是否禁用
                        disable(graph) {
                            return !!graph.nodeList.find(
                                node => node.meta.label === '1'
                            )
                        },
                        // 选项选中后回调函数
                        selected(graph, coordinate) {
                            graph.addNode({
                                width: 120,
                                height: 40,
                                coordinate,
                                meta: {
                                    label: 'start',
                                    name: 'start',
                                    type: 'start'
                                }
                            })
                        }
                    },
                    {
                        label: 'process',
                        selected(graph, coordinate) {
                            graph.addNode({
                                width: 200,
                                height: 40,
                                coordinate,
                                meta: {
                                    label: 'process',
                                    name: 'process',
                                    type: 'process'
                                }
                            })
                        }
                    },
                    {
                        label: 'if',
                        selected(graph, coordinate) {
                            graph.addNode({
                                width: 168,
                                height: 168,
                                coordinate,
                                meta: {
                                    label: 'if',
                                    name: 'if',
                                    type: 'if'
                                }
                            })
                        }
                    }
                ],
                [
                    {
                        label: 'end',
                        selected(graph, coordinate) {
                            graph.addNode({
                                width: 120,
                                height: 40,
                                coordinate,
                                meta: {
                                    label: 'end',
                                    name: 'end',
                                    type: 'end'
                                }
                            })
                        }
                    }
                ],
                [
                    {
                        label: 'select all',
                        selected: graph => {
                            graph.selectAll()
                        }
                    }
                ]
            ],
            nodeMenu: [
                [
                    {
                        label: 'delete',
                        selected: node => {
                            node.remove()
                        }
                    },
                    {
                        label: 'edit',
                        selected: node => {
                            this.drawerConf.open(drawerType.node, node)
                        }
                    }
                ]
            ],
            linkMenu: [
                [
                    {
                        label: 'delete',
                        selected: link => {
                            link.remove()
                        }
                    },
                    {
                        label: 'edit',
                        selected: link => {
                            this.drawerConf.open(drawerType.link, link)
                        }
                    }
                ]
            ],

            linkBaseStyle: {
                color: '#666666', // line 颜色
                hover: '#FF0000', // line hover 的颜色
                textColor: '#666666', // line 描述文字颜色
                textHover: '#FF0000', // line 描述文字 hover 颜色
                font: '14px Arial', // line 描述文字 字体设置 参考 canvas font
                dotted: false, // 是否是虚线
                lineDash: [4, 4], // 虚线时生效，虚线长度和间隔长度
                background: 'rgba(255,255,255,0.6)' // 描述文字背景色
            },
            fontList: ['14px Arial', 'italic small-caps bold 12px arial']
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.docMousemove)
        document.addEventListener('mouseup', this.docMouseup)
        this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('mousemove', this.docMousemove)
            document.removeEventListener('mouseup', this.docMouseup)
        })
    },
    methods: {
        flowNodeClick() {
            // console.log(this.$refs.superFlow.graph)
            // const data = this.$refs.superFlow.toJSON()
            // console.log(data)
        },
        toJSON(data) {
            console.log(data)
        },
        saveFlow() {
            this.nodeList = this.$refs.superFlow.toJSON().nodeList
            this.linkList = this.$refs.superFlow.toJSON().linkList
        },
        linkStyle(link) {
            if (link.meta && link.meta.desc === '1') {
                return {
                    color: 'red',
                    hover: '#FF00FF',
                    dotted: true
                }
            } else {
                return {}
            }
        },
        linkDesc(link) {
            return link.meta ? link.meta.desc : ''
        },
        settingSubmit() {
            const conf = this.drawerConf
            if (this.drawerConf.type === drawerType.node) {
                if (!conf.info.meta) {
                    conf.info.meta = {}
                }
                Object.keys(this.nodeSetting).forEach(key => {
                    this.$set(conf.info.meta, key, this.nodeSetting[key])
                })
                this.$refs.nodeSetting.resetFields()
            } else {
                if (!conf.info.meta) {
                    conf.info.meta = {}
                }
                Object.keys(this.linkSetting).forEach(key => {
                    this.$set(conf.info.meta, key, this.linkSetting[key])
                })
                this.$refs.linkSetting.resetFields()
            }
            conf.visible = false
        },
        nodeMouseUp(evt) {
            evt.preventDefault()
        },
        nodeClick() {
            // console.log(arguments)
        },
        docMousemove({ clientX, clientY }) {
            const conf = this.dragConf
            if (conf.isMove) {
                conf.ele.style.top = clientY - conf.offsetTop + 'px'
                conf.ele.style.left = clientX - conf.offsetLeft + 'px'
            } else if (conf.isDown) {
                // 鼠标移动量大于 5 时 移动状态生效
                conf.isMove =
                    Math.abs(clientX - conf.clientX) > 5 ||
                    Math.abs(clientY - conf.clientY) > 5
            }
        },
        docMouseup({ clientX, clientY }) {
            const conf = this.dragConf
            conf.isDown = false

            if (conf.isMove) {
                const { top, right, bottom, left } =
                    this.$refs.flowContainer.getBoundingClientRect()

                // 判断鼠标是否进入 flow container
                if (
                    clientX > left &&
                    clientX < right &&
                    clientY > top &&
                    clientY < bottom
                ) {
                    // 获取拖动元素左上角相对 super flow 区域原点坐标
                    const coordinate = this.$refs.superFlow.getMouseCoordinate(
                        clientX - conf.offsetLeft,
                        clientY - conf.offsetTop
                    )
                    // 添加节点
                    this.$refs.superFlow.addNode({
                        coordinate,
                        ...conf.info
                    })
                }
                conf.isMove = false
            }
            if (conf.ele) {
                conf.ele.remove()
                conf.ele = null
            }
        },
        nodeItemMouseDown(evt, infoFun) {
            const { clientX, clientY, currentTarget } = evt

            const { top, left } = evt.currentTarget.getBoundingClientRect()

            const conf = this.dragConf
            const ele = currentTarget.cloneNode(true)

            Object.assign(this.dragConf, {
                offsetLeft: clientX - left,
                offsetTop: clientY - top,
                clientX: clientX,
                clientY: clientY,
                info: infoFun(),
                ele,
                isDown: true
            })

            ele.style.position = 'fixed'
            ele.style.margin = '0'
            ele.style.top = clientY - conf.offsetTop + 'px'
            ele.style.left = clientX - conf.offsetLeft + 'px'

            this.$el.appendChild(this.dragConf.ele)
        }
    }
}
</script>

<style lang="scss" scoped>
.loan-work-queue {
    overflow: hidden;
    padding: 0;
    width: 100%;
    height: calc(100vh - 166px);
    color: #b4b4b4;
    background: #fff;
}

.style-title {
    margin-bottom: 20px;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
}

.link-base-style-form {
    .el-form-item {
        margin-bottom: 12px;
    }

    padding-top: 30px;

    // border-bottom  : 1px solid #DCDCDC;
}

.super-flow-demo1 {
    margin-top: 20px;
    width: 100%;
    height: 732px;
    background-color: #f5f5f5;

    > .node-container {
        float: left;
        width: 200px;
        height: 100%;
        text-align: center;
        background-color: #fff;
    }

    > .flow-container {
        position: relative;
        float: left;
        overflow: hidden;
        width: calc(100% - 200px);
        height: 100%;
    }

    .saveIcon {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    .super-flow__node {
        .flow-node {
            padding: 0 6px;
            width: 100%;
            height: 100%;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            box-sizing: border-box;
            line-height: 40px;

            .node-content {
                overflow: hidden;
                padding-left: 3%;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    /* 开始节点样式 */
    .ellipsis.flow-node-start {
        border: 1px solid #b4b4b4;
        border-radius: 10px;

        // background: #55ABFC;
        background: #6bc76a;
    }

    /* 流程节点样式 */
    .ellipsis.flow-node-process {
        position: relative;
        border: 1px solid #b4b4b4;

        // background: #30B95C;
        background: #b6c6e7;
    }

    /* 条件节点样式 */
    .ellipsis.flow-node-if {
        position: relative;
        top: 24px;
        left: 24px;
        border: 1px solid #b4b4b4;
        width: 120px;
        height: 120px;

        // background: #BC1D16;
        background: #b6e3e7;
        transform: rotateZ(45deg); //倾斜
        .node-content {
            position: absolute;
            top: 50%;
            left: 20px;
            width: 100%;
            transform: rotateZ(-45deg) translateY(-75%);
        }
    }

    /* 结束节点样式 */
    .ellipsis.flow-node-end {
        border: 1px solid #b4b4b4;
        border-radius: 10px;

        // background: #000;
        background: #299999;
    }
}

.node-item {
    z-index: 6;
    display: inline-block;
    margin-top: 20px;
    width: 120px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 30%);
    line-height: 30px;
    cursor: pointer;
    user-select: none;

    &:hover {
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 40%);
    }
}
</style>

<style>
.link-base-style-form .el-form-item__label {
    margin-left: 20px;
    text-align: left;
}

.link-base-style-form {
    border: none;
}

.super-flow-demo1 .super-flow__node {
    border: none;
    background: none;
    box-shadow: none;
}
</style>
