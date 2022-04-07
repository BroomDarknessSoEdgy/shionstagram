<template>
	<main>
		<Menu />
		<section class="submit">
			<header>
				<h2>{{ $t("submit.message_form_title") }}</h2>
				<p class="form_description">
					{{ $t("submit.form_description") }}
				</p>
			</header>
			<!-- flashed message -->
			<el-result
				v-if="isSubmitSuccess"
				icon="success"
				:title="$t('submit.submission_received')"
				:sub-title="$t('submit.thanks_for_submission')"
			>
				<template #extra>
					<el-button type="primary" size="medium" @click="onSubmitAgain">{{
						$t("submit.submit_another_message")
					}}</el-button>
				</template>
			</el-result>
			<el-result
				v-if="isSubmitError"
				icon="error"
				:title="$t('submit.submission_failed')"
				:sub-title="$t('submit.try_again_or_contact')"
			>
				<template #extra>
					<el-button type="primary" size="medium" @click="onSubmitAgain">{{
						$t("submit.try_again")
					}}</el-button>
				</template>
			</el-result>
			<!-- Form -->
			<el-form
				ref="form"
				:model="form"
				:rules="rules"
				v-if="!isSubmitSuccess && !isSubmitError"
				label-width="120px"
			>
				<!-- twitter -->
				<el-form-item :label="$t('submit.twitter_id')" prop="twitter" required>
					<el-input placeholder="@shiokko" v-model="form.twitter" />
					<div class="instructions">
						{{ $t("submit.twitter_id_instructions") }}
					</div>
				</el-form-item>

				<!-- name -->
				<el-form-item :label="$t('submit.name')" prop="name" required>
					<el-input
						:placeholder="$t('submit.name_example')"
						v-model="form.name"
					/>
					<div class="instructions">
						{{ $t("submit.name_instructions") }}
					</div>
				</el-form-item>

				<!-- location -->
				<el-form-item :label="$t('submit.location')" prop="location">
					<el-input
						:placeholder="$t('submit.location_example')"
						v-model="form.location"
					></el-input>
					<div class="instructions">
						{{ $t("submit.location_instructions") }}
					</div>
				</el-form-item>

				<!-- message -->
				<el-form-item :label="$t('submit.text_message')" required>
					<el-input
						v-model="form.message"
						:rows="4"
						type="textarea"
						show-word-limit
						maxlength="500"
					/>
					<div class="instructions">
						{{ $t("submit.text_instructions") }}
					</div>
				</el-form-item>

				<!-- profile picture -->
				<el-form-item :label="$t('submit.profile_picture')">
					<el-input-number v-model="form.pfp" :min="1" :max="8" />
				</el-form-item>

				<!-- image -->
				<el-form-item :label="$t('submit.image')">
					<el-upload
						ref="imageUpload"
						:action="actionUrl"
						list-type="picture-card"
						:on-preview="handlePictureCardPreview"
						:on-remove="handlePictureCardRemove"
						:on-success="handleSuccesfulUpload"
						:on-change="handleOnChange"
						:multiple="false"
						:limit="1"
						:auto-upload="false"
						accept="image/gif, image/jpeg, image/png, image/apng"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 4V20M20 12L4 12"
								stroke="#A175A8"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</el-upload>
					<el-dialog center v-model="dialogVisible">
						<image-card :src="dialogImageUrl" />
					</el-dialog>
					<div class="instructions img">
						{{ $t("submit.image_instructions") }}
					</div>
				</el-form-item>
				<!-- submit -->
				<el-form-item>
					<el-button
						:loading="isSubmitPending"
						type="primary"
						plain
						@click="onSubmit('form')"
					>
						{{ $t("submit.submit") }}
					</el-button>
				</el-form-item>
			</el-form>
		</section>
	</main>
</template>

<script>
import { apiURL } from "../config/config";

import ImageCard from "../components/ImageCard.vue";
import Menu from "../components/Menu.vue";
import {
	ElForm,
	ElFormItem,
	ElUpload,
	ElButton,
	ElInput,
	ElDialog,
	ElResult,
	ElInputNumber,
} from "element-plus";

export default {
	name: "Submit",
	components: {
		ElForm,
		ElFormItem,
		ElUpload,
		ElButton,
		ElInput,
		ElDialog,
		ElResult,
		ImageCard,
		ElInputNumber,
		Menu,
	},
	data: () => ({
		isSubmitPending: false,
		isSubmitSuccess: false,
		isSubmitError: false,
		dialogImageUrl: "",
		dialogVisible: false,
		actionUrl: `${apiURL}/image`,
		file: undefined,
		form: {
			twitter: "",
			chosenMediaType: "image",
			name: "",
			message: "",
			pfp: 1,
			image: undefined,
		},
		rules: {
			twitter: [
				{
					required: true,
					message: "Please input Twitter ID.",
					trigger: "blur",
				},
			],
			name: [
				{
					required: true,
					message: "Please input nickname.",
					trigger: "blur",
				},
			],
			message: [
				{
					required: true,
					message: "Please input text message.",
					trigger: "blur",
				},
			],
		},
	}),
	methods: {
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.response.location;
			this.dialogVisible = true;
		},
		handlePictureCardRemove() {
			this.form.image = undefined;
			this.file = undefined;
		},
		handleSuccesfulUpload(response) {
			this.form.image = response.id;
			this.handleMessageUpload();
		},
		handleOnChange(file) {
			this.file = file;
		},
		handleMessageUpload() {
			fetch(`${apiURL}/message`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					twitter: this.form.twitter,
					name: this.form.name,
					location: this.form.location,
					message: this.form.message,
					pfp: this.form.pfp,
					image: this.form.image,
				}),
			})
				.then(async (response) => {
					this.isSubmitPending = false;
					if (response.ok) {
						this.isSubmitSuccess = true;
					} else {
						this.isSubmitError = true;
					}
				})
				.catch(async () => {
					this.isSubmitPending = false;
					this.isSubmitError = true;
				});
		},
		onSubmitAgain() {
			this.isSubmitSuccess = false;
			this.isSubmitError = false;
		},
		onSubmit(formName) {
			this.isSubmitPending = true;

			this.$refs[formName].validate(async (valid) => {
				if (valid) {
					if (this.file !== undefined) {
						await this.$refs.imageUpload.submit();
					} else {
						this.handleMessageUpload();
					}
				} else {
					this.isSubmitPending = false;
					return false;
				}
			});
		},
	},
};
</script>

<style scoped>
main {
	display: grid;
	width: 100%;
	margin: auto;
	padding: 3rem 1rem;
	gap: 2rem;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: max-content 1fr;
	}
}

@media screen and (min-width: 768px) {
	main {
		gap: 2rem;
		padding: 3rem 2rem;
	}
}
@media screen and (min-width: 1440px) {
	main {
		padding: 3rem;
	}
}

.submit {
	width: 100%;
	max-width: 50rem;
	margin: auto;
	background-color: white;
	padding: 2rem 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}

header {
	margin-bottom: 2rem;
}

h2 {
	margin-bottom: 0.75rem;
}

label {
	color: inherit;
}

.instructions {
	margin-top: 0.5rem;
	line-height: 1.6;
	white-space: pre-line;
}

.instructions.img {
	width: 100%;
}

.el-form-item {
	margin-bottom: 2.5rem;
}
</style>
