<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import { ref } from 'vue'

const showRightDrawer = ref(false)
const showLeftDrawer = ref(false)
const showTopDrawer = ref(false)
const showBottomDrawer = ref(false)
const showStaticBackdropDrawer = ref(false)
const showNoBackdropDrawer = ref(false)
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Drawer</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="mb-8 flex items-center gap-8">
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
        </div>

        <div class="mb-8 flex items-center gap-8">
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
      </div>
    </AppBlock>
  </AppSection>

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

    <AppDrawer
      v-model="showRightDrawer"
      position="right"
      class="h-screen w-1/5 rounded-l-8 border-l border-l-black-10 bg-white"
      backdrop
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <AppButton color="light" icon="close" @click="showRightDrawer = false" />
            <h5 class="text-16 font-600 leading-24">Right Drawer</h5>
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
      v-model="showLeftDrawer"
      position="left"
      class="h-screen w-1/5 rounded-r-8 border-r border-r-black-10 bg-white"
      backdrop
    >
      <AppBlock>
        <template #header>
          <div class="flex items-center justify-between gap-8">
            <h5 class="text-16 font-600 leading-24">Left Drawer</h5>
            <AppButton color="light" icon="close" @click="showLeftDrawer = false" />
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
