<template>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1>Logout</h1>
        <button @click="$auth.logout()" class="button is-large is-danger">Click here to log out</button>
      </div>
    </div>
  </div>
</template>
