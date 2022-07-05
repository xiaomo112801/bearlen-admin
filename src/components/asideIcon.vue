<script>
import { h, resolveComponent } from "vue"

export default {
  props: {
    icon: String
  },
  render() {
    const icon = this.icon || 'monitor'
    const ELicon = resolveComponent(icon)
    return h(
        ELicon
    )
  }
}
</script>