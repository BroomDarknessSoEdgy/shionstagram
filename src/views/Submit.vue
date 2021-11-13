<template>
    <main>
        <el-row justify="center">
            <el-col span="12">
                <el-card>
                    <el-form label-width="120px">
                        <el-form-item>
                            <h2>{{ $t("submit.message_form_title") }}</h2>
                        </el-form-item> 
                        <el-form-item :label="$t('submit.twitter_id')">
                            <el-input placeholder="@shiokko" v-model="form.twitter"></el-input>
                            <div>{{ $t("submit.twitter_id_instructions") }}</div>
                        </el-form-item>
                        <el-tabs v-model="form.chosenMediaType">
                            <el-tab-pane :label="$t('submit.image')" name="image">
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
                                    <div>{{ $t("submit.image_instructions") }}</div>
                                    <el-dialog center v-model="dialogVisible">
                                        <image-card :src="dialogImageUrl" />
                                    </el-dialog>
                                </el-form-item>
                            </el-tab-pane>
                            <el-tab-pane :label="$t('submit.text')" name="text">
                                <el-form-item :label="$t('submit.text_message')">
                                    <el-input
                                        v-model="form.message"
                                        :rows="4"
                                        type="textarea"
                                        show-word-limit
                                        maxlength="280"
                                    />
                                    <div>{{ $t("submit.text_instructions") }}</div>
                                </el-form-item>
                            </el-tab-pane>
                        </el-tabs>
                        <el-form-item>
                            <el-button type="primary" plain @click="onSubmit">{{ $t("submit.submit") }}</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </main>
</template>

<script>
import config from '../config';
import ImageCard from '../components/ImageCard.vue'
import { ElForm, ElFormItem, ElUpload, ElButton, ElInput, ElDialog, ElRow, ElCol, ElTabs, ElTabPane, ElCard } from 'element-plus'

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
      ElTabs,
      ElTabPane,
      ElCard,
      ImageCard,
  },
  data: () => ({
      dialogImageUrl: '',
      dialogVisible: false,
      image: undefined,
      actionUrl: `${config.origin}/image`,
      form: {
          twitter: '',
          chosenMediaType: 'image',
          message: ''
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
        if(this.form.chosenMediaType === 'image') {
            this.form.message = undefined;
        }

        if(this.form.chosenMediaType === 'text') {
            this.image = undefined;
        }

        fetch(`${config.origin}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: this.image,
                twitter: this.form.twitter,
                message: this.form.message,
                mediaType: this.form.chosenMediaType
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