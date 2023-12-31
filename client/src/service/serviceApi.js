import { sendRequest } from "./rootApi";
// const GET = 'get';
const POST = "post";

// category
export const categoryInsertApi = async (payload = []) => {
  return sendRequest(POST, "/api/admin/category-store", payload);
};

export const categoryListApi = async (payload = []) => {
  return sendRequest(POST, "/api/admin/category-list", payload);
};

export const categoryUpdateApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/category-update/${id}`, payload);
};

export const categoryDeleteApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/category-delete/${id}`, payload);
};

export const categoryFindApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/category/${id}`, payload);
};

export const categoryDropdownApi = async (payload = []) => {
  return sendRequest(POST, '/api/admin/category-dropdown-list', payload);
}

// product
export const productSaveApi = async (payload = []) => {
  return sendRequest(POST, '/api/admin/product-save', payload);
}

export const productListApi = async (payload = []) => {
  return sendRequest(POST, '/api/admin/product-list', payload);
}

export const productDetailsApi = async (payload = []) => {
  return sendRequest(POST, `/api/admin/product-details`, payload);
}

export const productUpdateApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/product-update/${id}`, payload);
}

export const productDeleteApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/product-delete/${id}`, payload);
};

export const productActiveListApi = async (payload = []) => {
  return sendRequest(POST, '/api/get-featured-products', payload);
}

// user
export const userListApi = async (payload = []) => {
  return sendRequest(POST, "/api/admin/user-list", payload);
};

export const userUpdateApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/user-update/${id}`, payload);
};

export const userDeleteApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/user-delete/${id}`, payload);
};

export const userFindApi = async (id, payload = []) => {
  return sendRequest(POST, `/api/admin/user/${id}`, payload);
};

