<template>
    <main>
        <el-row justify="center">
            <el-col span="12">
                <el-card>
                    <template #header>
                        <h2>{{ $t("submit.message_form_title") }}</h2>
                        <p class="form_description">
                                {{ $t("submit.form_description") }}
                        </p>
                    </template>
                    <el-result
                            v-if="isSubmitSuccess"    
                            icon="success"
                            :title="$t('submit.submission_received')"
                            :sub-title="$t('submit.thanks_for_submission')"
                    >
                        <template #extra>
                            <el-button type="primary" size="medium" @click="onSubmitAgain">{{ $t('submit.submit_another_message') }}</el-button>
                        </template>
                    </el-result>
                    <el-result
                        v-if="isSubmitError"
                        icon="error"
                        :title="$t('submit.submission_failed')"
                        :sub-title="$t('submit.try_again_or_contact')"
                    >
                        <template #extra>
                            <el-button type="primary" size="medium" @click="onSubmitAgain">{{ $t('submit.try_again') }}</el-button>
                        </template>
                    </el-result>
                    <el-form ref="form" :model="form" :rules="rules" v-if="!isSubmitSuccess && !isSubmitError" label-width="120px">
                        <el-form-item :label="$t('submit.twitter_id')" prop="twitter" required>
                            <el-input placeholder="@shiokko" v-model="form.twitter"></el-input>
                            <div>{{ $t("submit.twitter_id_instructions") }}</div>
                        </el-form-item>
                        <el-form-item :label="$t('submit.name')" prop="name" required>
                            <el-input :placeholder="$t('submit.name_example')" v-model="form.name"></el-input>
                            <div>{{ $t("submit.name_instructions") }}</div>
                        </el-form-item>
                        <el-form-item :label="$t('submit.location')" prop="location">
                            <el-input :placeholder="$t('submit.location_example')" v-model="form.location"></el-input>
                            <div>{{ $t("submit.location_instructions") }}</div>
                        </el-form-item>
                                <el-form-item :label="$t('submit.text_message')" required>
                                    <el-input
                                        v-model="form.message"
                                        :rows="4"
                                        type="textarea"
                                        show-word-limit
                                        maxlength="500"
                                    />
                                    <div>{{ $t("submit.text_instructions") }}</div>
                                </el-form-item>
                                <el-form-item :label="$t('submit.image')">
                                    <el-upload
                                    ref="imageUpload"
                                    :action='actionUrl'
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handlePictureCardRemove"
                                    :on-success="handleSuccesfulUpload"
                                    :multiple="false"
                                    :limit="1"
                                    :auto-upload="false"
                                    accept="image/gif, image/jpeg, image/png, image/apng"
                                    >
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <div>{{ $t("submit.image_instructions") }}</div>
                                    <el-dialog center v-model="dialogVisible">
                                        <image-card :src="dialogImageUrl" />
                                    </el-dialog>
                                </el-form-item>

                        <el-form-item>
                            <el-button :loading="isSubmitPending" type="primary" plain @click="onSubmit('form')">{{ $t("submit.submit") }}</el-button>
                            <div>{{ $t("submit.general_instructions") }}</div>
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
import { ElForm, ElFormItem, ElUpload, ElButton, ElInput, ElDialog, ElRow, ElCol, ElCard, ElResult } from 'element-plus'

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
      ElCard,
      ElResult,
      ImageCard,
  },
  data: () => ({
      isSubmitPending: false,
      isSubmitSuccess: false,
      isSubmitError: false,
      dialogImageUrl: '',
      dialogVisible: false,
      actionUrl: `${config.origin}/image`,
      form: {
          twitter: '',
          chosenMediaType: 'image',
          name: '',
          message: '',
          image: undefined,
      },
      rules: {
          twitter: [
              {
                required: true,
                message: 'Please input Twitter ID.',
                trigger: 'blur',
              }
          ],
          name: [
              {
                required: true,
                message: 'Please input nickname.',
                trigger: 'blur',
              }
          ],
          message: [
              {
                required: true,
                message: 'Please input text message.',
                trigger: 'blur',
              }
          ]
      }
  }),
  methods: {
      handlePictureCardPreview(file) {
          this.dialogImageUrl = file.response.location; 
          this.dialogVisible = true
      },
      handlePictureCardRemove() {
          this.form.image = undefined;
      },
      handleSuccesfulUpload(response) {
          this.form.image = response.id;
      },
      onSubmitAgain() {
          this.isSubmitSuccess = false;
          this.isSubmitError = false;
      },
      onSubmit(formName) {
        this.isSubmitPending = true;
        
        this.$refs[formName].validate(async (valid) => {
            if (valid) {
                await this.$refs.imageUpload.submit();
                fetch(`${config.origin}/message`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        image: this.form.image,
                        twitter: this.form.twitter,
                        message: this.form.message,
                        name: this.form.name,
                        location: this.form.location,
                    })
                    })
                    .then(async response => {
                        this.isSubmitPending = false;
                        if(response.ok) {
                            this.isSubmitSuccess = true;
                        } else {
                            this.isSubmitError = true;
                        }
                    })
                    .catch(async () => {
                        this.isSubmitPending = false;
                        this.isSubmitError = true;
                    });
            } else {
                this.isSubmitPending = false;
                return false
            }
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

p {
    max-width: 800px;
}
</style>