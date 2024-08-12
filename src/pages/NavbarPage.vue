<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <div class="flex flex-col gap-16">
          <AppBlock>
            <template #header>
              <div class="font-600">Static</div>
            </template>
            <div class="px-24 pb-24">
              <div class="max-h-[10rem] overflow-y-auto rounded-b-8 rounded-t-8 bg-blue-10">
                <AppNavbar class="bg-black-100 py-8 text-white md:py-12">
                  <div class="flex items-center justify-center gap-16">
                    <AppButton color="black" text="Home" />
                    <AppButton color="black" text="About" />
                    <AppButton color="black" text="Contact" />
                  </div>
                </AppNavbar>

                <div class="p-16">
                  <AppSection no-gap>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>
                </div>
              </div>
            </div>
          </AppBlock>

          <AppBlock>
            <template #header>
              <div class="font-600">Sticky</div>
            </template>
            <div class="px-24 pb-24">
              <div class="max-h-[10rem] overflow-y-auto rounded-b-8 rounded-t-8 bg-blue-10">
                <AppNavbar class="bg-black-100 py-8 text-white md:py-12" sticky>
                  <div class="flex items-center justify-center gap-16">
                    <AppButton color="black" text="Home" />
                    <AppButton color="black" text="About" />
                    <AppButton color="black" text="Contact" />
                  </div>
                </AppNavbar>

                <div class="p-16">
                  <AppSection no-gap>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>

                  <AppSection>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quas labore
                    maiores, mollitia quos a voluptate exercitationem! Nemo maxime sequi repudiandae
                    perspiciatis voluptatem a doloremque tempore, iure, ex totam dolores.
                  </AppSection>
                </div>
              </div>
            </div>
          </AppBlock>
        </div>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/navbar.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
