<template>
  <div class="text-center">
    <Abc />
    <A-button type="primary" @click="onClick">Create category</A-button>
  </div>
</template>

<script lang="ts" setup>
import { useMutation } from '@tanstack/vue-query'
import Abc from '@/components/abc/index.vue'
import { sendPost } from '@/adapter/config'

const mutation = useMutation({
  mutationFn: (params: string) => createNewCatgory(params),
})

const createNewCatgory = async (params: string) =>
  await sendPost('http://localhost:3000/api/v1/create-category', {
    name: params,
  }).then((res) => res.data)

const onClick = () => {
  mutation.mutate('gggg')
}
</script>
