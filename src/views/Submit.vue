<template>
    <el-form>
        <el-form-item>
            <el-upload
            :action='actionUrl'
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="handleSuccesfulUpload"
            :multiple="false"
            :limit="1"
            accept="image/gif, image/jpeg, image/png"
            >
                <i class="el-icon-plus"></i>
            </el-upload>
            <div>jpeg/png/gif files supported. File size limit 5mb.</div>
            <el-dialog center v-model="dialogVisible">
                <image-card :src="dialogImageUrl" />
            </el-dialog>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import config from '../config';
import ImageCard from '../components/ImageCard.vue'
import { ElForm, ElFormItem, ElUpload, ElButton, ElDialog } from 'element-plus'

export default {
  name: 'Submit',
  components: {
      ElForm,
      ElFormItem,
      ElUpload,
      ElButton,
      ElDialog,
      ImageCard,
  },
  data: () => ({
      dialogImageUrl: '',
      dialogVisible: false,
      image: undefined,
      actionUrl: `${config.origin}/image`
  }),
  methods: {
      handlePictureCardPreview(file) {
          this.dialogImageUrl = file.response.rows[0].location; 
          this.dialogVisible = true
      },
      handleSuccesfulUpload(response) {
          this.image = response.rows[0].id;
          console.log(this.image);
      },
      onSubmit() {
        fetch(`${config.origin}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: this.image
            })
        })
            .then(async response => {
                console.log(await response.json());
            });
      }
  }
}
</script>

<style scoped>
</style>