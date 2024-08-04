<script setup lang="ts">
import { ref } from 'vue'
import DeleteDialog from './components/playground/DeleteDialog.vue'
import { useDialog } from './composables/dialog'
import { useToast } from './composables/toast'
import AppBlock from './components/blocks/AppBlock.vue'
import AppButton from './components/AppButton.vue'
import AppDropdown from './components/dropdown/AppDropdown.vue'
import DropdownItemGroup from './components/dropdown/DropdownItemGroup.vue'
import DropdownItem from './components/dropdown/DropdownItem.vue'
import AppBadge from './components/AppBadge.vue'
import FormInput from './components/form/FormInput.vue'
import FormSelect from './components/form/FormSelect.vue'
import FormCheckbox from './components/form/FormCheckbox.vue'
import FormEditor from './components/form/FormEditor.vue'
import FormSwitch from './components/form/FormSwitch.vue'
import FormRadioGroup from './components/form/FormRadioGroup.vue'
import AppToast from './components/AppToast.vue'
import AppModal from './components/AppModal.vue'
import AppDivider from './components/AppDivider.vue'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
]

const currencies = [
  { value: 'idr', label: '🇮🇩 Indonesian Rupiah (IDR)' },
  { value: 'usd', label: '🇺🇸 United States Dollar (USD)' },
  { value: 'sgd', label: '🇸🇬 Singapore Dollar (SGD)' },
  { value: 'myr', label: '🇲🇾 Malaysian Ringgit (MYR)' }
]

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', city: 'Los Angeles, California' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'New York, New York' },
  { id: 3, name: 'Robert Brown', email: 'robert@example.com', city: 'Chicago, Illinois' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', city: 'Houston, Texas' },
  { id: 5, name: 'Michael Wilson', email: 'michael@example.com', city: 'Phoenix, Arizona' },
  { id: 6, name: 'Sarah Martinez', email: 'sarah@example.com', city: 'Philadelphia, Pennsylvania' },
  { id: 7, name: 'David Anderson', email: 'david@example.com', city: 'San Antonio, Texas' },
  { id: 8, name: 'Linda Thomas', email: 'linda@example.com', city: 'San Diego, California' },
  { id: 9, name: 'James Jackson', email: 'james@example.com', city: 'Dallas, Texas' },
  { id: 10, name: 'Patricia White', email: 'patricia@example.com', city: 'San Jose, California' }
]

const { showDialog } = useDialog()
const { toastSuccess, toastInfo, toastWarning, toastError } = useToast()

const isFavorite = ref(false)
const isSubmitting = ref(false)
const selectedPeople = ref()
const selectedCurrency = ref(currencies[0])

const submit = () => {
  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
  }, 500)
}

const showSuccessToast = () => {
  toastSuccess('This is success toast')
}

const showInfoToast = () => {
  toastInfo('This is info toast')
}

const showWarningToast = () => {
  toastWarning('This is warning toast')
}

const showDangerToast = () => {
  toastError('This is danger toast')
}

const openDeleteDialog = () => {
  showDialog(DeleteDialog)
}
</script>

<template>
  <main class="container mx-auto py-24">
    <AppBlock class="mb-24" bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32 text-black-100">Toasts</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex gap-8">
          <AppButton @click="showSuccessToast">Show Success Toast</AppButton>
          <AppButton color="blue" @click="showInfoToast">Show Info Toast</AppButton>
          <AppButton color="yellow" @click="showWarningToast">Show Warning Toast</AppButton>
          <AppButton color="red" @click="showDangerToast">Show Danger Toast</AppButton>
        </div>
      </div>
    </AppBlock>

    <AppBlock class="mb-24" bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32 text-black-100">Buttons</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="mb-8 flex gap-8">
          <AppButton>Default</AppButton>
          <AppButton icon="search">Default with icon</AppButton>
          <AppButton icon-right="search">Default with icon</AppButton>
          <AppButton disabled>Default Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="light">Light</AppButton>
          <AppButton color="light" icon="close">Light with icon</AppButton>
          <AppButton color="light" icon-right="close">Light with icon</AppButton>
          <AppButton color="light" disabled>Light Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="blue">Blue</AppButton>
          <AppButton color="blue" icon="info">Blue with icon</AppButton>
          <AppButton color="blue" icon-right="info">Blue with icon</AppButton>
          <AppButton color="blue" disabled>Blue Disabled</AppButton>
          <AppButton color="blue" outline>Outlined Blue</AppButton>
          <AppButton color="blue" outline disabled>Outlined Blue Disabled</AppButton>
        </div>

        <div class="mb-8 flex gap-8">
          <AppButton color="yellow">Yellow</AppButton>
          <AppButton color="yellow" icon="warning">Yellow with icon</AppButton>
          <AppButton color="yellow" icon-right="warning">Yellow with icon</AppButton>
          <AppButton color="yellow" disabled>Yellow Disabled</AppButton>
        </div>

        <div class="mb-24 flex items-center gap-8">
          <AppButton color="red">Red</AppButton>
          <AppButton color="red" icon="error">Red with icon</AppButton>
          <AppButton color="red" icon-right="error">Red with icon</AppButton>
          <AppButton color="red" disabled>Red Disabled</AppButton>
          <AppButton color="red" outline>Outlined Red</AppButton>
          <AppButton color="red" outline disabled>Outlined Red Disabled</AppButton>
        </div>

        <div class="mb-24 max-w-screen-sm">
          <AppButton color="blue" icon="add_circle" block>Block Button</AppButton>
        </div>

        <div class="mb-24 flex items-center gap-8">
          <AppButton color="blue" icon="send" :loading="isSubmitting" @click="submit">
            Submit
          </AppButton>
          <AppButton loading>Submit</AppButton>
          <AppButton color="red" loading>Submit</AppButton>
        </div>

        <div class="mb-24 flex items-center gap-8">
          <AppButton href="https://lilasia.id">Self Target</AppButton>
          <AppButton href="https://lilasia.id" target="_blank">Blank Target</AppButton>
        </div>

        <div class="mb-24 mt-16 flex items-center gap-8">
          <AppDropdown icon="sort" text="Dropdown Action">
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

          <AppDropdown icon="sort" text="Dropdown Action">
            <template #button>
              <AppButton color="blue" text="Custom Dropdown Action" icon-right="more_vert" />
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

          <AppDropdown icon="sort" text="Dropdown Action">
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

        <AppDivider />

        <div class="mb-8 mt-24 flex items-center gap-8">
          <AppButton icon="search" />
          <AppButton color="light" icon="close" />
          <AppButton color="blue" icon="info" />
          <AppButton color="yellow" icon="warning" />
          <AppButton color="red" icon="delete" @click="openDeleteDialog" />
          <AppButton color="red" icon="delete" subtle @click="openDeleteDialog" />
        </div>

        <div class="flex items-center gap-8">
          <AppButton
            :icon="{ name: 'favorite', filled: isFavorite }"
            :icon-class="isFavorite ? 'text-red-100' : ''"
            round
            @click="isFavorite = !isFavorite"
          />
          <AppButton color="light" icon="close" round />
          <AppButton color="blue" icon="info" round />
          <AppButton color="yellow" icon="warning" round />
          <AppButton color="red" icon="delete" round @click="openDeleteDialog" />
          <AppButton color="red" icon="delete" round subtle @click="openDeleteDialog" />
        </div>
      </div>
    </AppBlock>

    <AppBlock class="mb-24" bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32 text-black-100">Badges</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="mb-8 flex gap-8">
          <AppBadge icon="explosion" label="Default Color" />
          <AppBadge color="blue" icon="info" label="Blue Color" />
          <AppBadge color="red" icon="error" label="Red Color" />
          <AppBadge color="yellow" icon="warning" label="Yellow Color" />
          <AppBadge color="green" icon="check_circle" label="Green Color" />
        </div>

        <div class="flex gap-8">
          <AppBadge icon="explosion" label="Pill Default Color" pill />
          <AppBadge color="blue" icon="info" label="Pill Blue Color" pill />
          <AppBadge color="red" icon="error" label="Pill Red Color" pill />
          <AppBadge color="yellow" icon="warning" label="Pill Yellow Color" pill />
          <AppBadge color="green" icon="check_circle" label="Pill Green Color" pill />
        </div>
      </div>
    </AppBlock>

    <AppBlock class="mb-24" bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32 text-black-100">Forms</h1>
      </template>

      <div class="px-24 pb-24">
        <div class="flex max-w-lg flex-col gap-16">
          <FormInput id="name" label="Name" placeholder="Input Name" autocomplete="username" />

          <FormInput
            id="email"
            type="email"
            label="Email"
            autocomplete="current-password"
            placeholder="Input Email"
            model-value="johndoe123"
            required
            error="Invalid email format"
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Input Password"
            required
          />

          <FormSelect
            id="people"
            v-model="selectedPeople"
            label="People"
            :options="people"
            option-label="name"
            filter-key="name"
            display-value-key="name"
            placeholder="Select People"
            required
            error="Invalid People"
          />

          <FormCheckbox id="remember" label="Remember me" />

          <FormEditor
            id="content"
            label="Content"
            placeholder="Write anything here..."
            required
            error="Required"
          />

          <FormRadioGroup
            id="currency"
            v-model="selectedCurrency"
            label="Currency"
            :options="currencies"
            option-label="label"
            required
          />

          <FormSwitch id="switch" />
        </div>
      </div>
    </AppBlock>

    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32 text-black-100">Tables</h1>
      </template>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th class="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.city }}</td>
            <td>
              <div class="flex items-center justify-end gap-8">
                <AppButton icon="edit_square" />
                <AppButton color="red" icon="delete" subtle />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <template #footer>
        <div class="flex items-center justify-between gap-24">
          <div></div>
          <div class="flex items-center justify-end gap-8">
            <AppButton text="Prev" icon="chevron_left" />
            <AppButton text="Next" icon-right="chevron_right" />
          </div>
        </div>
      </template>
    </AppBlock>
  </main>

  <Teleport to="body">
    <AppToast />
    <AppModal />
  </Teleport>
</template>
