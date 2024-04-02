<script>
import  Toolbar_1 from '/src/components/Toolbar_1.vue'
import { RouterView, RouterLink } from 'vue-router';
import '@mdi/font/css/materialdesignicons.min.css'
export default {
  methods: {
      getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    },
  components: { Toolbar_1 },
  data: function () {
    return {
      items: [
    { id: 'item1' }
  ]
      
    }
  },
}
</script>

<template>  
  <w-app>
      <Toolbar_1></Toolbar_1>
      <w-flex class="row" >
        <div id="Navigation" class="grow mx0" >
          <strong> Navigation </strong><br />
          <w-accordion :items="items">
            <template #item-title.item1>
              Navigation
              <w-tag class="ml2" color="red" sm outline>HOT</w-tag>
            </template>
            <template #item-content.item1>
              <p>Voici la naviagation de l'application.</p>
              <w-flex column align-center justify-space-between class="wrapper">
                <router-link to="/albumlistview">
                  <w-button
                class="mt3"
          
                route="https://github.com/antoniandre/wave-ui">
                Afficher mes albums
              </w-button>


                </router-link>
              <router-link to="/upload">
                <w-button
              class="mt3"
        
              route="https://github.com/antoniandre/wave-ui">
              Upload un album photo
            </w-button>


              </router-link>  
              <router-link to="/WhoWeAre">
                <w-button
                class="mt3"
          
                route="https://github.com/antoniandre/wave-ui">
                Qui somme nous? 
              </w-button>

              </router-link>
              



              </w-flex>
              

            </template>


          </w-accordion>

        
        
        </div>
        <aside align-center justify-center class="xs10 mx0 my0">
          <w-flex row flex class="mx0 my0 px0 py0 xs12">
            <w-flex class="xs6 py0 pa4"></w-flex>
            <w-flex column justify-space-between  class="xs2">
              <w-icon spin bg-color="#bb0d0ddc" class="xs12">mdi mdi-star </w-icon> 
              <span id="CenteredTxt"> <strong>C'est ici que vous accédez aux fonctionnalitées de Memento</strong></span>
            </w-flex>
            <w-flex class="xs5 pa4 "></w-flex>


          </w-flex>

          <RouterView class="ml10 mr10 mt5 mb5"></RouterView>
        </aside>
      </w-flex>
      <footer>
        <strong>
          Memento APP
        </strong>

      </footer>

  </w-app>
  
</template>

<style scoped>
/* Demo styles - can be discarded. */
.w-app {padding: 0px;background-color: #026673;}
header, footer, aside, main {
  margin: 20px;
  padding: 10px;
  color: #666;
  border: 2px solid rgba(0, 0, 0, 0.07);
}
footer {background-color: #026673;min-height: 40px; color: black; align-items: center; justify-content: center; display: flex;}
aside {background-color: #026673; color: #efffed;

}
main {background-color: #026673}
#Navigation{
  background-color: #fdfdfd;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 2px  solid rgba(0, 0, 0, 0.07);
}
#CenteredTxt{text-align: center; font-size: 10pt;display: flex;}


</style>