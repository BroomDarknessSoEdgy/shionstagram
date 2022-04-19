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
				<el-form-item
					:label="$t('submit.text_message')"
					prop="message"
					required
				>
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
					<div class="pfp-select">
						<a
							@click="form.pfp = index"
							v-for="(pfp, index) in profilePictures"
							:key="index"
							class="clickable"
							:class="index === form.pfp ? 'active' : ''"
						>
							<img class="pfp" :src="pfp" alt="" />
						</a>
					</div>
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
						:on-error="handleErroredUpload"
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

				<el-form-item>
					<div class="preview">
						<h3>{{ $t("submit.preview") }}</h3>
						<PostPreview
							:name="form.name"
							:location="form.location"
							:pfp="form.pfp"
							:src="file ? createPostPreview(file) : ''"
							:message="form.message"
						/>
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
import { profilePictures } from "../data/profilePictures";

import PostPreview from "../components/PostPreview";
import ImageCard from "./ImageCard.vue";
import Menu from "./Menu.vue";
import {
	ElForm,
	ElFormItem,
	ElUpload,
	ElButton,
	ElInput,
	ElDialog,
	ElResult,
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
		Menu,
		PostPreview,
	},
	data: () => ({
		isSubmitPending: false,
		isSubmitSuccess: false,
		isSubmitError: false,
		dialogImageUrl: "",
		dialogVisible: false,
		actionUrl: `${apiURL}/image`,
		profilePictures,
		file: undefined,
		form: {
			twitter: "",
			chosenMediaType: "image",
			name: "",
			message: "",
			pfp: 0,
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
					trigger: "change",
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
		handleErroredUpload() {
			this.form.image = undefined;
			this.file = undefined;
			this.isSubmitPending = false;
			this.isSubmitError = true;
		},
		handleOnChange(file) {
			this.file = file;
		},
		createPostPreview(ev) {
			const imgFile = ev.target.files[0];
			const url = URL.createObjectURL(imgFile);

			return url;
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
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
}

.pfp-select {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.pfp-select a {
	display: block;
	border: 1px solid var(--purple-600);
	border-radius: 0.5rem;
	width: 8rem;
	height: 8rem;
	overflow: hidden;
}

.preview {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	max-width: 25rem;
	margin-bottom: 2rem;
}

.pfp {
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
	filter: grayscale(0.5) brightness(0.8);
	transition: transform 150ms ease-out;
}

.pfp-select a.active {
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}

.pfp-select a.active img {
	transform: scale(1.05);
	filter: grayscale(0);
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
