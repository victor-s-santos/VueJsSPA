<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">

      <router-link to='/' 
      class='btn btn-info mb-3 mr-2'
      active-class="active"
      exact
      >
      Página Inicial
      </router-link>
      <router-link :to='{path: "/fisicos"}' 
      class='btn btn-info mb-3 mr-2'
      active-class="active">
      Físicos Importantes
      </router-link>
      <router-view></router-view>
    </div>
    
  </div>
</template>