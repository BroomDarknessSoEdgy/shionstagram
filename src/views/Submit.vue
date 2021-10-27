<template>
    <main>
        <el-row justify="center">
            <el-col span="12">
                <el-form label-width="120px">
                    <el-form-item>
                        <h2>{{ $t("submit.message_form_title") }}</h2>
                    </el-form-item> 
                    <el-form-item :label="$t('submit.name')">
                        <el-input placeholder="" v-model="form.name"></el-input>
                        <div>Instructions...</div>
                    </el-form-item> 
                    <el-form-item :label="$t('submit.twitter_id')">
                        <el-input placeholder="" v-model="form.twitter"></el-input>
                        <div>Instructions..</div>
                    </el-form-item>
                    <el-form-item :label="$t('submit.text_message')">
                        <el-input
                            v-model="form.message"
                            :rows="4"
                            type="textarea"
                            placeholder=""
                        />
                    <div>Instructions...</div>
                    </el-form-item>
                    <el-form-item :label="$t('submit.image')">
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
                        <div>{{ $t("submit.image_submit_instructions") }}</div>
                        <el-dialog center v-model="dialogVisible">
                            <image-card :src="dialogImageUrl" />
                        </el-dialog>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="onSubmit">{{ $t("submit.submit") }}</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </main>
</template>

<script>
import config from '../config';
import ImageCard from '../components/ImageCard.vue'
import { ElForm, ElFormItem, ElUpload, ElButton, ElInput, ElDialog, ElRow, ElCol } from 'element-plus'

export default {
  name: 'Submit',
  components: {
      ElForm,
      ElFormItem,
      ElUpload,
      ElButton,
      ElInput,
      ElDialog,
      ElRow,
      ElCol,
      ImageCard,
  },
  data: () => ({
      dialogImageUrl: '',
      dialogVisible: false,
      image: undefined,
      actionUrl: `${config.origin}/image`,
      form: {
          name: '',

      }
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
main {
	position: relative;
	width: 100%;
	padding: 3rem 1rem 3rem 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}
</style>