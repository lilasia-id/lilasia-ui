<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import TabButton from '@/components/tabs/TabButton.vue'
import TabList from '@/components/tabs/TabList.vue'
import TabPanel from '@/components/tabs/TabPanel.vue'
import TabPanels from '@/components/tabs/TabPanels.vue'
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Tabs</h1>
      </template>

      <div class="px-24 pb-24">
        <AppTabs>
          <div class="flex flex-col gap-16">
            <TabList class="flex gap-x-8">
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton :color="selected ? 'black' : 'white'" text="For You" block />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton :color="selected ? 'black' : 'white'" text="Popular" block />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton :color="selected ? 'black' : 'white'" text="Top Rated" block />
              </TabButton>
            </TabList>

            <TabPanels>
              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure incidunt
                provident delectus soluta doloremque possimus molestiae? Inventore enim est sapiente
                unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>
            </TabPanels>
          </div>
        </AppTabs>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Vertical Tabs</h1>
      </template>

      <div class="px-24 pb-24">
        <AppTabs vertical>
          <div class="grid grid-cols-5 gap-16">
            <TabList class="flex flex-col gap-y-8">
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton
                  :color="selected ? 'black' : 'white'"
                  text="For You"
                  align="start"
                  block
                />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton
                  :color="selected ? 'black' : 'white'"
                  text="Popular"
                  align="start"
                  block
                />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton
                  :color="selected ? 'black' : 'white'"
                  text="Top Rated"
                  align="start"
                  block
                />
              </TabButton>
            </TabList>

            <TabPanels class="col-span-4">
              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure incidunt
                provident delectus soluta doloremque possimus molestiae? Inventore enim est sapiente
                unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>
            </TabPanels>
          </div>
        </AppTabs>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Disabled Tabs</h1>
      </template>

      <div class="px-24 pb-24">
        <AppTabs>
          <div class="flex flex-col gap-16">
            <TabList class="flex gap-x-8">
              <TabButton v-slot="{ selected, disabled }" class="w-full" disabled>
                <AppButton
                  :color="selected ? 'black' : 'white'"
                  text="For You (Disabled)"
                  block
                  :disabled="disabled"
                />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton :color="selected ? 'black' : 'white'" text="Popular" block />
              </TabButton>
              <TabButton v-slot="{ selected }" class="w-full">
                <AppButton :color="selected ? 'black' : 'white'" text="Top Rated" block />
              </TabButton>
            </TabList>

            <TabPanels>
              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>

              <TabPanel>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste
                iure incidunt provident delectus soluta doloremque possimus molestiae? Inventore
                enim est sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure
                incidunt provident delectus soluta doloremque possimus molestiae? Inventore enim est
                sapiente unde assumenda cupiditate, reprehenderit nobis aspernatur. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Nemo blanditiis ex iste iure incidunt
                provident delectus soluta doloremque possimus molestiae? Inventore enim est sapiente
                unde assumenda cupiditate, reprehenderit nobis aspernatur.
              </TabPanel>
            </TabPanels>
          </div>
        </AppTabs>
      </div>
    </AppBlock>
  </AppSection>
</template>
