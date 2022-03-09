<script>
import { h, resolveComponent } from "vue"

export default {
  props: {
    icon: String
  },
  render() {
    const ELicon = resolveComponent(this.icon)
    return h(
        ELicon
    )
  }
}
</script>

<style scoped>

</style>