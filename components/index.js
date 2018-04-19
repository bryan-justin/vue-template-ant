/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV
if (ENV !== 'production' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
  console.warn(
    'You are using a whole package of antd, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  )
}
/* @remove-on-es-build-end */

import { default as Affix } from './affix'

// import { default as Anchor } from './anchor'

import { default as AutoComplete } from './auto-complete'

import { default as Alert } from './alert'

import { default as Avatar } from './avatar'

import { default as BackTop } from './back-top'

import { default as Badge } from './badge'

import { default as Breadcrumb } from './breadcrumb'

import { default as Button } from './button'

import { default as Calendar } from './calendar'

import { default as Card } from './card'

import { default as Collapse } from './collapse'

// import { default as Carousel } from './carousel'

import { default as Cascader } from './cascader'

import { default as Checkbox } from './checkbox'

import { default as Col } from './col'

import { default as DatePicker } from './date-picker'

import { default as Divider } from './divider'

import { default as Dropdown } from './dropdown'

// import { default as Form } from './form'

import { default as Icon } from './icon'

import { default as Input } from './input'

import { default as InputNumber } from './input-number'

// import { default as Layout } from './layout'

// import { default as List } from './list'

import { default as LocaleProvider } from './locale-provider'

import { default as message } from './message'

import { default as Menu } from './menu'

import { default as Modal } from './modal'

import { default as notification } from './notification'

import { default as Pagination } from './pagination'

import { default as Popconfirm } from './popconfirm'

import { default as Popover } from './popover'

import { default as Progress } from './progress'

import { default as Radio } from './radio'

import { default as Rate } from './rate'

import { default as Row } from './row'

import { default as Select } from './select'

import { default as Slider } from './slider'

import { default as Spin } from './spin'

import { default as Steps } from './steps'

import { default as Switch } from './switch'

import { default as Table } from './table'

import { default as Transfer } from './transfer'

import { default as Tree } from './tree'

// import { default as TreeSelect } from './tree-select'

import { default as Tabs } from './tabs'

import { default as Tag } from './tag'

import { default as TimePicker } from './time-picker'

import { default as Timeline } from './timeline'

import { default as Tooltip } from './tooltip'

// import { default as Mention } from './mention'

import { default as Upload } from './upload'

import { default as version } from './version'

const components = [
  Affix,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Breadcrumb.Item,
  Button,
  Button.Group,
  Calendar,
  Card,
  Card.Meta,
  Card.Grid,
  Collapse,
  Collapse.Panel,
  Cascader,
  Checkbox,
  Checkbox.Group,
  Col,
  DatePicker,
  DatePicker.MonthPicker,
  DatePicker.RangePicker,
  DatePicker.WeekPicker,
  Divider,
  Dropdown,
  Dropdown.Button,
  Icon,
  Input,
  Input.Group,
  Input.Search,
  Input.TextArea,
  InputNumber,
  LocaleProvider,
  Menu,
  Menu.Item,
  Menu.SubMenu,
  Menu.Divider,
  Menu.ItemGroup,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Radio.Group,
  Radio.Button,
  Rate,
  Row,
  Select,
  Select.Option,
  Select.OptGroup,
  Slider,
  Spin,
  Steps,
  Steps.Step,
  Switch,
  Table,
  Table.Column,
  Table.ColumnGroup,
  Transfer,
  Tree,
  Tree.TreeNode,
  Tabs,
  Tabs.TabPane,
  Tag,
  Tag.CheckableTag,
  TimePicker,
  Timeline,
  Timeline.Item,
  Tooltip,
  Upload,
  Upload.Dragger,
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = message
  Vue.prototype.$notification = notification
  Vue.prototype.$info = Modal.info
  Vue.prototype.$success = Modal.success
  Vue.prototype.$error = Modal.error
  Vue.prototype.$warning = Modal.warning
  Vue.prototype.$confirm = Modal.confirm
}

export {
  version,
  install,
  message,
  notification,
  Affix,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Icon,
  Input,
  InputNumber,
  LocaleProvider,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
}

export default {
  version,
  install,
}
