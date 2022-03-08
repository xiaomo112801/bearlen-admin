<script>
import { h, resolveComponent } from "vue"

export default {
  template: "#aside-icon-template",
  props: {
    icon: String
  },
  render() {
    console.log(this.$slots)
    const ELicon = resolveComponent(this.icon)
    return h(
      ELicon
    )
  }
}
</script>

<style scoped>

</style>