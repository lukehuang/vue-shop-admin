import service from '@/utils/request'

// 获取table data
export function fetchList(data) {
  return service({
    url: '/admin/menu/list',
    method: 'post',
    data
  })
}
// 新增
export function addAssembly(data) {
  return service({
    url: 'admin/menu',
    method: 'post',
    data
  })
}

// 修改
export function modifyAssembly(data) {
  return service({
    url: 'admin/menu',
    method: 'put',
    data
  })
}

// 删除
export function delAssembly(id) {
  return service({
    url: 'admin/menu/' + id,
    method: 'delete'
  })
}