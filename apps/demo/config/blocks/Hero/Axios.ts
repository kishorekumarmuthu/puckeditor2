import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjcyYzliZDA2YzNiMDk0ZTk5ODhiMmM1IiwiZW1haWwiOiJraXNob3Jla3VtYXJtdXRodTA5MDZAZ21haWwuY29tIiwiZG9tYWluX25hbWUiOiJjdXN0b21lcjIiLCJkb21haW5faWQiOiI2NzE2M2E1NDRlY2YwMTUzNzdkMTRlYzciLCJpYXQiOjE3MzI4OTE3MDMsImV4cCI6MTczNDYxOTcwM30.R5LsctQjE64pJ9FqCBOCvX_1eQfJKTQFftTr_YQ8xho";

export const api = axios.create({
  baseURL: "https://common.api.dgiverse.com/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export let AllDataForms: any = {};

export async function GetAllDataForms() {
  await api
    //.get("dataform/get_onedataform/674834aa21528b5b2c1a5e3b")
    .get("dataform/get_dataforms")
    .then((res) => {
      console.log("getForms", res);
      AllDataForms = res;
      return AllDataForms;
    })
    .catch((error) => {
      console.log("error ", error);
    });

  //return getFormsData;
}

export async function GetDataFormsUser(formId: string) {
  await api
    //.get("dataform/get_onedataform/674834aa21528b5b2c1a5e3b")
    .post("dataform/get_dataforms_user", {
      adv_filter_query: "",
      form_id: `${formId}`,
      is_adv_filter: "",
      page: "",
      perpage: "",
      search: "",
      sort_by: "",
      sort_type: "",
    })
    .then((res) => {
      console.log("GetDataFormsUser", res.data.result);
      return res;
    })
    .catch((error) => {
      console.log("error ", error);
    });

  //return getFormsData;
}
