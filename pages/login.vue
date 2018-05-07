<template>
  <div class="container content has-text-centered">
    <h1>Login</h1>
    <button @click="$auth.loginWith('auth0')" class="button is-large is-primary">Click here to log in</button>
  </div>
</template>
