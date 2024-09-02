<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
import { ref } from 'vue'

const showRightDrawer = ref(false)
const showLeftDrawer = ref(false)
const showTopDrawer = ref(false)
const showBottomDrawer = ref(false)
const showStaticBackdropDrawer = ref(false)
const showNoBackdropDrawer = ref(false)
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AppButton
            icon="dock_to_right"
            text="Open Right Drawer"
            @click="showRightDrawer = true"
          />
          <AppButton icon="dock_to_left" text="Open Left drawer" @click="showLeftDrawer = true" />
          <AppButton icon="dock_to_bottom" text="Open Top Drawer" @click="showTopDrawer = true" />
          <AppButton
            icon="dock_to_bottom"
            text="Open Bottom Drawer"
            @click="showBottomDrawer = true"
          />
          <AppButton
            icon="dock_to_right"
            text="Open Static Backrop Drawer"
            @click="showStaticBackdropDrawer = true"
          />
          <AppButton
            icon="dock_to_bottom"
            text="Open No Backdrop Drawer"
            @click="showNoBackdropDrawer = true"
          />
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/drawer.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>

  <Teleport to="body">
    <AppDrawer
      v-model="showTopDrawer"
      position="top"
      class="h-1/4 w-screen rounded-b-8 border-b border-b-black-10 bg-white"
      backdrop
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <h5 class="text-16 font-600 leading-24">Top Drawer</h5>
            <AppButton color="light" icon="close" @click="showTopDrawer = false" />
          </div>
        </template>

        <div class="px-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Beatae quas dicta maxime pariatur et quasi eum nam nostrum distinctio,
          reprehenderit temporibus ab iusto at debitis repellendus impedit amet. Quibusdam, saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe.
        </div>
      </AppBlock>
    </AppDrawer>

    <AppDrawer v-model="showRightDrawer" position="right" class="w-1/5 rounded-l-8" backdrop>
      <AppBlock class="flex h-screen flex-col">
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <AppButton color="light" icon="close" @click="showRightDrawer = false" />
            <h5 class="text-16 font-600 leading-24">Right Drawer</h5>
          </div>
        </template>

        <div class="h-full flex-1 overflow-y-auto px-24 pb-24">
          <p v-for="n in 10" :key="n">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
            pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at
            debitis repellendus impedit amet. Quibusdam, saepe. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Beatae quas dicta maxime pariatur et quasi eum nam nostrum
            distinctio, reprehenderit temporibus ab iusto at debitis repellendus impedit amet.
            Quibusdam, saepe.
          </p>
        </div>
      </AppBlock>
    </AppDrawer>

    <AppDrawer v-model="showLeftDrawer" position="left" class="w-1/5 rounded-r-8" backdrop>
      <AppBlock class="flex h-screen flex-col">
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <h5 class="text-16 font-600 leading-24">Left Drawer</h5>
            <AppButton color="light" icon="close" @click="showLeftDrawer = false" />
          </div>
        </template>

        <div class="h-full flex-1 overflow-y-auto px-24 pb-24">
          <p v-for="n in 10" :key="n">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
            pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at
            debitis repellendus impedit amet. Quibusdam, saepe. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Beatae quas dicta maxime pariatur et quasi eum nam nostrum
            distinctio, reprehenderit temporibus ab iusto at debitis repellendus impedit amet.
            Quibusdam, saepe.
          </p>
        </div>
      </AppBlock>
    </AppDrawer>

    <AppDrawer
      v-model="showBottomDrawer"
      position="bottom"
      class="h-1/4 w-screen rounded-t-8 border-t border-t-black-10 bg-white"
      backdrop
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <h5 class="text-16 font-600 leading-24">Bottom Drawer</h5>
            <AppButton color="light" icon="close" @click="showBottomDrawer = false" />
          </div>
        </template>

        <div class="px-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Beatae quas dicta maxime pariatur et quasi eum nam nostrum distinctio,
          reprehenderit temporibus ab iusto at debitis repellendus impedit amet. Quibusdam, saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe.
        </div>
      </AppBlock>
    </AppDrawer>

    <AppDrawer
      v-model="showStaticBackdropDrawer"
      position="right"
      class="h-screen w-1/5 rounded-l-8 border-l border-l-black-10 bg-white"
      backdrop="static"
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <AppButton color="light" icon="close" @click="showStaticBackdropDrawer = false" />
            <h5 class="text-16 font-600 leading-24">Static Backdrop Drawer</h5>
          </div>
        </template>

        <div class="px-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe.
        </div>
      </AppBlock>
    </AppDrawer>

    <AppDrawer
      v-model="showNoBackdropDrawer"
      position="right"
      class="h-screen w-1/5 rounded-l-8 border-l border-l-black-10 bg-white"
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <AppButton color="light" icon="close" @click="showNoBackdropDrawer = false" />
            <h5 class="text-16 font-600 leading-24">No Backdrop Drawer</h5>
          </div>
        </template>

        <div class="px-24">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas dicta maxime
          pariatur et quasi eum nam nostrum distinctio, reprehenderit temporibus ab iusto at debitis
          repellendus impedit amet. Quibusdam, saepe.
        </div>
      </AppBlock>
    </AppDrawer>
  </Teleport>
</template>
