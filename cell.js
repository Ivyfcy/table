import TableExpand from './expand'

export default {
  name: 'TableCell',
  functional: true,
  compoments: {
    TableExpand
  },
  props: {
    column: {
      type: Object,
      default: () => {}
    }
  },
  render: (h, ctx) => {
    let props = ctx.props.column
    if (props.type === 'html') {
      return ( <
        elTableColumn { ...{
            props: props,
            scopedSlots: {
              default: scope => < div { ...{
                  domProps: {
                    innerHTML: scope.row[props.prop]
                  }
                }
              }
              />
            }
          }
        }
        />
      )
    } else if (props.render) {
      return ( < elTableColumn { ...{
            props: props,
            scopedSlots: {
              default: scope => < TableExpand render = {
                props.render
              }
              data = {
                scope
              }
              />
            }
          }
        }
        />
      )
    } else {
      return <elTableColumn { ...{
          props: props
        }
      }
      />
    }
  }
}