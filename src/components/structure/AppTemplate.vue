<template>
  <AppContainer>
    <AppAside slot="aside"></AppAside>
    <AppHeader slot="header"></AppHeader>
    <AppMain slot="main"></AppMain>

  </AppContainer>
</template>

<script>
  import AppAside from './AppAside'
  import AppHeader from './AppHeader'
  import AppMain from './AppMain'
  import AppContainer from './AppContainer'

  export default {
    name: "AppTemplate",
    components: {
      AppAside,
      AppHeader,
      AppMain,
      AppContainer
    },
  }
</script>

<style scoped>


</style>
