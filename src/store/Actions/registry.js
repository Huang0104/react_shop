import { createAction } from "redux-actions";

// 发送注册请求的 actions
export const registry = createAction('registry')
//  注册成功的 actions
export const registry_success = createAction('registry_success')
//  注册失败的 actions
export const registry_fail = createAction('redistry_fail')
//  注册重置的 actions
export const registry_reset = createAction('registry_reset')