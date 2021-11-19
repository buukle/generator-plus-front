<template>
  <a-modal
    v-model="visible"
    :destroyOnClose="true"
    :width="900"
    :height="600"
    :visible="visible"
    :title="'详情'"
  >
    <div class="main">
      <template>
        <div>
          <a-row type="flex">
            <!-- 连接名称 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>连接名称:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.name }} </span>
              </a-col>
            </a-col>
            <!-- url -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>url:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.url }} </span>
              </a-col>
            </a-col>
            <!-- username -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>username:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.username }} </span>
              </a-col>
            </a-col>
            <!-- password -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>password:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.password }} </span>
              </a-col>
            </a-col>
            <!-- 创建者 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>创建者:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.creator }} </span>
              </a-col>
            </a-col>
            <!-- 创建时间 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>创建时间:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ gmtDateFormat(initvalue.gmtCreated) }} </span>
              </a-col>
            </a-col>
            <!-- 更新者 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>更新者:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ initvalue.modifier }} </span>
              </a-col>
            </a-col>
            <!-- 更新时间 -->
            <a-col :span="24" style="margin-top: 5px">
              <a-col :span="3" align="right">
                <span>更新时间:</span>
              </a-col>
              <a-col :span="21" style="padding-left: 10px;">
                <span> {{ gmtDateFormat(initvalue.gmtModified) }} </span>
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
