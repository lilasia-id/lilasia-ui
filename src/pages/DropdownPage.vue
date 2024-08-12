<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'
import AppDropdown from '@/components/dropdown/AppDropdown.vue'
import DropdownItem from '@/components/dropdown/DropdownItem.vue'
import DropdownItemGroup from '@/components/dropdown/DropdownItemGroup.vue'
import ComponentsPreview from '@/components/playground/ComponentsPreview.vue'
import MarkdownRenderer from '@/components/playground/MarkdownRenderer.vue'
</script>

<template>
  <div class="prose mx-auto max-w-4xl">
    <AppSection class="not-prose">
      <ComponentsPreview>
        <AppBlock bordered>
          <div class="p-24">
            <div class="flex items-center justify-center gap-8">
              <AppDropdown icon="sort" text="Dropdown Action" menu-position="left">
                <DropdownItemGroup>
                  <DropdownItem icon="edit" text="Edit" />
                  <DropdownItem icon="content_copy" text="Duplicate" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="archive" text="Archive" />
                  <DropdownItem icon="open_with" text="Move" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="delete" text="Delete" active-color="red" />
                </DropdownItemGroup>
              </AppDropdown>

              <AppDropdown icon="sort" text="Dropdown Action" menu-position="right">
                <template #button>
                  <AppButton color="black" text="Custom Dropdown Action" icon-right="more_vert" />
                </template>

                <DropdownItemGroup>
                  <DropdownItem icon="edit" text="Edit" />
                  <DropdownItem icon="content_copy" text="Duplicate" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="archive" text="Archive" />
                  <DropdownItem icon="open_with" text="Move" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="delete" text="Delete" active-color="red" />
                </DropdownItemGroup>
              </AppDropdown>

              <AppDropdown icon="sort" text="Dropdown Action" menu-position="center">
                <template #button>
                  <AppButton icon="more_vert" round />
                </template>

                <DropdownItemGroup>
                  <DropdownItem icon="edit" text="Edit" />
                  <DropdownItem icon="content_copy" text="Duplicate" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="archive" text="Archive" />
                  <DropdownItem icon="open_with" text="Move" />
                </DropdownItemGroup>

                <DropdownItemGroup>
                  <DropdownItem icon="delete" text="Delete" active-color="red" />
                </DropdownItemGroup>
              </AppDropdown>
            </div>
          </div>
        </AppBlock>
      </ComponentsPreview>
    </AppSection>

    <AppSection>
      <AppBlock bordered>
        <div class="p-24">
          <MarkdownRenderer class="max-w-4xl" file-path="docs/dropdown.md" />
        </div>
      </AppBlock>
    </AppSection>
  </div>
</template>
