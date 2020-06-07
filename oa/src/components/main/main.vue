<template>
  <div ref="mainpanel">
    <Layout class="main">
      <Content class="main-content-con">    
        <Layout class="main-layout-con" ref="mainlayout">
          <Content class="content-wrapper">
            <keep-alive>
              <router-view  v-if="!$route.meta.keepAlive" />
            </keep-alive>
            
          </Content>
        </Layout>
      </Content>

    </Layout>
  </div>

</template>

<script>
import routers from '@/router/routers'
export default {
  name: 'Main',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
   
  },
  methods: {
   
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute;
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      });
    }
  },
  mounted () {
  }
}
</script>
