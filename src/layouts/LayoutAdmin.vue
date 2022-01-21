<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div style="text-align: center;color: white;padding: 1.2rem">
        Dashboard
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <template v-for="menu in $router.options.routes">
          <template v-if="!menu.meta.hidden">
            <a-menu-item :key="menu.name" v-if="!menu.children">
              <router-link :to="{name: menu.name}"  >
                <a-icon :type="menu.meta.icon" /><span>{{ menu.meta.title }}</span>
              </router-link>
            </a-menu-item>
            <a-sub-menu :key="menu.name" v-else>
              <span slot="title"><a-icon :type="menu.meta.icon" /><span>{{ menu.meta.title }}</span></span>
              <template v-for="child in menu.children">
                <a-menu-item :key="child.name" v-if="!child.meta || !child.meta.hidden">
                  <router-link :to="{name: child.name}">
                    {{ child.meta.title }}
                  </router-link>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content ><router-view></router-view></a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style></style>