<template>
  <a-modal
    v-model="visible"
    :destroyOnClose="true"
    :width="900"
    :height="600"
    :visible="visible"
    :title="getTitle(initvalue)"
  >
    <div class="main">
      <template>
        <div>
          <a-row type="flex">
            <!-- 模板名称 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>模板名称:</span>
              </a-col>
              <a-col :span="18" style="padding-left: 10px;">
                <span> {{ initvalue.name }} </span>
              </a-col>
            </a-col>
            <!-- 模板类型 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>模板类型:</span>
              </a-col>
              <a-col :span="18"  style="padding-left: 10px;">
                <span> {{ initvalue.type }} </span>
              </a-col>
            </a-col>
            <!-- 创建者 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>创建者:</span>
              </a-col>
              <a-col :span="18" style="padding-left: 10px;">
                <span> {{ initvalue.creator }} </span>
              </a-col>
            </a-col>
            <!-- 创建时间 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>创建时间:</span>
              </a-col>
              <a-col :span="18" style="padding-left: 10px;">
                <span> {{ gmtDateFormat(initvalue.gmtCreated) }} </span>
              </a-col>
            </a-col>
            <!-- 更新者 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>更新者:</span>
              </a-col>
              <a-col :span="18" style="padding-left: 10px;">
                <span> {{ initvalue.modifier }} </span>
              </a-col>
            </a-col>
            <!-- 更新时间 -->
            <a-col :span="12" style="margin-top: 5px">
              <a-col :span="6" align="right">
                <span>更新时间:</span>
              </a-col>
              <a-col :span="18" style="padding-left: 10px;">
                <span> {{ gmtDateFormat(initvalue.gmtModified) }} </span>
              </a-col>
            </a-col>
            <!-- 模板内容 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>模板内容:</span>
              </a-col>
              <a-col :span="21"  style="padding-left: 10px;">
                <a-textarea
                  v-model="initvalue.content"
                            style="background-color: #e6e6e6; color: black;border: 0px;"
                            disabled
                            rows="20"
                            cols="20"
                            placeholder="请输入模板内容" />
              </a-col>
            </a-col>
            <!-- 备注 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>备注:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.remark }} </span>
              </a-col>
            </a-col>
          <!-- row end -->
          </a-row>
        </div>
      </template>
    </div>
    <template slot="footer">
      <a-button @click="handleClose()"> 返回 </a-button>
    </template>
  </a-modal>
</template>
<script>

import moment from 'moment'

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 }
}
export default {
  methods: {
    getTitle (initvalue) {
      return <span> 详情 <span style="color: red;font-size: 12px;"> * 注 : 当前只兼容 beetl 模板语法 </span></span>
    },
    show () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    },
    gmtDateFormat (text) {
      return moment(text).format('yyyy-MM-DD HH:mm:ss')
    }
  },
  props: {
    initvalue: {
      type: Object, // 类型
      default: null // 默认值
    }
  },
  data () {
    return {
      visible: false,
      formItemLayout
    }
  }
}
</script>
