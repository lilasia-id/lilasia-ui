<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppSection from '@/components/AppSection.vue'
import AppBlock from '@/components/blocks/AppBlock.vue'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', city: 'Los Angeles, California' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'New York, New York' },
  { id: 3, name: 'Robert Brown', email: 'robert@example.com', city: 'Chicago, Illinois' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', city: 'Houston, Texas' },
  { id: 5, name: 'Michael Wilson', email: 'michael@example.com', city: 'Phoenix, Arizona' }
]
</script>

<template>
  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Table</h1>
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
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Table Middle</h1>
      </template>

      <table class="middle">
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
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Table Compact</h1>
      </template>

      <div class="px-24 pb-24">
        <table class="compact">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppBlock>
  </AppSection>

  <AppSection>
    <AppBlock bordered>
      <template #header>
        <h1 class="text-24 font-600 leading-32">Table Rounded</h1>
      </template>

      <div class="px-24 pb-24">
        <table class="rounded">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppBlock>
  </AppSection>
</template>
