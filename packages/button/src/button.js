import XEUtils from 'xe-utils/methods/xe-utils'

export default {
  name: 'VxeButton',
  props: {
    type: String,
    size: { type: String, default: () => 'primary' },
    name: [String, Number],
    content: String,
    placement: String,
    status: String,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    transfer: { type: Boolean, default: () => true }
  },
  data () {
    return {
      showPanel: false,
      animatVisible: false,
      panelIndex: 0,
      panelStyle: null,
      panelPlacement: null
    }
  },
  computed: {
    vSize () {
      return this.size || this.$parent.size || this.$parent.vSize
    },
    isText () {
      return this.type === 'text'
    },
    isFormBtn () {
      return ['submit', 'reset', 'button'].indexOf(this.type) > -1
    },
    btnType () {
      return this.isText ? this.type : 'button'
    },
    btnStatus () {
      return this.status || (this.type === 'primary' ? this.type : null)
    }
  },
  created () {
    if (this.type === 'primary') {
      console.warn('vxe.error.delProp', ['type=primary', 'status=primary'])
    }
    // GlobalEvent.on(this, 'syncwheel', this.handleSyncwheelEvent)
  },
  mounted () {
    const panelElem = this.$refs.panel
    if (panelElem && this.transfer) {
      document.body.appendChild(panelElem)
    }
  },
  beforeDestroy () {
    const panelElem = this.$refs.panel
    if (panelElem && panelElem.parentNode) {
      panelElem.parentNode.removeChild(panelElem)
    }
  },
  destroyed () {
    // GlobalEvent.off(this, 'syncwheel')
  },
  render (h) {
    const { $scopedSlots, $listeners, type, isFormBtn, btnStatus, btnType, vSize, name, disabled, loading, showPanel, animatVisible, panelPlacement } = this
    return $scopedSlots.dropdowns ? h('div', {
      class: ['vxe-button--dropdown', {
        [`size--${vSize}`]: vSize,
        'is--active': showPanel
      }]
    }, [
      h('button', {
        ref: 'btn',
        class: ['vxe-button', `type--${btnType}`, {
          [`size--${vSize}`]: vSize,
          [`theme--${btnStatus}`]: btnStatus,
          'is--disabled': disabled || loading,
          'is--loading': loading
        }],
        attrs: {
          name,
          type: isFormBtn ? type : 'button',
          disabled: disabled || loading
        },
        on: Object.assign({
          mouseenter: this.mouseenterEvent,
          mouseleave: this.mouseleaveEvent
        }, XEUtils.objectMap($listeners, (cb, type) => evnt => this.$emit(type, { $event: evnt }, evnt)))
      }, this.renderContent(h).concat([
        h('i', {
          class: 'vxe-button--dropdown-arrow'
        })
      ])),
      h('div', {
        ref: 'panel',
        class: ['vxe-button--dropdown-panel', {
          [`size--${vSize}`]: vSize,
          'animat--leave': animatVisible,
          'animat--enter': showPanel
        }],
        attrs: {
          'data-placement': panelPlacement
        },
        style: this.panelStyle
      }, [
        h('div', {
          class: 'vxe-button--dropdown-wrapper',
          on: {
            click: this.clickDropdownEvent,
            mouseenter: this.mouseenterEvent,
            mouseleave: this.mouseleaveEvent
          }
        }, $scopedSlots.dropdowns.call(this))
      ])
    ]) : h('button', {
      ref: 'btn',
      class: ['vxe-button', `type--${btnType}`, {
        [`size--${vSize}`]: vSize,
        [`theme--${btnStatus}`]: btnStatus,
        'is--disabled': disabled || loading,
        'is--loading': loading
      }],
      attrs: {
        name,
        type: isFormBtn ? type : 'button',
        disabled: disabled || loading
      },
      on: XEUtils.objectMap($listeners, (cb, type) => evnt => this.$emit(type, { $event: evnt }, evnt))
    }, this.renderContent(h))
  },
  methods: {
    renderContent (h) {
      const { $scopedSlots, content, icon, loading } = this
      const contents = []
      if (loading) {
        contents.push(
          h('i', {
            class: ['vxe-button--loading-icon']
          })
        )
      } else if (icon) {
        contents.push(
          h('i', {
            class: ['vxe-button--icon', icon]
          })
        )
      }
      if ($scopedSlots.default) {
        contents.push(
          h('span', {
            class: 'vxe-button--content'
          }, $scopedSlots.default.call(this))
        )
      } else if (content) {
        contents.push(
          h('span', {
            class: 'vxe-button--content'
          }, [])
        )
      }
      return contents
    },
    handleSyncwheelEvent (evnt) {
      if (this.showPanel) {
        console.log(111)
        this.updatePlacement()
      }
    },
    updateZindex () {

    },
    clickDropdownEvent (evnt) {
      const dropdownElem = evnt.currentTarget
      const wrapperElem = this.$refs.panel
      // const { flag, targetElem } = DomTools.getEventTargetNode(evnt, dropdownElem, 'vxe-button')
      // if (flag) {
      //   wrapperElem.dataset.active = 'N'
      //   this.showPanel = false
      //   setTimeout(() => {
      //     if (wrapperElem.dataset.active !== 'Y') {
      //       this.animatVisible = false
      //     }
      //   }, 200)
      //   this.$emit('dropdown-click', { name: targetElem.getAttribute('name'), $event: evnt }, evnt)
      // }
    },
    mouseenterEvent () {
      const wrapperElem = this.$refs.panel
      wrapperElem.dataset.active = 'Y'
      this.animatVisible = true
      setTimeout(() => {
        if (wrapperElem.dataset.active === 'Y') {
          this.showPanel = true
          this.updateZindex()
          this.updatePlacement()
        }
      }, 10)
    },
    mouseleaveEvent () {
      const wrapperElem = this.$refs.panel
      wrapperElem.dataset.active = 'N'
      setTimeout(() => {
        if (wrapperElem.dataset.active !== 'Y') {
          this.showPanel = false
          setTimeout(() => {
            if (wrapperElem.dataset.active !== 'Y') {
              this.animatVisible = false
            }
          }, 200)
        }
      }, 200)
    },
    updatePlacement () {
      this.$nextTick(() => {
        const { $refs, transfer, placement, panelIndex } = this
        const btnElem = $refs.btn
        const panelElem = $refs.panel
        const btnHeight = btnElem.offsetHeight
        const btntWidth = btnElem.offsetWidth
        const panelHeight = panelElem.offsetHeight
        const panelWidth = panelElem.offsetWidth
        const panelStyle = {
          zIndex: panelIndex,
          minWidth: `${btntWidth}px`
        }
        // const { boundingTop, boundingLeft, visibleHeight } = DomTools.getAbsolutePos(btnElem)
        // let panelPlacement = 'bottom'
        // if (transfer) {
        //   let top = boundingTop + btnHeight
        //   if (placement === 'top') {
        //     panelPlacement = 'top'
        //     top = boundingTop - panelHeight
        //   } else {
        //     // 如果下面不够放，则向上
        //     if (top + panelHeight > visibleHeight) {
        //       panelPlacement = 'top'
        //       top = boundingTop - panelHeight
        //     }
        //     // 如果上面不够放，则向下（优先）
        //     if (top < 0) {
        //       panelPlacement = 'bottom'
        //       top = boundingTop + btnHeight
        //     }
        //   }
        //   panelStyle.left = `${boundingLeft}px`
        //   panelStyle.top = `${top}px`
        // } else {
        //   if (placement === 'top') {
        //     panelPlacement = 'top'
        //     panelStyle.bottom = `${btnHeight}px`
        //   } else {
        //     // 如果下面不够放，则向上
        //     if (boundingTop + btnHeight + panelHeight > visibleHeight) {
        //       panelPlacement = 'top'
        //       panelStyle.bottom = `${btnHeight}px`
        //     }
        //   }
        //   if (panelWidth > btntWidth) {
        //     panelStyle.left = `${(btntWidth - panelWidth) / 2}px`
        //   }
        // }
        // this.panelStyle = panelStyle
        // this.panelPlacement = panelPlacement
      })
    }
  }
}
