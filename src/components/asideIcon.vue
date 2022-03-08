<script>
export default {
  template: "#aside-icon-template",
  props: {
    icon: String
  },
  render: (createElement) => {
    console.log(this.icon)
    return createElement(
      this.icon
    )
  }
}
</script>

<style scoped>

</style>