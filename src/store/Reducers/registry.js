import { handleActions as RegistryReducer } from "redux-actions";
import { registry, registry_fail, registry_reset, registry_success } from "../Actions/registry";

const initialState = {
  // 正在注册状态
  loading: false,
  // 注册完成状态
  loaded: false,
  // 注册成功状态
  success: false,
  // 注册失败返回信息
  message: ''
}

const registryReducer = RegistryReducer({
  [registry]: (state, action) => {
    return {
      loading: true,
      loaded: false,
      success: false,
      message: ''
    }
  },
  [registry_success]: (state, action) => ({
    loading: false,
    loaded: true,
    success: true,
    message: false
  }),
  [registry_fail]: (state, action) => ({
    loading: false,
    loaded: true,
    success: false,
    message: action.payload.message
  }),
  [registry_reset]: () => ({
    // 正在注册状态
    loading: false,
    // 注册完成状态
    loaded: false,
    // 注册成功状态
    success: false,
    // 注册失败返回信息
    message: ''
  })
}, initialState)

export default registryReducer