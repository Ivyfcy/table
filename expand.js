export default {
  name: 'TableExpand',
  functional: true,
  props: {
    render: Function,
    data: {
      type: Object,
      default: () => {}
    }
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.data)
  }
}