<template>
  <div class="home">
    <h1>News/events</h1>
    <div v-if="events.length">
      <EventList :events="events" />
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import EventList from '../components/EventList.vue'
import {projectFirestore} from '../firebase/config'
import { collection, query,getDocs, snapshotEqual } from "firebase/firestore";

export default {
    name: "HomeView",
    components:{EventList},
    setup() {
      const events = ref([])     
      const res=collection(projectFirestore,'posts')
      console.log(res)
      getDocs(res).then(snapshot =>{
        let docs=[]
        snapshot.docs.forEach(doc =>{
          docs.push({...doc.data(),id:doc.id})
        })
        events.value = docs
      })
      return { events};       
    },
}

</script>
