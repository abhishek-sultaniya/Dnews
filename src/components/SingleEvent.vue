<template>
    <div class="event">
     
        <h3>{{ event.title }}</h3>
        <h3>Location:   {{ event.Location }}</h3>
        <h3>Date   RVSP: {{event.RVSP}}</h3>
    
      <p>{{ snippet }}</p>
  
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  
  export default {
    props: ['event'],
    setup(props) {
      const snippet = computed(() => {
        return props.event.body.substring(0, 40) + '...'
      })
  
      return { snippet }
    }
  }
  </script>
  
  <style>
  
  </style>