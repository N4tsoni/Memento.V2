<script>
import '@mdi/font/css/materialdesignicons.min.css'
export default {
    inject: ["primary_color"],
    props: ["title"],
    computed: {
        display_title() {
            if (this.title === undefined)
                return "MemIMTo";
            else
                return this.title;
        },
        is_logged() {
            if (this.$root.getCookie("jwt") == "")
                return false;
            else
                return true;
        }
    },
}
</script>
<template>
  <w-toolbar
  shadow
  bg-color="cyan-dark2"
  color="black"
  height="8em"
  class="xs 12 py-5 px-10">
  <w-flex row align-center class="wrapper">
    <div class="xs1">
      <div class="title1"><strong>Memento</strong></div>
    </div>
    <w-flex class="xs8"></w-flex>
    <w-flex class="xs3" display=" row">
    <w-flex column class="py2">
      <RouterLink to="/">
        <w-icon  color='black' bg-color="cyan-dark" size="30px">mdi mdi-home</w-icon>
      </RouterLink>
      <span class="mx-1"><strong>Acceuil</strong></span>
    </w-flex>  
    <w-flex column class="py2">
      <RouterLink to="/login">
        <w-icon spin color='black' bg-color="cyan-dark" size="30px">mdi mdi-account-circle</w-icon>
      </RouterLink>
      <span class="mx-1"><strong>{{ is_logged ? 'Connecté' : 'Connexion' }}</strong></span>
    </w-flex>
    <w-flex column class="py2">
      <RouterLink to="/upload">
        <w-icon  color='black' bg-color="cyan-dark" size="30px">mdi mdi-cloud</w-icon>
      </RouterLink>
      <span class="mx-1"><strong>Acceuil</strong></span>
    </w-flex>
    
    


    </w-flex>
  </w-flex>
  
</w-toolbar>

</template>