<template>
  <v-card dark>
    <v-card-title>
      <h2>Sign Up</h2>
    </v-card-title>
    <v-card-text>
      <form>
        <v-text-field
          label="User Name"
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :error-messages="emailErrors"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          required
        ></v-text-field>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :error-messages="checkboxErrors"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
          required
        ></v-checkbox>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
</style>

<script>
export default {
}
</script>
