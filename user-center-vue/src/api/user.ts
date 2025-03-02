// import myAxios from "@/request";

import myAxios from "@/request";

// /**
//  * 用户注册接口
//  * @param params
//  * @returns
//  */
// export const userRegister = async (params: any) => {
//   return myAxios.request({
//     url: "/api/user/register",
//     method: "POST",
//     data: params,
//   });
// };

// /**
//  * 用户登录
//  * @param params
//  * @returns
//  */
// export const userLogin = async (params: any) => {
//   const response = await myAxios.request({
//     url: "/api/user/login",
//     method: "POST",
//     data: params,
//   });

//   return response;
// };

// /**
//  * 注销登出
//  * @param params
//  * @returns
//  */
// export const userLogout = async (params: any) => {
//   const response = await myAxios.request({
//     url: "/api/user/logout",
//     method: "POST",
//     data: params,
//   });

//   return response;
// };

// /**
//  * 获取当前登录用户信息
//  * @param userid
//  */
// export const getCurrentUser = async () => {
//   const response = await myAxios.request({
//     url: "/api/user/current",
//     method: "GET",
//   });

//   return response;
// };

// /**
//  * 根据username 获取用户列表
//  * @param username
//  */
// export const searchUsers = async (username: string) => {
//   const response = await myAxios.request({
//     url: "/api/user/search",
//     method: "GET",
//     data: username,
//   });

//   return response;
// };

// /**
//  * 删除用户
//  * @param userId
//  */
// export const deleteUser = async (userId: string) => {
//   const response = await myAxios.request({
//     url: `/api/user/delete/${userId}`,
//     method: "POST",
//   });

//   return response;
// };

// 以下是参考

/**
 * 用户注册
 * @param params
 */
export const userRegister = async (params: any) => {
  return myAxios.request({
    url: "/api/user/register",
    method: "POST",
    data: params,
  });
};
/**
 * 用户登录
 * @param params
 */
export const userLogin = async (params: any) => {
  return myAxios.request({
    url: "/api/user/login",
    method: "POST",
    data: params,
  });
};

/**
 * 用户注销
 * @param params
 */
export const userLogout = async (params: any) => {
  return myAxios.request({
    url: "/api/user/logout",
    method: "POST",
    data: params,
  });
};

/**
 * 获取当前用户
 */
export const getCurrentUser = async () => {
  return myAxios.request({
    url: "/api/user/current",
    method: "GET",
  });
};

/**
 * 获取用户列表
 * @param username
 */
export const searchUsers = async (username: any) => {
  return myAxios.request({
    url: "/api/user/search",
    method: "GET",
    params: {
      username,
    },
  });
};

/**
 * 删除用户
 * @param id
 */
export const deleteUser = async (id: string) => {
  return myAxios.request({
    url: "/api/user/delete",
    method: "POST",
    data: id,
    // 关键点：要传递 JSON 格式的值
    headers: {
      "Content-Type": "application/json",
    },
  });
};
