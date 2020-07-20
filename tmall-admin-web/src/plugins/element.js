import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, ButtonGroup } from 'element-ui'
Vue.use(Button)
Vue.use(ButtonGroup)

import { Input } from 'element-ui'
Vue.use(Input)

import { Form, FormItem } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)

import { Card } from 'element-ui'
Vue.use(Card)

import { Checkbox } from 'element-ui'
Vue.use(Checkbox)

import { Avatar } from 'element-ui'
Vue.use(Avatar)

import { Icon } from 'element-ui'
Vue.use(Icon)

import { Message, MessageBox, Loading, Notification } from 'element-ui'
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$loading = Loading.service
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification

import { Container, Aside, Header, Main, Footer } from 'element-ui'
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)

import { Dropdown, DropdownItem, DropdownMenu } from 'element-ui'
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)

import { Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

import { Breadcrumb, BreadcrumbItem } from 'element-ui'
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

import { Cascader } from 'element-ui'
Vue.use(Cascader)

import { Select, Option, OptionGroup } from 'element-ui'
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)

import { Row, Col } from 'element-ui'
Vue.use(Row)
Vue.use(Col)

import { Table, TableColumn } from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)

import { Dialog } from 'element-ui'
Vue.use(Dialog)

import { Switch } from 'element-ui'
Vue.use(Switch)

import { Image } from 'element-ui'
Vue.use(Image)

import { Pagination } from 'element-ui'
Vue.use(Pagination)

import { Carousel, CarouselItem } from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)

import { Step, Steps} from "element-ui";
Vue.use(Step)
Vue.use(Steps)
